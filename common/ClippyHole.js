
function getInfoClippyElement (x,y,w,h){
	var point1 = new Object();
	point1.x = x;
	point1.y = y;
	var point2 = new Object();
	point2.x = x;
	point2.y = y + h;
	var point3 = new Object();
	point3.x = x + w;
	point3.y = y + h;
	var point4 = new Object();
	point4.x = x + w;
	point4.y = y;
	return [point1,point2,point3,point4];
	
}

function createClippy(arrayHoles){
	var arrayPoint = new Array();
	var arrayRelaiPoint = new Array();
	var point = new Object();
	point.x = 0; point.y = 0;
	arrayPoint.push(point);
	arrayHoles.forEach(function(hole){
		//Creation du point relai
		var lastPoint = arrayPoint[arrayPoint.length - 1]
		var firstNextPoint = hole[0];
		var pointRelai = new Object();
		pointRelai.x = firstNextPoint.x; pointRelai.y = lastPoint.y;
		arrayRelaiPoint.push(pointRelai);
		arrayPoint.push(pointRelai);
		//Ajout des autres points
		for (var i = 0; i < 5; i++){
			point = new Object;
			if(i == 4){
				point.x = hole[0].x; point.y = hole[0].y;
				arrayPoint.push(point);
			}else{
				point.x = hole[i].x; point.y = hole[i].y;
				arrayPoint.push(point);
			}
		}
	});
	//fin des la création des hole
	//On refait le chemin en sens inverse
	
	for (var j =  arrayRelaiPoint.length -1 ; j > -1; j--){
		arrayPoint.push(arrayRelaiPoint[j]);
		if(j != 0){
			point = new Object;
			point.x = arrayHoles[j-1][0].x; point.y =  arrayHoles[j-1][0].y;
			arrayPoint.push(point);
		}
	}
	
	//Transformation du tableau en chaine pour la variable CSS
	var chaineFinal = "";
	arrayPoint.forEach(function(point){
		var chaineHole = point.x + 'px ' + point.y + 'px,';
		chaineFinal += chaineHole;
	});
	
	//Ajout des derniers point pour finir le tour
	chaineFinal += '100% 0px,';
	chaineFinal += '100% 100%,';
	chaineFinal += '0px 100%';
	/*arrayPoint.push('100% 0px');
	arrayPoint.push('100% 100%');
	arrayPoint.push('0px 100px');*/
	return chaineFinal;
}
var w = 1000;
var h = 1000;
var rad = 20;


var svg = d3.select("svg")
			.attr("width",w)
			.attr("height",h);

var birthDay = [
	{"name":"stine","day":1,"month":10,"yr":90},
	{"name":"evin","day":11,"month":9,"yr":98},
	{"name":"ann","day":12,"month":3,"yr":95},
	{"name":"rachel","day":18,"month":6,"yr":80}
];
console.log(birthDay[0]);

var onePiece = [];
// onePiece.push(birthDay[0]);

// var oneCirc = svg.selectAll('.oneCirc')
// 	.data(onePiece)
// 	.join('circle')
// 	.attr('cx',w/2)
// 	.attr('cy',h/2)
// 	.attr('r',function(d){
// 		return d.yr;
// 	})
// 	.attr('fill','pink')

var dayRect = svg.selectAll('.dayRect')
	.data(birthDay)
	.join('rect') 
	.attr('class', function(d){
		return d.name+"day";
	})
	.attr('x', function(d,i){
		return 50+i*150;
	})
  	.attr('y', 20)
  	.attr('width', 10)
  	.attr('height', function(d){
		return d.day*10;
	})
  	.attr('fill','none')
  	.attr('stroke-width', function(d){
  		if(d.name=='rachel'){
  			return 4;
  		}else{
  			return 1;
  		}
  	})
	.attr('stroke','magenta');


var monthRect = svg.selectAll('.monthRect')
	.data(birthDay)
	.join('rect') 
	.attr('class', function(d){
		return d.name+"month";
	})
	.attr('x', function(d,i){
		return 50+i*150;
	})
  	.attr('y', 20)
  	.attr('width', 10)
  	.attr('height', function(d){
		return d.month*10;
	})
  	.attr('fill','none')
	.attr('stroke','blue');

var yearRect = svg.selectAll('.yearRect')
	.data(birthDay)
	.join('rect') 
	.attr('class', function(d){
		return d.name +"year";
	})
	.attr('x', function(d,i){
		return 50+i*150;
	})
  	.attr('y', 20)
  	.attr('width', 10)
  	.attr('height', function(d){
		return d.yr*10;
	})
  	.attr('fill','none')
	.attr('stroke','orange');






// var evBD = [3,6,90]
// var rectDay = svg.selectAll('.evRect')
// 	.data(evBD)
// 	.join('rect')  
// 	.attr('x', function(d,i){
// 		return 50+i*50;
// 	})
//   	.attr('y', h/4)
//   	.attr('width', function(d){
// 		return d;
// 	})
//   	.attr('height', function(d){
// 		return d;
// 	})
//   	.attr('fill','none')
// 	.attr('stroke','magenta')







 // 	.attr('fill', function(d){
	// 		return 'rgb('+d*2+',10, 200)'
	// })

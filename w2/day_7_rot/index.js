var w = 1000;
var h = 500;
var rad = 20;
var margin = rad*2;


var svg = d3.select("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")

var arrData = [1, 10, 17, 28];
var min = d3.min(arrData);
var max = d3.max(arrData);

var xScale = d3.scaleLinear()
				.domain([min, max])
				.range([margin, w-margin]);

////1. JUST ROTATE?
// var rects = svg
// 	.selectAll('rect')
// 	.data(arrData)
// 	.join('rect')
// 	.attr('x', function(d){
// 		return xScale(d);
// 	})
// 	.attr('y', h/2)
// 	.attr('width', rad)
// 	.attr('height', rad)
// 	.attr('transform', 'rotate(45)')
// 	.attr('fill', 'none')
// 	.attr('stroke','magenta');


////2. TRANSFORM TO ROTATE?
// var rects = svg
// 	.selectAll('rect')
// 	.data(arrData)
// 	.join('rect')
// 	.attr('x', 0)
// 	.attr('y', 0)
// 	.attr('width', rad)
// 	.attr('height', rad)
// 	.attr('fill', 'none')
// 	.attr('stroke','magenta')
//     .attr('transform' , function(d){
//     	return 'translate('+xScale(d)+',' +h/2+') rotate(15)'
//     })

////3. GROUP TO ORGANISE THE ROTATING OBJECTS BETTER
// var gElements = svg.selectAll('g')
// 	.data(arrData)
// 	.join('g')
//     .attr('transform' , function(d){
//     	return 'translate('+xScale(d)+',' +h/2+')'
//     });
// gElements.append('rect')
// 		.attr('x', 0)
// 		.attr('y', 0)
// 		.attr('width', rad)
// 		.attr('height', rad)
// 		.attr('fill', 'none')
// 		.attr('stroke','magenta')
// 		.attr('transform',function(d,i){
// 			return 'rotate('+i*10+')'
// 		});

////4. BETTER TO MAKE A ROTATION SCALE
// var rotationScale = d3.scaleLinear()
// 				.domain([min, max])
// 				.range([0, 360]);
// var gElements = svg.selectAll('g')
// 	.data(arrData)
// 	.join('g')
//     .attr('transform' , function(d){
//     	return 'translate('+xScale(d)+',' +h/2+')'
//     });
// gElements.append('rect')
// 		.attr('x', 0)
// 		.attr('y', 0)
// 		.attr('width', rad)
// 		.attr('height', rad)
// 		.attr('fill', 'none')
// 		.attr('stroke','magenta')
// 		.attr('transform',function(d,i){
// 			return 'rotate('+rotationScale(d)+')'
// 		})





// var fruitQuant = [];
// d3.json("fruitQuant.json")
// 	.then(function(data) {
//     	fruitQuant = data;
//     	draw();
//   	});

// function draw(){
// 	////new need here:
// 	var min = d3.min(fruitQuant, function(d){
// 		return d.quant;
// 	});
// 	var max = d3.max(fruitQuant, function(d){
// 		return d.quant;
// 	});

// 	////new need here:
// 	var fruitNames = [];
// 	var fruitColors = [];

// 	getFruit();
// 	function getFruit(){
// 		for (var i = 0; i<fruitQuant.length; i++){
// 			fruitNames.push(fruitQuant[i].fruit);
// 			fruitColors.push(fruitQuant[i].color);
// 		}
// 	}

// 	var ordinalScale = d3.scaleOrdinal()
// 						  .domain(fruitNames)
// 						  .range(fruitColors);

// 	var xScale = d3.scaleLinear()
// 					.domain([min, max])
// 					.range([margin, w-margin]);


// 	var rotationScale = d3.scaleLinear()
// 					.domain([0, fruitQuant.length])
// 					.range([0, 360]);


// 	var seqScale = d3.scaleSequential()
// 					  		.domain([0, 100])
// 					  		.interpolator(d3.interpolateRainbow);



// 	var gElements = svg.selectAll('g')
// 		.data(fruitQuant)
// 		.join('g')
// 	    .attr('transform' , function(d){
// 	    	return 'translate('+xScale(d.quant)+',' +h/2+')'
// 	    });


// 	gElements.append('circle')
// 		.attr('cx',0)
// 		.attr('cy',0)
// 		.attr('r', rad)
// 		.attr('fill',function(d){
// 			return seqScale(d.del);
// 		})
// 		.attr('stroke', function(d){
// 			return ordinalScale(d.color)
// 		})
// 		.attr('opacity',.7);
// 	gElements.append('rect')
// 		.attr('x', 0)
// 		.attr('y', 0)
// 		.attr('width', rad)
// 		.attr('height', rad)
// 		.attr('fill', 'none')
// 		.attr('stroke','white')
// 		.attr('transform',function(d,i){
// 			return 'rotate('+rotationScale(i)+')'
// 		});
// }
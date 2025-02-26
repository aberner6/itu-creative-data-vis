//GOAL: practice -- can we move shapes around based on their data? 
//new thing -- can we store more information inside every data piece aside from just numbers?

var w = 800;
var h = 800;

//create an svg canvas
var canvas = d3.select("#canvas")
				.append("svg")
				.attr("width", w)
				.attr("height", h)
				.style("background-color","black");

var data = [
	{
		"name":"amanda",
		"coffee":0,
		"water":1
	},
	{
		"name":"masha",
		"coffee":1,
		"water":2
	},
	{
		"name":"sara",
		"coffee":0,
		"water":2
	},
	{
		"name":"frida",
		"coffee":0,
		"water":0
	},
	{
		"name":"theresa",
		"coffee":1,
		"water":0
	},
	{
		"name":"clara",
		"coffee":2,
		"water":2
	},
	{
		"name":"lærke",
		"coffee":2,
		"water":2
	},
	{
		"name":"katinka",
		"coffee":1,
		"water":1
	},
	{
		"name":"eli",
		"coffee":3,
		"water":1
	},
	{
		"name":"mila",
		"coffee":1,
		"water":2
	}
]

var lines = canvas.selectAll("linesToData")
					.data(data)
					.join("line")
					.attr("x1", function(d,i){
						return 50+i*10;
					})
					.attr("y1", h/2)
					.attr("x2", function(d,i){
						return 50+(i*10)+d.coffee*5;
					})
					.attr("y2", function(d){
						return h/2-d.water*10;
					})
					.attr("stroke", "white")






/*
var dataObject = [
		{
			name:"annelie",
			coffee:1,
			water:2
		},
		{
			name:"mie",
			coffee:0,
			water:2
		},
		{
			name:"oliver",
			coffee:1,
			water:3
		},
		{
			name:"saynab",
			coffee:0,
			water:1
		},
		{
			name:"natalie",
			coffee:0,
			water:0
		},
		{
			name:"magnus",
			coffee:1,
			water:1
		},
		{
			name:"rakul",
			coffee:1,
			water:3
		},
		{
			name:"olivia",
			coffee:0,
			water:3
		}
	]

var line = canvas.append("line")
					.attr("x1", 0)
					.attr("x2", w)
					.attr("y1", h/2)
					.attr("y2", h/2)
					.attr("stroke", "white")
var radius = 20;
var spacing = 100;
// function countDuplicates(dataObjects, currentObject) {
//     return dataObjects.filter(d => d.coffee === currentObject.coffee && d.water === currentObject.water).length;
// }

var circles = canvas.selectAll("circle")
					.data(dataObject)
					.join("circle")
					.attr("class",function(d){
						return d.name;
					})
					.attr("cx", function(d){
						return spacing+d.water*spacing;
					})
					.attr("cy", function(d){
						return h/2-d.coffee*spacing;
					})
					.attr("r", function(d){
						if(d.coffee == 1 && d.water==3){
							return radius *2;
						}else{
							return radius
						}
					})
					// .attr("r", function(d){
                    //     intersection = countDuplicates(dataObject, d);
                    //     if(intersection > 1){
                    //         return radius *intersection;
                    //     }else{
                    //         return radius
                    //     }
                    // })
					.attr("fill", "white")
*/





























// var dataObjects = [
// 	{ 	
// 		name: 'annelie',
// 		age: 35,
// 		hometown: 'new york',
// 		month: 6,
// 		day: 12	
// 	},
// 	{
// 		name: 'roger',
// 		age: 28,
// 		hometown: 'copenhagen',
// 		month: 9,
// 		day: 1
// 	},
// 	{
// 		name: 'roger',
// 		age: 28,
// 		hometown: 'copenhagen',
// 		month: 8,
// 		day: 1
// 	},
// 	{
// 		name: 'roger',
// 		age: 28,
// 		hometown: 'copenhagen',
// 		month: 7,
// 		day: 1
// 	},
// 	{
// 		name: 'roger',
// 		age: 28,
// 		hometown: 'copenhagen',
// 		month: 12,
// 		day: 1
// 	},
// 	{
// 		name: 'roger',
// 		age: 28,
// 		hometown: 'copenhagen',
// 		month: 1,
// 		day: 1
// 	}
// ]

// var rectWidth = 20;
// var margin = rectWidth*2;
// var xScale = d3.scaleLinear()
// 	.domain([1, 12])
// 	.range([margin, w-margin]);

// var rects = canvas.selectAll("rect")
// 	.data(dataObjects)
// 	.join("rect")
// 	.attr("x", function(d){
// 		return xScale(d.month);
// 	})
// 	.attr("y", margin)
// 	.attr("width", rectWidth)
// 	.attr("height", function(d){
// 		return d.age;
// 	})
// 	.attr("fill","white");
	









// var myData = [60, 28, 27, 25, 18, 50, 35, 100, 545, 10, 12, 22, 25, 26, 50, 20, 8];
// var rectHeight = h/myData.length;

// var myRects = canvas.selectAll("rect")
// 					.data(myData)
// 					.join("rect")
// 					.attr("x", 10)
// 					.attr("y", function(d, i){
// 						return 10+i*50;
// 					})
// 					.attr("width", function(d,i){
// 						// if(i>=3 && i<=6){
// 						// 	return d;
// 						// }else{
// 						// 	return 0;
// 						// }
// 						return d;
// 					})
// 					.attr("height", rectHeight)
// 					.attr("fill","white")
// 					.attr("stroke","pink")





























// var participants = [
//   { name: 'Sine', birthyear: 1990},
//   { name: 'Leo', birthyear: 1992},
//   { name: 'Ana', birthyear: 1995},
// ];

// var circ = canvas.selectAll("circle")
// 					.data(participants) 
// 					.join("circle")
// 					.attr("cx", function(d,i){
// 						return leftMargin+ i*rad*2;
// 					})
// 					.attr("cy",h/2)
// 					.attr('r', function(d) {
// 					    return 0.01 * d.birthyear;
// 					  })
// 					.attr("fill","white")

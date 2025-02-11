//GOAL: can we move shapes around based on their data? 
// Can we store more information inside every data piece aside from just numbers?

var w = 800;
var h = 800;

//create an svg canvas
var canvas = d3.select("#canvas")
				.append("svg")
				.attr("width", w)
				.attr("height", h)
				.style("background-color","black");
//global variable
var arrayObjects = [
		{
			name:"annelie",
			coffee:4,
			water:2
		},
		{
			name:"morten",
			coffee:2,
			water:2
		},
		{
			name:"maria",
			coffee:1,
			water:3
		},
		{
			name:"josefine",
			coffee:0,
			water:2
		},
		{
			name:"julia",
			coffee:0,
			water:3
		}
	]


var square = canvas.selectAll("squareData")
					.data(arrayObjects)
					.join("rect")
					.attr("width", 10)
					.attr("height", d => {
						if(d.coffee==0){
							return 10*d.water
						}else{
							return 10*d.coffee
						}
					})
					.attr("x", function(d,i){
						return 50+i*100
					})
					.attr("y", function(d){
						if(d.coffee==0){
							return h/2-(10*d.water);
						}else{
							return h/2;
						}
					})
					.attr("stroke",function(d){
						if(d.coffee==0){
							return "blue";
						}else{
							return "brown";
						}
					 })
					.attr("stroke-width", 4)
					.attr("fill","white")



//create a group per entry in the dataset
// var nestedSelection = canvas.selectAll("g")
// 	.data(arrayObjects)
// 	.join("g");
// //spread each group along the x axis according to index so each person gets a spot
// nestedSelection.attr("transform", function(d, i){
// 		return `translate(${i * 20 + 100},10)`
// 	})
// 	.attr("fill", function(d){
// 		if(d.coffee==0){
// 			return "blue"
// 		}else{
// 			return "saddlebrown"
// 		}
// 	})
// //within each "g", or person, access the coffee data and generate a range of numbers from 0 until the max
// var circles = nestedSelection
//    	.selectAll("circle")
//     .data(function(d){
//     	if(d.coffee==0){
//     		return d3.range(d.water)
//     	}else{
// 	    	return d3.range(d.coffee)
//     	}
//     })
//     .join("circle");

// circles.attr("r", 10)
// 		.attr("cy", function(d, i){
// 			return h/2-i * 20
// 		})
















// var line = canvas.append("line")
// 					.attr("x1", 0)
// 					.attr("x2", w)
// 					.attr("y1", h/2)
// 					.attr("y2", h/2)
// 					.attr("stroke", "white")
// var radius = 20;
// var spacing = 100;

// var circles = canvas.selectAll("circle")
// 					.data(dataObject)
// 					.join("circle")
// 					.attr("class",function(d){
// 						return d.name;
// 					})
// 					.attr("cx", function(d){
// 						return spacing+d.water*spacing;
// 					})
// 					.attr("cy", function(d){
// 						return h/2-d.coffee*spacing;
// 					})
// 					.attr("r", radius)
// 					.attr("fill", "white")






// function countDuplicates(dataObjects, currentObject) {
//     return dataObjects.filter(d => d.coffee === currentObject.coffee && d.water === currentObject.water).length;
// }


					// .attr("r", function(d){
                    //     intersection = countDuplicates(dataObject, d);
                    //     if(intersection > 1){
                    //         return radius *intersection;
                    //     }else{
                    //         return radius
                    //     }
                    // })






















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

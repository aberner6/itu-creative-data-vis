var w = 500;
var h = 500;
var r = 20;
var svg = d3.select("#canvas")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .style("background-color","black")
  .on("click", function(){
	//update data 
	//rejoin the data to circles
	updateData();
  })


  // ////1. CREATE CIRCLES ACCORDING TO DATA, THEN UPDATE THEM ALL INTO NEW DATA
  // var arrData = [5, 8, 6, 10, 7, 2]
  // var circs = svg
	// .selectAll('circle')
	// .data(arrData)
	// .join('circle')
	// .attr('cx', w/2)
	// .attr('cy', h/2)
	// .attr('r', function(d){
	// 	return 10*d;
	// })
	// .attr('fill','none')
	// .attr("stroke","pink")

  // var newData = [];
  // function updateData(){
	// newData = [7,10,3,6,3]
	// updateVis();
  // }

  // function updateVis(){
	//   console.log("hi")
	// circs
	// 	.data(newData)
	// 	.transition()
	// 	// .delay(function(d, i) {
	// 	// 	return i / newData.length * 4000;   // <-- Where the magic happens
	// 	// })
	// 	.duration(2000)
	// 	.attr('r', function(d){
	// 		return 10*d;
	// 	})
  // }





////2. TRANSITIONS WITH PROGRESSIVELY INCREASING DATA
// var arrData = [5, 8, 6, 10, 7, 2]

// var counter = 0;
// var newData = [];
// function updateData(){
// 	newData.push(arrData[counter]);
// 	counter++;
// 	updateVis();
// }

// function updateVis(){
// 	console.log("hi")
// 	circs = svg
// 	.selectAll('circle.newData')
// 	.data(newData)
// 	.join('circle')
// 	.attr("class","newData")
// 	.attr('cx', w/2)
// 	.attr('cy', h/2)
// 	.attr('r', function(d){
// 		return d;
// 	})
// 	.attr('fill','none')
// 	.attr("stroke","pink")
// 	animateCircle();
// }

// function animateCircle(){
// 	circs.transition()
// 		.ease(d3.easeExpInOut)
// 		.duration(4000)
// 		.attr('r', function(d){
// 			return d*10;
// 		})
// }



////3. CHANGING DATA
// var data = [];
// svg.on("click", function(){
// 	updateData();
// 	updateVis();
// })
// function updateData() {
//   data = []; //empty the data
//   var howLong = Math.random()*10;
//   for(var i=0; i<howLong; i++) {
//     data.push(Math.random()*w);
//   }
// }
// function updateVis() {
//   d3.select('svg')
//     .selectAll('circle')
//     .data(data)
//     .join('circle')
//     .attr('cy', h/2)
//     .attr('r', r)
//     .attr('fill','white')
//     .attr('stroke','pink')
//     .transition()
// 		.duration(4000)
//     .attr('cx', function(d) {
//       return d;
//     });
// }


////4. CHUNKS OF DATA
var wholeData = [1,3,5,10,13,15,20,23,25];
var partData = [];
var index = 0;

svg.on("click", function(){
	updateData();
})
var index = 0;
var inc = 2;
partData = []; 
function updateData() {
	for(var i=index; i<index+inc; i++) {
		partData.push(wholeData[i]);
	}
	console.log(partData)
	index = index+inc;
	updateVis();
}
function updateVis() {
  d3.select('svg')
    .selectAll('circle')
    .data(partData)
    .join('circle')
    .attr('cy', h/2)
	.attr('cx', w/2)
    .attr('r', 0)
    .attr('fill','none')
	.attr('stroke','white')
    .transition()
    .duration(2000)
    .attr('r', function(d) {
      return d*10;
    });
}
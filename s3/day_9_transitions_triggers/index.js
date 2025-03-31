var w = 1000;
var h = 1000;
var r = 10;

var svg = d3.select("#canvas")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .style("background-color","black")
  .on("click", function(){
	//update data 
	//rejoin the data to circles
	// transitionView();
	updateData();
  })

  //// CREATE CIRCLES ACCORDING TO DATA
  var arrData = [5, 8, 20, 9, 4, 2]
  var circs = svg.selectAll('anything')
	.data(arrData)
	.join('circle')
	.attr("class","original")
	.attr('cx', w/2)
	.attr('cy', h/2)
	.attr("r", 1)
	.attr('fill','none')
	.attr("stroke","pink")
	.attr("stroke-width",5)
	.transition()
	.duration(2000)
		.delay(function(d, i) {
				return i / arrData.length * 4000;   // adding this in will make each data piece arrive in a timed entrance
		})
	.attr('r', function(d){
		return r*d;
	})
	// .attr("stroke","blue")

var xScale = d3.scaleLinear()
				.domain(d3.extent(arrData))
				.range([10, w-10])
function transitionView(){
	d3.selectAll("circle.original")
		.transition()
		.duration(2000)
		.attr("cx", function(d){
			return xScale(d);
		})

}

//// 1. comment me in 
//// THEN UPDATE THEM ALL INTO NEW DATA
//// NOTE THAT THE NEW VISUALISATION WILL ONLY SHOW 5 CIRCLES (5 DATA POINTS)
//   var newData = [];
//   function updateData(){
// 	newData = [7,10,3,6,3,12]
// 	updateVis();
//   }

//   function updateVis(){
// 	// note that if you do not add the chained command of .remove() after the .exit(), 
// 	// the 6th data element will remain (it has not been replaced)
// 	// .remove();
// 	d3.selectAll("circle").exit(); 

// 	d3.selectAll("circle")
// 		.data(newData)
// 		.transition()
// 		// .delay(function(d, i) {
// 		// 	return i / newData.length * 4000;   // adding this in will make each data piece arrive in a timed entrance
// 		// })
// 		.duration(2000)
// 		.attr('r', function(d){
// 			return r*d;
// 		})
// 		.attr("stroke","blue")
//   }





//// 2. comment me in next (and section 1 comment out)
//// TRANSITIONS WITH PROGRESSIVELY MORE DATA
// var arrData = [50, 70, 90, 100]
// var counter = 0;
// var newData = [];
// var circs;
// function updateData(){
// 	newData.push(arrData[counter]);
// 	counter++;
// 	updateVis();
// }

// function updateVis(){
// 	console.log("hi")
	
// 	circs = svg.selectAll('circle.newData')
// 	.data(newData)
// 	.join('circle')
// 	.attr("class","newData")
// 	.attr('cx', w/2)
// 	.attr('cy', h/2)
// 	.attr('fill','none')
// 	.attr("stroke","pink")
// 	.transition()
// 	.ease(d3.easeExpInOut)
// 	.duration(2000)
// 	.attr('r', function(d){
// 		return d;
// 	})
// }

// function animateCircle(){
// 	circs.transition()
// 		.ease(d3.easeExpInOut)
// 		.duration(2000)
// 		.attr('r', function(d){
// 			return d;
// 		})
// }



////3. comment me in next (and section 2 comment out) 
//// CHANGING DATA
// var data = [];
// // svg.on("click", function(){
// // 	updateData();
// // })
// function updateData() {
//   data = []; //empty the data
//   var howLong = Math.random()*100;
//   for(var i=0; i<howLong; i++) {
//     data.push(Math.random()*w);
//   }
//   updateVis(data);
// }
// function updateVis(data) {
// 	var xScale = d3.scaleLinear().domain(d3.extent(data)).range([r, w-r])

// 	d3.selectAll("circle").exit().remove(); 
// 	d3.selectAll('circle')
// 		.data(data)
// 		.attr("class","newData")
// 		.attr('cy', h/2)
// 		.attr('r', r)
// 		.attr('fill','white')
// 		.attr('stroke','pink')
// 		.transition()
// 		.duration(3000)
// 		.attr('cx', function(d) {
// 			return xScale(d);
// 		});
// }


//// 4. comment me in next (and section 3 comment out) 
/// ADD CHUNKS OF DATA to vis
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
	d3.selectAll("circle").exit().remove(); 
	var addCircs = svg.selectAll('.add')
		.data(partData)
		.join('circle')
		.attr('class','add')
		.attr('cy', h/2)
		.attr('cx', w/2)
		.attr('fill','none')
		.attr('stroke','white')
		.attr('r', function(d) {
		return d*10;
		});
}
var w = 1000;
var h = 500;
var rad = 20;
var leftMargin = rad*2;
var imgW = rad*4;
var imgH = rad*4;

var svg = d3.select("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")


var skyData = [];
d3.json("sky.json").then(function(data) {
     skyData = data;
     // drawLine();
     drawRadialLine();
});


//OPTION 1
// var lineMaker = d3.line()
//     .curve(d3.curveCardinal);

// function drawLine(){
//   var xScale = d3.scaleLinear().domain([0, skyData.length]).range([0, w]);
//   var yScale = d3.scaleLinear().domain([0, 100]).range([h-50, 50]);

//   lineMaker
//     .x(function(d, i) {
//       return xScale(i);
//     })
//     .y(function(d) {
//       return yScale(d.sky);
//     });


//   var lineData = lineMaker(skyData);

//   svg
//     .append('path')
//     .attr('d', lineData)
//     .attr('stroke','white')
// }


//on initial load
var myPath;
var radialLineMaker = d3.radialLine();
function drawRadialLine(){
  var circScale = d3.scaleLinear()
    .domain([0, skyData.length])
    .range([0, Math.PI*2]);

  radialLineMaker
    .angle(function(d,i) {
      return circScale(i);
    })
    .radius(function(d) {
      return d.sky;
    });

  var radialLineData = radialLineMaker(skyData);
  console.log(radialLineData)


  myPath = svg
    .append('path')
    .attr('transform','translate('+w/2+','+h/2+')')
    .attr('d', radialLineData)
    .attr('stroke','white')
}

d3.select("#slider").on("input", function() {
  update(+this.value);
});
// var radialLineMaker = d3.radialLine();

function update(val){
  var circScale = d3.scaleLinear()
    .domain([0, skyData.length])
    .range([0, Math.PI*2]);

  radialLineMaker
    .angle(function(d,i) {
      return circScale(i);
    })
    .radius(function(d) {
      return val;
    });
  var radialLineData = radialLineMaker(skyData);

  myPath
    .attr('d', radialLineData)
    .attr('stroke','white')
}




//OPTION 3
// var radialLineGenerator = d3.radialLine();

// var r1 = 15;
// var r2 = 6;

// var radialpoints = [
// [0, r1],
// [Math.PI * 0.2, r2],
// [Math.PI * 0.4, r1],
// [Math.PI * 0.6, r2],
// [Math.PI * 0.8, r1],
// [Math.PI * 1, r2],     
// [Math.PI * 1.2, r1],
// [Math.PI * 1.4, r2],
// [Math.PI * 1.6, r1],
// [Math.PI * 1.8, r2],
// [Math.PI * 2, r1]
// ];

// var radialData = radialLineGenerator(radialpoints);
// var radial = svg.append("path")
//   .attr('transform','translate('+w/2+','+h/2+')')
//   .attr("class", "radial")
//   .attr("d", radialData)
//   .attr("stroke","white")

//SET UP THE CANVAS
var w = 600;
var h = 500;
var rad = 20;
var leftMargin = rad * 2;

var svg = d3.select("svg")
     .attr("width", w)
     .attr("height", h)
     .style("background-color", "black")

//LOAD THE DATA
var skyData = [];
//prepare scales for circular display
var circScale = d3.scaleLinear()
     .range([Math.PI*2,0]);
var scaleRadius = d3.scaleLinear()
     .range([10, 200])
d3.json("sky.json").then(function (data) {
     skyData = data;
     ////for classic line chart demo
     // drawLine();

     ////for circular demo
     circScale.domain([0, skyData.length])
     scaleRadius.domain([0, d3.max(skyData, d => d.sky)])
     drawRadialLine();
});

////DRAW A LINE
function drawLine(){
//prepare scales for linear display of data
  var xScale = d3.scaleLinear()
               .domain([0, skyData.length])
               .range([0, w]);
  var yScale = d3.scaleLinear()
               .domain([0, 100])
               .range([h-50, 50]);

var lineMaker = d3.line()
     .curve(d3.curveMonotoneY)
     .x(function(d, i) {
          return xScale(i);
     })
     .y(function(d) {
          return yScale(d.sky);
     });


  var lineData = lineMaker(skyData);
     console.log(lineData);

  svg
    .append('path')
    .attr('d', lineData)
    .attr('stroke','white')
}





////DRAW RADIAL LINE
var myPath;
var myText;
var radialLineMaker = d3.radialLine();
function drawRadialLine() {
     radialLineMaker
          .angle(function (d, i) {
               return circScale(i);
          })
          .radius(function (d) {
               return scaleRadius(d.sky);
          })
          .curve(d3.curveCardinalClosed)
          // .curve(d3.curveBasis);
          // .curve(d3.curveCatmullRomOpen)

     var radialLineData = radialLineMaker(skyData);

     myPath = svg
          .append('path')
          .attr('class', 'original')
          .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')')
          .attr('d', radialLineData)
          .attr('stroke', 'white')
          .attr('fill', 'none')
}

////INPUT CHANGES VIS
d3.select("#slider").on("input", function () {
     var slider = parseInt(this.value);
     console.log(slider)
     var random = Math.random()*100;
     addData(random, slider);
});

function addData(random,slider){
     skyData.push({
          sky:slider
     })
     // update(skyData,slider);
     change(skyData);
}
function update(skyData,slider) {
     radialLineMaker
          .angle(function(d, i) {
               return circScale(i);
          })
          .radius(function(d) {
               return scaleRadius(d.sky);
          });
     var radialLineData = radialLineMaker(skyData);

     myPath
          .transition()
          .attr('d', radialLineData)
}
function change(skyData) {
     //if you comment these out, the lines keep building around
     circScale.domain([0, skyData.length])
     scaleRadius.domain([0, d3.max(skyData, d => d.sky)])

     radialLineMaker
          .angle(function(d, i) {
               console.log(circScale(i))
               return circScale(i);
          })
          .radius(function(d) {
               return scaleRadius(d.sky);
          });
     var radialLineData = radialLineMaker(skyData);
     myPath
          .transition()
          .attr("d", radialLineData)
}



// //YOU CAN ALSO DRAW SHAPES WITH PATHS
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


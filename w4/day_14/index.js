var w = 1000;
var h = 500;
var rad = 20;
var leftMargin = rad*2;

var svg = d3.select("body").append("svg")
      .attr("width",w)
      .attr("height",h)
      .style("background-color","black")

var skyData = [];
d3.json("sky.json").then(function(data) {
     skyData = data;
     processData();
});

var radScale = d3.scaleLinear()
  .domain([0,100])
  .range([rad/4,rad])

function processData(){
  draw();
}

var force;
function draw(){
  myShape = g
    .append('circle')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', function(d){ 
      return radScale(d.sky) 
    })
    .attr('fill','white')
}

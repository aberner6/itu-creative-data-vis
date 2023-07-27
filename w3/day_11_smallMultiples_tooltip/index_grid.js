var w = 1000;
var h = 500;
var rad = 20;
var margin = rad*2;
var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);
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

var rectScale = d3.scaleLinear()
  .domain([0, 100])
  .range([1, 10])

var dayNames = [];
function processData(){
  for(var i = 0; i<skyData.length; i++){
    dayNames.push(skyData[i].day)
  }
  draw();
}


var numPerRow = 7;
var size = rad;
var scale = d3.scaleLinear()
  .domain([0, numPerRow -1])
  .range([margin*2,w-margin])

function draw(){

  var g = svg.selectAll('g')
    .data(skyData)
    .join('g')
    .attr('transform',function(d,i){
      var x = i % numPerRow  
      var y = Math.floor(i / numPerRow)
      return 'translate('+scale(x)+','+scale(y)+')'
    })

  firstCirc = g
    .append('circle')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', function(d){ 
      return radScale(d.sky) 
    })
    .attr('fill','white')

  secondCirc = g.append('circle')
    // .attr('class', 'second')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', 10)
    .attr('fill','pink')

  secondShape = g.append('rect')
    .attr('x',0)
    .attr('y',0)
    .attr('width', function(d){
      return radScale(d.temp)
    })
    .attr('height', function(d){
      return radScale(d.temp)
    })
    .attr('fill','blue')
  }
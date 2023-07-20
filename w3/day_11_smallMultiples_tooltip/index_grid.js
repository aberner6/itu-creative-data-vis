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

var dayNames = [];
var radScale = d3.scaleLinear()
  .domain([0,100])
  .range([rad/4,rad])

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

var pageX;
var pageY;

function draw(){

  var g = svg.selectAll('g')
    .data(skyData)
    .join('g')
    .attr('transform',function(d,i){
      var x = i % numPerRow  
      var y = Math.floor(i / numPerRow)
      return 'translate('+scale(x)+','+scale(y)+')'
    })

  myShape = g
    .append('circle')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', function(d){ 
      return radScale(d.sky) 
    })
    .attr('fill','white')

  myShape = g.selectAll("circle.shapes")
    .append('circle')
    .attr('class','shapes')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', 10)
    .attr('fill','blue')
  }
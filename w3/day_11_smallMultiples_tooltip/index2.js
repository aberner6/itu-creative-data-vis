var w = 1000;
var h = 500;
var rad = 20;
var leftMargin = rad*2;
var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);
var svg = d3.select("body").append("svg")
      .attr("width",w)
      .attr("height",h)
      .style("background-color","black")

var skyData = [];
var nested;
d3.json("moreData.json").then(function(data) {
     skyData = data;
      nested = d3.group(data, function(d){
        return d.day;
      })
      draw()
});

var dayNames = [];
var xScale = d3.scaleLinear()
var radScale = d3.scaleLinear()
  .domain([0,100])
  .range([rad/4,rad])

var numPerRow = 7;
var size = rad;
var scale = d3.scaleLinear()
  .domain([0, numPerRow -1])
  .range([leftMargin*2,w-leftMargin])

var pageX;
var pageY;

function draw(){

  var g = svg.selectAll('g')
    .data(nested)
    .join('g')
    .attr('transform',function(d,i){
      console.log(d)
      var x = i % numPerRow  
      var y = Math.floor(i / numPerRow)
      return 'translate('+scale(x)+','+scale(y)+')'
    })

//here d is the elements of the nested array 
//so is attaching the array from the property values
  var circShape = g.selectAll('circle')
    .data(function(d){
      return d[1];
    })
    .join('circle')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', function(d){ 
      console.log(d);
      return radScale(d.sky) 
    })
    .attr('fill','none')
    .attr('stroke','white')   
}
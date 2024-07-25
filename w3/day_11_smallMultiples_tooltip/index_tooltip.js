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
      // .style("background-color","black")

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
  
  var text = g.append("text")

  myShape = g
    .append('circle')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', function(d){ 
      return radScale(d.sky) 
    })
    .attr('fill','black')
    .on("mouseover", function(d,i) { 
      var thisData = d.target.__data__;

      d3.select(this)
        .transition()
        .attr('fill','pink');

      // div.transition()    
      //   .duration(200)    
      //   .style("opacity", .9);    
      // div.html(thisData.sky + "<br/>"+thisData.day) 
        // .style("left", (event.pageX) + "px")   
        // .style("top", (event.pageY - 28) + "px");   
    })          
    .on("mouseout", function(d) {  
      d3.select(this)
        .transition()
        .attr('fill','black') 
      text.transition()    
        .duration(500)    
        .style("opacity", 0); 
    }); 
  }
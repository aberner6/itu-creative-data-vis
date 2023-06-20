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
d3.json("sky.json").then(function(data) {
     skyData = data;
     processData();
});

var dayNames = [];
var xScale = d3.scaleLinear()
var radScale = d3.scaleLinear()
  .domain([0,100])
  .range([rad/4,rad])

function processData(){
  for(var i = 0; i<skyData.length; i++){
    dayNames.push(skyData[i].day)
  }
  draw();
  initZoom();
}


var numPerRow = 7;
var size = rad;
var scale = d3.scaleLinear()
  .domain([0, numPerRow -1])
  .range([leftMargin*2,w-leftMargin])

var pageX;
var pageY;
var g;
var myShape;
function draw(){
  g = svg.selectAll('g')
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
    // .on("mouseover", function(d) { 
    //   var thisData = d.target.__data__;
    //   d3.select(this)
    //     .transition()
    //     .attr('fill','pink')

    //   div.transition()    
    //     .duration(200)    
    //     .style("opacity", .9);    
    //   div.html(thisData.sky + "<br/>"+thisData.day) 
    //     .style("left", (event.pageX) + "px")   
    //     .style("top", (event.pageY - 28) + "px");   
    // })          
    // .on("mouseout", function(d) {  
    //   d3.select(this)
    //     .transition()
    //     .attr('fill','white') 
    //   div.transition()    
    //     .duration(500)    
    //     .style("opacity", 0); 
    // }); 
}

var zoom = d3.zoom()
  .on('zoom', handleZoom)
  .scaleExtent([1, 5])
  .translateExtent([[0, 0], [w, h]]);

function handleZoom(e) {
  d3.selectAll('circle')
    .attr('transform', e.transform);
}
function initZoom() {
  // d3.selectAll('svg')
  //   .call(zoom);
  d3.selectAll('svg')
    .transition()
    .duration(2000)
    .call(zoom.scaleBy, 2)
    .transition()
    .duration(3000)
    .call(zoom.translateBy,0, h/2);
}


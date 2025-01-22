//SETTING UP THE CANVAS
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
//LOADING THE DATA
var skyData = [];
d3.json("sky.json").then(function(data) {
     skyData = data;
     processData();
});
//SETTING UP SCALES FOR THE SHAPE
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
//PREPARE 1 GROUP ELEMENT FOR EVERY OBJECT IN THE DATASET
  //PLACE EACH G ALONG THE X AXIS ACCORDING TO THE DAY OF WEEK
  //PLACE EACH ALONG THE Y AXIS ACCORDING TO THE INDEX - HOW FAR WE ARE IN THE DATASET
  var g = svg.selectAll('g')
    .data(skyData)
    .join('g')
    .attr('transform',function(d,i){
      var x = i % numPerRow  
      var y = Math.floor(i / numPerRow)
      return 'translate('+scale(x)+','+scale(y)+')'
    })
//ADD A CIRCLE ON TOP OF THE G WHERE THE RADIUS IS ACCORDING TO THE OBSERVATION OF THE CLOUDS
 //circle is bigger if more clouds, smaller if fwere clouds
  firstCirc = g
    .append('circle')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', function(d){ 
      return radScale(d.sky) 
    })
    .attr('fill','white')
//just for show
  secondCirc = g.append('circle')
    // .attr('class', 'second')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', 10)
    .attr('fill','pink')
//draw a rectangle that changes according to how hot that day is
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
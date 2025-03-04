//SETTING UP THE CANVAS
var w = 1000;
var h = 800;  
var rad = 20;
var margin = rad;

var svg = d3.select("#canvas").append("svg")
      .attr("width",w)
      .attr("height",h)
      // .style("background-color","black")
//LOADING THE DATA
var skyData = [];
d3.json("sky.json").then(function(data) {
     skyData = data;
     draw();
});
//SETTING UP SCALES FOR THE SHAPE
var radScale = d3.scaleLinear()
  .domain([0,100])
  .range([rad/4,rad])

var rectScale = d3.scaleLinear()
  .domain([0, 100])
  .range([1, 10])

var dayNames = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
var xScale = d3.scaleBand()
  .domain(dayNames)
  .range([margin*2,w-margin])

function draw(){
//PREPARE 1 GROUP ELEMENT FOR EVERY OBJECT IN THE DATASET
  //PLACE EACH G ALONG THE X AXIS ACCORDING TO THE DAY OF WEEK
  //PLACE EACH G ALONG THE Y AXIS ACCORDING TO THE INDEX - HOW FAR WE ARE IN THE DATASET
  var numPerRow = dayNames.length;
  var numberRows = Math.floor(skyData.length/numPerRow);
  var size = rad;
 
  var yScale = d3.scaleLinear()
    .domain([0, numberRows])
    .range([margin*2,h-margin])

  var g = svg.selectAll('anything')
    .data(skyData)
    .join('g')
    .attr('transform',function(d,i){
      var y = Math.floor(i / numPerRow) //this is the way to go to a new row every time we reach the end of the number of items we want per row
      console.log(y)
      return 'translate('+xScale(d.day)+','+yScale(y)+')'
    })
//ADD A CIRCLE ON TOP OF THE G WHERE THE RADIUS IS ACCORDING TO THE OBSERVATION OF THE CLOUDS
 //circle is bigger if more clouds, smaller if fwere clouds
  firstCirc = g.append('circle')
    .attr('cx',0)
    .attr('cy',0)
    .attr('r', function(d){ 
      return radScale(d.sky) 
    })
    .attr('fill','none')
    .attr('stroke','black')

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

    setTooltips();

// set the tooltip content based on the bar data; and
//tell tippy where our tooltips should originate from. For both steps, we need to grab our bar selection:
  function setTooltips(){
      // reference the shape that you want connected to the mouseover
      // set the tooltip content
      secondShape.attr('data-tippy-content', (d,i)=>{
          return `Day: ${d.day}, Temp: ${d.temp}, Sky: ${d.sky}`;
      });
      tippy(secondShape.nodes());
    }
}
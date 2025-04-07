var w = 1000;
var h = 500;
var rad = 20;
var margin = rad * 2;
var div = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
var svg = d3.select("body").append("svg")
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "black")

//pull in the data
var skyData = [];
var nested;
d3.json("moreData.json").then(function (data) {
  skyData = data;
  //re-organise data from words to numbers
  var map = {
    'monday': 1,'tuesday': 2,'wednesday': 3,'thursday': 4,'friday': 5,'saturday': 6,
    'sunday': 7
  };
  //sorting the data according to the day of week
  skyData.sort((a, b) => {
    return map[a.day] - map[b.day];
  });
  //roll up the data inside of each week day
  nested = d3.group(skyData, function (d) {
    return d.day;
  })
  processData();
});

var dayNames = [];
var dayScale = d3.scaleBand()
  .range([margin * 2, w - margin])
function processData() {
	dayNames = d3.map(skyData, function(d,i){
		return d.day;
	})
  dayScale.domain(dayNames)
  draw()
}

var radScale = d3.scaleLinear()
  .domain([0, 100])
  .range([rad / 4, rad])

function draw() {
  var g = svg.selectAll('g')
    .data(nested)
    .join('g')
    .attr('class', function (d) {
      return d[0];
    })
    .attr('transform', function (d, i) {
      return 'translate(' + dayScale(d[0]) + ',' + 80 + ')'
    })

  //here d is the elements of the nested array 
  //so is attaching the array from the property values
  var shape = g.selectAll('g')
    .data(function (d) {
      return d[1];
    })
    .join('g')
    .attr('class','shapes')

  var triangles = shape.filter(function(d) { return d.sky > 50 })
    .append('path')
    .attr("fill", "pink")
    .attr("d", d3.symbol().type(d3.symbolTriangle).size(30)) 

  var circs = shape.filter(function(d) { return d.sky < 50 })
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', function (d) {
      return radScale(d.sky)
    })
    .attr('fill', 'none')
    .attr('stroke', 'white')
}
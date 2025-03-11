
var w = 1000;
var h = 800;
var margin = 40;
//create a canvas
var svg = d3.select("#canvas").append("svg")
				.attr("width",w)
				.attr("height",h)
				.style("background-color","beige");

////BRING IN AN EXTERNAL DATASET
////do a d3 way of visualising how many items are in each category (of fruit in this case)
var fruitData = [];
d3.json("fruitQuant.json")
	.then(function(data) {
    	fruitData = data;
    	}).then(function(){
		prep();
  	    }).then(function(){
		draw();
	})

var types, categories;
var yScale = d3.scaleBand()
				.range([margin, h-margin])
function prep(){
	types = d3.groups(fruitData, function(d){ 
        return d.fruit //this is the thing by which i want to  group
    });

    //this gives me the unique names of each group
	categories = d3.map(types, function(d,i){
		return d[0];
	})
	yScale.domain(categories) 
}
function draw(){
	var groups = svg.selectAll("anything")
		.data(types)
		.join("g")
		.attr("transform",function(d){
            console.log(d[0])
			return "translate("+margin+","+yScale(d[0])+")"
		})
        .attr("class", function(d){
            return d[0]
        })
	groups.selectAll("circz")
		.data(function(d){
			return d[1]
		})
		.join("circle")
		.attr("stroke","white")
		.attr("r",10)
		.attr("cx", function(d,i){
			return i*10;
		})
}
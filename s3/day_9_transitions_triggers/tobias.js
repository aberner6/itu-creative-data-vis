///////// GLOBAL VARS //////////

var h = 800
var w = 800
var margin = { top: 20, right: 20, bottom: 50, left: 40 };
var circles = 10

/////////// SCALES /////////////////

var xScale = d3
    .scaleLinear()
    .range([margin.left, w-margin.right])
    .domain([0,circles]);

///////////// D3 SELECTIONS AND DATA BINDING //////////

let svg = d3.select('#canvas')
    .append("svg")
    .attr("width",w)
    .attr("height",h)
    .style("background-color","#fae3c6");

for (let i = 0; i < circles; i++){
    svg.append("circle")
        .attr("cx", xScale(i))
        .attr("cy", w/2)
        .attr("r", 20)
        .attr("fill","orange")
        .attr("id", `circle-${i}`)
        .on("click", d => dropCirclesOnEnd(i))
        .on("mouseover", d => elevate(i))
}


function dropCirclesOnEnd(index){
    if (index < 10){
        d3.select(`#circle-${index}`)
            .transition()
            .duration(600)
            .ease(d3.easeBounceOut)
            .attr("cy", h-40)
            .attr("fill","blue")
            .on("end", d => dropCirclesOnEnd(index+1))
    }
}

function dropCirclesDelay(index){
    if (index < circles){
        d3.select(`#circle-${index}`)
            .transition()
            .duration(600)
            .ease(d3.easeBounceOut)
            .attr("cy", h-40)
            .attr("fill","blue")
            .delay(200) //now with a delay before each following transition
            .on("start", d => dropCirclesDelay(index+1)) //this time using on start instead
    }
}

function elevate(index){
    d3.select(`#circle-${index}`)
        .transition()
        .duration(2000)
        .attr("cy", w/2)
        .attr("fill","orange")
}
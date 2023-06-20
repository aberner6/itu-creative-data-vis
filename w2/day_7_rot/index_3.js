
var skyData = [
	{"day":1, "cloud":0, "name":"windy"},
	{"day":2, "cloud":70, "name":"nowind"},
	{"day":3, "cloud":10, "name":"somewind"},
	{"day":4, "cloud":0, "name":"windy"},
	{"day":5, "cloud":20, "name":"nowind"},
	{"day":6, "cloud":0, "name":"somewind"},
	{"day":7, "cloud":30, "name":"windy"},
	{"day":8, "cloud":60, "name":"somewind"},
	{"day":9, "cloud":80, "name":"windy"},
	{"day":10, "cloud":100, "name":"windy"},
	{"day":11, "cloud":0, "name":"nowind"},
	{"day":12, "cloud":30, "name":"windy"},
	{"day":13, "cloud":60, "name":"windy"},
	{"day":14, "cloud":80, "name":"windy"}
]

var r = 200,
    w = r * 3,
    h = w,
    rad = Math.PI/180,
    interval = 360/skyData.length;

console.log(skyData[0]);

var svg = d3.select("svg")
			.attr("width",800)
			.attr("height",800)
			.style("background-color","pink")

var rotScale = d3.scaleLinear()
	.domain([0, skyData.length])
	.range([0, 360])
var colorScale = d3.scaleLinear()
	.domain([0, 100])
	.range([0,255])
var opaScale = d3.scaleLinear()
	.domain([0, 100])
	.range([.5,1])
var windArray = [];
var rotPos = [];
mathias();


var colorScale2 = d3.scaleOrdinal()
	.domain(windArray)
	.range(["blue","teal","lightblue"])

var gElements = svg.selectAll("g")
	.data(skyData)
	.join('g')
    .attr('transform', function (d, i) {
    	return 'translate('+rotPos[i].x+','+rotPos[i].y+')';
    });
gElements    
	.append('circle')
	.attr('class', function(d){
		return d.name;
	})
    .attr('r', function(d,i){
    	return 10//d.cloud;
    })
    .attr('cx', r)
    .attr('cy',r)
    .attr("opacity",function(d,i){
    	return opaScale(d.cloud)
    })
    .attr('fill', function(d){
    	return colorScale2(d.name)
    })

function mathias(){
	for (var i = 0; i< skyData.length; i++){
		windArray.push(skyData[i].name)
		rotPos.push({
			"x":((w/2-r) * Math.cos((rotScale(i)) * Math.PI/180)),
			"y":((h/2-r) * Math.sin((rotScale(i)) * Math.PI/180))
		})
	}
}





// gElements    
// 	.append('rect')
//     .attr('fill', 'none')
//     .attr('stroke','none')
//     .attr('width', '10')
//     .attr('height', '10')
//     .attr('x', r)
//     .attr('y',r)



// var minSky = d3.min(skyData, function(d){
// 	return d.cloud;
// });
// var maxSky = d3.max(skyData, function(d){
// 	return d.cloud;
// });

// var rotScale = d3.scaleLinear()
// 	.domain([0, skyData.length])
// 	.range([0, 2*Math.PI])

// var skyScale = d3.scaleLinear()
// 	.domain([minSky, maxSky])
// 	.range([0, 360])
// var seqScale = d3.scaleSequential()
// 	.domain([0, 100])
// 	.interpolator(d3.interpolateRainbow);

// gElements
// 	.append("circle")
// 	.attr("cx", 0)
// 	.attr("cy",0)
// 	.attr("r",10)
// 	.attr("stroke","white")
// 		.attr('fill',function(d){
// 			return seqScale(d.cloud);
// 		})
// 		.attr("opacity", .5)
	// .attr("transform", function(d,i){
	// 	return "rotate("+skyScale(d.cloud)+")"
	// })
// gElements
// 	.append("rect")
// 	.attr("x", 0)
// 	.attr("y",0)
// 	.attr("width",rad)
// 	.attr("height",rad)
// 	.attr("fill","white")
// 	.attr("transform", function(d,i){
// 		return "rotate("+skyScale(d.cloud)+")"
// 	})

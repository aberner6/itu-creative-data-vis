var w = 1200;
var h = 800;

var treeData = [
  {
    "year": 1085,
    "sgi": 1193,
    "d13c": -20.04,
    "prec": 4.9,
    "r1": 5,
    "r2": 0,
    "arc": 0
  },
  {
    "year": 1086,
    "sgi": 1333,
    "d13c": -19.89,
    "prec": 4.47,
    "r1": 0,
    "r2": 0,
    "arc": 0
  },
  {
    "year": 1087,
    "sgi": 1602,
    "d13c": -20.23,
    "prec": 5.48,
    "r1": 0,
    "r2": 0,
    "arc": 0
  },
  {
    "year": 1088,
    "sgi": 1310,
    "d13c": -19.6,
    "prec": 3.61,
    "r1": 0,
    "r2": 0,
    "arc": 0
  }
]

var svg = d3.select("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","pink");


var minR = d3.min(treeData, d => d.sgi)
var maxR = d3.max(treeData, d => d.sgi)
var r2Scale = d3.scaleLinear()
            .domain([minR,maxR])
            .range([0.5,4]);

var minP = d3.min(treeData, d => d.prec)
var maxP = d3.max(treeData, d => d.prec)
var precScale = d3.scaleSequential()
            .domain([minP,maxP])
            .interpolator(d3.interpolate(
                "lightblue","blue"
            ))

for (var i = 0; i < treeData.length; i++) {
  var rad1 = 0
  var rad2 = 0  
  if (treeData[i].r1==5){
        var index = i;
        rad1 = 5
        rad2 = treeData[i].r1+r2Scale(treeData[i].sgi)
        treeData[index].r2=rad2;
    }else{
        var index = i;
        rad1 = treeData[index-1].r2
        treeData[index].r1=rad1;
        rad2 = treeData[index-1].r2+r2Scale(treeData[i].sgi)
        treeData[index].r2=rad2;
    }
    var arc = d3.arc()
        .startAngle(0)
        .endAngle(0.5*Math.PI)
        .innerRadius(rad1)
        .outerRadius(rad2)
    treeData[index].arc = arc
}
// function arcFunction(ra1,ra2){
//   var arcGenerator = d3.arc()
//       .startAngle(0)
//       .endAngle(0.5*Math.PI)
//       .innerRadius(ra1)
//       .outerRadius(ra2)

//       console.log(arcGenerator)
//       return arcGenerator
//   }
svg
  .selectAll(".path")
  .data(treeData)
  .join("path")
  .attr("transform", "translate(2100,2100)")
  .attr("d", d3.arc()
      .innerRadius(function(d){
        return d.r1
      })
      .outerRadius(function(d){
        return d.r2
      })
      .startAngle( 3.14 )
      .endAngle( 6.28 )
  )
  .attr("fill","none")
  .attr("stroke","black")
  .attr("stroke-width",0.5)




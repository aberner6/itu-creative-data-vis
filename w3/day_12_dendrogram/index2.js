
// // set the dimensions and margins of the graph
// var width = 460
// var height = 460
// // append the svg object to the body of the page
// var svg = d3.select("#vis")
//   .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(40,0)");  // bit of margin on the left = 40

// // read json data
// d3.json("simpleData.json", function(data) {
// console.log(data)
//   // Create the cluster layout:
//   var cluster = d3.cluster()
//     .size([height, width - 100]);  // 100 is the margin I will have on the right side

//   // Give the data to this cluster layout:
//   var root = d3.hierarchy(data, function(d) {
//       return d.children;
//   });
//   cluster(root);


//   // Add the links between nodes:
//   svg.selectAll('path')
//     .data( root.descendants().slice(1) )
//     .enter()
//     .append('path')
//     .attr("d", function(d) {
//         return "M" + d.y + "," + d.x
//                 + "C" + (d.parent.y + 50) + "," + d.x
//                 + " " + (d.parent.y + 150) + "," + d.parent.x // 50 and 150 are coordinates of inflexion, play with it to change links shape
//                 + " " + d.parent.y + "," + d.parent.x;
//               })
//     .style("fill", 'none')
//     .attr("stroke", '#ccc')


//   // Add a circle for each node.
//   svg.selectAll("g")
//       .data(root.descendants())
//       .enter()
//       .append("g")
//       .attr("transform", function(d) {
//           return "translate(" + d.y + "," + d.x + ")"
//       })
//       .append("circle")
//         .attr("r", 7)
//         .style("fill", "#69b3a2")
//         .attr("stroke", "black")
//         .style("stroke-width", 2)
//     })

const width = 928;
// // read json data
var myData = []
d3.json("simpleData.json").then(function (d) {
    data = d;
    console.log(data)
    draw();
});

function draw(){

// Compute the tree height; this approach will allow the height of the
// SVG to scale according to the breadth (width) of the tree layout.
const root = d3.hierarchy(data);
const dx = 10;
const dy = width / (root.height + 1);

// Create a tree layout.
const tree = d3.tree().nodeSize([dx, dy]);

// Sort the tree and apply the layout.
root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
tree(root);

// Compute the extent of the tree. Note that x and y are swapped here
// because in the tree layout, x is the breadth, but when displayed, the
// tree extends right rather than down.
let x0 = Infinity;
let x1 = -x0;
root.each(d => {
  if (d.x > x1) x1 = d.x;
  if (d.x < x0) x0 = d.x;
});

// Compute the adjusted height of the tree.
const height = x1 - x0 + dx * 2;

const svg = d3.select("#vis").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-dy / 3, x0 - dx, width, height])
    .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

const link = svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.4)
    .attr("stroke-width", 1.5)
  .selectAll()
    .data(root.links())
    .join("path")
      .attr("d", d3.linkHorizontal()
          .x(d => d.y)
          .y(d => d.x));

const node = svg.append("g")
    .attr("stroke-linejoin", "round")
    .attr("stroke-width", 3)
  .selectAll()
  .data(root.descendants())
  .join("g")
    .attr("transform", d => `translate(${d.y},${d.x})`);

node.append("circle")
    .attr("fill", d => d.children ? "#555" : "#999")
    .attr('r', function(d){
        if(d.data.size){
            return d.data.size/1000;
        }else{
            return 2.5
        }
    })
node.append("image")
	.attr("xlink:href", function(d){
        console.log(d);
		return d.data.img;
	})
    .attr("x",0)
    .attr("y",0)
    .attr("width",20)
    .attr("height",20)

node.append("text")
    .attr("dy", "0.31em")
    .attr("x", function(d){
        if(d.children){
            return -6;
        }else{
            return 6;
        }
    })
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => d.data.name)
    .attr("opacity", function(d){
        if(d.data.img){
            return 0
        }else{
            return 1
        }
    })
    // .clone(true).lower()
   
}
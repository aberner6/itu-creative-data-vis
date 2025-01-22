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
const dx = 50;
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
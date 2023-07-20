

var w = 1000;
var h = 1000;
var rad = 20;


var svg = d3.select("svg")
            .attr("width",w)
            .attr("height",h);
// birthday exercise:
var birthDay = [
    {"name":"Ines",
    "day":21,
    "month":1,
    "century": 19,
    "year": 97},
    {"name":"annelie",
    "day":12,
    "month":1,
    "century": 19,
    "year": 97}
]

var day = birthDay[0].day;
// Make a canvas
var canvas = d3.select("svg")
      .attr("width",w)
      .attr("height",h);

// Variable for radius
var rad = 50;

//make arrays for each birthday day, month, etc
var days = [];
var arrDays = [];
for (var i = 0; i<birthDay.length; i++){
    days.push(birthDay[i].day);
}
for (var i = 0; i<days.length; i++){
    arrDays.push(Array.from({length: days[i], function(attribute) {
    },}, (_, index) => index + 1));
}


var dayG = svg.selectAll("g")
        .data(arrDays)
        .join("g")

var dayCircles = dayG
// .append('circle')
        .selectAll(".day")
        .data(arrDays, function(d){
            return d;
        })
        .join("circle")
        .attr('class', 'day')
        .attr('cx', function(d,i){
            console.log(d)
            return i*10;
        })
        .attr('cy',h/2)
        .attr('r',5)

    
    // for (var i = 0; i < day; i++) {
    //     var color = i%2 == 0 ? "green" : "lightblue";
    //         canvas.append("circle")
    //         .attr("r", rad)
    //         .attr("cx", rad*3)
    //         .attr("cy",rad*3)
    //         .attr("fill", color);
    //         rad = rad + 1;
    //       }




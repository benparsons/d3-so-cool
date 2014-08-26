var svg = d3.select("svg");

var data = tributary.pics.data.children
//.sort(function (a,b) {return a.data.score  - b.data.score});

var bars = g.selectAll("rect")
.data(data);

bars.enter().append("rect");

var maxScore = d3.max(data, function(d) {return d.data.score;});
var yScale = d3.scale.linear()
.domain([0, maxScore])
.range([500,0]);


bars.attr({
  x: function(d,i) {return i * 15},
  y: function(d) {return 500-yScale(d.data.score)} ,
  width: 10,
  height: function (d) {return yScale( d.data.score)}
});

/*
var maxScore = d3.max(data, function(d) {return d.data.score;});
console.log("max: " + maxScore);
var yScale = d3.scale.linear()
.domain([0, maxScore])
.range([500,0]);
var g = svg.append("g")
//.attr("transform", translate (0, -10));

var circles = g.selectAll("circle").data(data);


circles.enter().
append("circle")
.attr({r:6, 
       cx:function(d,i) {return 100 + i *15}, 
       cy:function(d,i) {return  yScale(d.data.score) }});
//console.log(data);
*/
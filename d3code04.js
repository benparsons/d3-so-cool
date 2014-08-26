var data;
d3.json("pics.json", function(error, json) {
  if (error) return console.warn(error);
  data = json.data.children;
  visualizeit();
});

function visualizeit() {
    var svg = d3.select("svg");
    var bars = svg.selectAll("rect")
    .data(data);

    bars.enter().append("rect");
    console.log(data);
/*
    var maxScore = d3.max(data, function(d) {return d.data.score;});
    var yScale = d3.scale.linear()
    .domain([0, maxScore])
    .range([0,500]);
*/

    bars.attr({
      x: function(d,i) {return i * 15},
      y: 0 ,
      width: 10,
      height: 100,
      //height: function (d) {return yScale( d.data.score)}
      height: function (d) {return d.data.score}
    });
}
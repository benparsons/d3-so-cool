
var data;
d3.json("pics.json", function(error, json) {
  if (error) return console.warn(error);
  data = json.data.children;
  visualizeit();
});

function visualizeit() {
    var svg = d3.select("svg");
    var bars = svg.selectAll("circle")
    .data(data);

    bars.enter().append("circle");

    bars.attr({
      cx: 100 ,
      cy: 100 ,
      r: 10
    });
}
function changeTitle(selector, title){
  $(selector).text(title);
}

function resizeChart(width, height){
  $("#bar-chart").width(width);
  $("#bar-chart").height(height);
}

// TODO: Needs refactor.
function populateYAxis(data){
  var minValue = 0;
  var maxValue = 0;
  for(var i = 0; i < data.length; i++) {
    if(data[i].y > maxValue) {
      maxValue = data[i].y;
    }
  }

  maxValue = Math.ceil(maxValue * 1.05);
  ChartData.maxValue = maxValue;
  // Calculates the increment of the plot points, using a max of 10.
  var plotPointIncrement = (Math.ceil((maxValue - minValue) / 10));
  // Calculates number of plot points.
  var plotPoints = Math.ceil((maxValue - minValue) / plotPointIncrement);

  // TODO: Refactor this mess, perhaps create a template in html?
  // Creates the plot divisions.
  for(var j = plotPoints; j >= 0; j--) {
    var plotPointText = plotPointIncrement * j;
    var newYPlot = document.createElement("div");
    $(newYPlot).addClass("y-plot");
    var newYPlotTitle = document.createElement("p");
    $(newYPlotTitle).addClass("plot-text");
    $(newYPlotTitle).text(plotPointText);
    $(newYPlot).append(newYPlotTitle);
    var newDash = document.createElement("div");
    $(newDash).addClass("dash");
    $(newYPlot).append(newDash);
    $("#y-axis-data").append(newYPlot);
    $(".y-plot").height($("#y-axis-data").height() / (plotPoints + 1));
  }
}

// Creates bars using the given bar data.
// TODO: Make this just use the ChartData object.
function populateBars(bars){
  for(var i = 0; i < bars.length; i++){
    var newBar = document.createElement("div");
    $(newBar).addClass("bar");
    $(newBar).width(ChartData.barWidth);
    $(newBar).height($(".data-div").height() * (bars[i].y / ChartData.maxValue));
    $(".data-div").append(newBar);
  }
}

// Used to create all the elements via code. We may want to do that again when the project is complete.
// TODO: Determine if chart should be created by code, or require users to use an HTML template.
function drawChart(){
  resizeChart(ChartData.chartSize[0], ChartData.chartSize[1]);
  changeTitle(".chart-title", ChartData.chartTitle);
  changeTitle("#y-axis-title", ChartData.yAxisTitle);
  changeTitle("#x-axis-title", ChartData.xAxisTitle);
  populateYAxis(ChartData.barData);
  populateBars(ChartData.barData);
  return;
}

$(function(){
  drawChart();
});



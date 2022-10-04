function changeTitle(selector, title){
  $(selector).text(title);
}

function resizeChart(width, height){
  $("#bar-chart").width(width);
  $("#bar-chart").height(height);
}

// Used to create all the elements via code. We may want to do that again when the project is complete.
// TODO: Determine if chart should be created by code, or require users to use an HTML template.
function drawChart(){
  resizeChart(ChartData.chartSize[0], ChartData.chartSize[1]);
  changeTitle(".chart-title", ChartData.chartTitle);
  changeTitle("#y-axis-title", ChartData.yAxisTitle);
  changeTitle("#x-axis-title", ChartData.xAxisTitle);
  return;
}

$(function(){
  drawChart();
});



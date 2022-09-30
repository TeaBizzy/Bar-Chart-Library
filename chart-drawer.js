
function drawChart(){
  var newChart = document.createElement("div");
  $(newChart).addClass("bar-chart");
  $(newChart).width(ChartData.chartSize[0]);
  $(newChart).height(ChartData.chartSize[1]);

  var newYAxis = document.createElement("div");
  $(newYAxis).addClass("y-axis");
  $(newChart).append(newYAxis);

  var titleDiv = document.createElement("div");
  $(titleDiv).addClass("title-div");
  $(newChart).append(titleDiv);

  var dataDiv = document.createElement("div");
  $(dataDiv).addClass("data-div");
  $(newChart).append(dataDiv);


  var newXAxis = document.createElement("div");
  $(newXAxis).addClass("x-axis");
  $(newChart).append(newXAxis);

  $("body").append(newChart);

  // Draw y titles.
  var newYAxisTitle = document.createElement("h6");
  $(newYAxisTitle).addClass("y-axis-title");
  $(newYAxisTitle).text(ChartData.yAxisName);
  $(".y-axis").append(newYAxisTitle);

  // Draw title.
  var newChartTitle = document.createElement("h5");
  $(newChartTitle).addClass("main-title");
  $(newChartTitle).text(ChartData.chartName);
  $(".title-div").append(newChartTitle);

  // Draw x & y titles.
  var newXAxisTitle = document.createElement("h6");
  $(newXAxisTitle).addClass("x-axis-title");
  $(newXAxisTitle).text(ChartData.xAxisName);
  $(".x-axis").append(newXAxisTitle);



  return;
}

$(function(){
  drawChart();
});



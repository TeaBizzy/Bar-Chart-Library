
function drawChart(){
  var newChart = document.createElement("div");
  $(newChart).addClass("barchart");
  alert(ChartData.chartSize[0]);
  $(newChart).width(ChartData.chartSize[0]);
  $(newChart).height(ChartData.chartSize[1]);

  $("body").append(newChart);

  return;
}

$(function(){
  drawChart();
});



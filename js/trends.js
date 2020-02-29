var elementTab1Selector1 = $('#tab-1-selector-1');
var elementTab1Selector2 = $('#tab-1-selector-2');

var elementTab2Selector1 = $('#tab-2-selector-1');
var elementTab2Selector2 = $('#tab-2-selector-2');

function tab1SelectorOnClick(event) {
  var id = event.target.id !== '' ? event.target.id : event.target.parentNode.id;
  if (id === 'tab-1-selector-1') {
    elementTab1Selector1.addClass('active');
    elementTab1Selector2.removeClass('active');
    drawEducationTab1();
  } else {// id === 'tab-1-selector-2'
    elementTab1Selector1.removeClass('active');
    elementTab1Selector2.addClass('active');
    drawHealthTab1();
  }
}

function tab2SelectorOnClick(event) {
  var id = event.target.id !== '' ? event.target.id : event.target.parentNode.id;
  if (id === 'tab-2-selector-1') {
    elementTab2Selector1.addClass('active');
    elementTab2Selector2.removeClass('active');
    drawEducationTab2();
  } else {// id === 'tab-2-selector-2'
    elementTab2Selector1.removeClass('active');
    elementTab2Selector2.addClass('active');
    drawHealthTab2();
  }
}

function drawEducationTab1() {
  drawSheetName('educationgrowth', 'SELECT A,G,H,I,J', educationgrowthResponseHandler);
  drawSheetName('educationgrowth', 'SELECT A,O,P', EducationgrowthResponseHandler);
}

function drawHealthTab1() {
  drawSheetName('healthgrowth', 'SELECT A,G,H,I,J', healthgrowthResponseHandler);
  drawSheetName('healthgrowth', 'SELECT A,N', HealthgrowthResponseHandler);
}

function drawEducationTab2() {
  drawSheetName('educationgrowth', 'SELECT A,K,L,M,N', educationgrowthrateResponseHandler);
  drawSheetName('educationgrowth', 'SELECT A,N', EducationgrowthrateResponseHandler);
}

function drawHealthTab2() {
  drawSheetName('healthgrowth', 'SELECT A,K,L,M,N', healthgrowthrateResponseHandler);
  drawSheetName('healthgrowth', 'SELECT A,N', HealthgrowthrateResponseHandler);
}

function drawSheetName(sheetName, query, responseHandler) {
  var queryString = encodeURIComponent(query);
  var query = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/10VGRSM5WJe9--z7IqBdYt3A3DD_a7495So7jeq8x05M/gviz/tq?sheet=" + sheetName + "&headers=1&tq=" + queryString
  );
  query.send(responseHandler);
}

function educationgrowthResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 4, desc: true });
  var options = {
    title: 'Education Spending Growth from 2012-2015',
    height: 400,
    vAxis: { title: 'Change from previous year $' },
    hAxis: { title: 'Country' }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('tab-1-canvas-1'));
  chart.draw(data, options);
}

function EducationgrowthResponseHandler(response) {
  var data = response.getDataTable();
  //data.sort({ column: 1, desc: true });
  var options = {
    title: 'Correlation between healthcare and education for year 2015',
    hAxis: { title: 'Healthcare Growth billion $' },
    vAxis: { title: 'Education Growth billion $' },
    bubble: {
      textStyle: {
        fontSize: 12,
        fontName: 'Times-Roman',
        color: 'green',
        bold: true,
        italic: true
      }
    }
  };
  var chart = new google.visualization.BubbleChart(document.getElementById('tab-1-canvas-2'));
  chart.draw(data, options);
}

function healthgrowthResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 4, desc: true });
  var options = {
    title: 'Health Spending Growth from 2012-2015',
    height: 400,
    vAxis: { title: 'Change from previous year $' },
    hAxis: { title: 'Country' }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('tab-1-canvas-1'));
  chart.draw(data, options);
}

function HealthgrowthResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 1, desc: true });
  var options = {
    height: 400,
    colorAxis: { colors: ['#ee8100'] },
    title: 'Health change'
  };
  var chart = new google.visualization.GeoChart(document.getElementById('tab-1-canvas-2'));
  chart.draw(data, options);
}

function educationgrowthrateResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 4, desc: true });
  var options = {
    title: 'Education Spending Growth Rate from 2012-2015',
    height: 400,
    vAxis: { title: '% Change from previous year $' },
    hAxis: { title: 'Country' }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('tab-2-canvas-1'));
  chart.draw(data, options);
}

function EducationgrowthrateResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 1, desc: true });
  var options = {
    height: 400,
    colorAxis: { colors: ['#ee8100'] },
    title: 'Education % change'
  };
  var chart = new google.visualization.GeoChart(document.getElementById('tab-2-canvas-2'));
  chart.draw(data, options);
}

function healthgrowthrateResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 4, desc: true });
  var options = {
    title: 'Health Spending Growth Rate from 2012-2015',
    height: 400,
    vAxis: { title: '% Change from previous year $' },
    hAxis: { title: 'Country' }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('tab-2-canvas-1'));
  chart.draw(data, options);
}

function HealthgrowthrateResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 1, desc: true });
  var options = {
    height: 400,
    colorAxis: { colors: ['#ee8100'] },
    title: 'Health % change'
  };
  var chart = new google.visualization.GeoChart(document.getElementById('tab-2-canvas-2'));
  chart.draw(data, options);
}

elementTab1Selector1.bind('click', tab1SelectorOnClick);
elementTab1Selector2.bind('click', tab1SelectorOnClick);

elementTab2Selector1.bind('click', tab2SelectorOnClick);
elementTab2Selector2.bind('click', tab2SelectorOnClick);

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawEducationTab1);
google.charts.setOnLoadCallback(drawEducationTab2); // Here is a small bug.

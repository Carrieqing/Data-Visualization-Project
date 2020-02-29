var elementTab1Selector1 = $('#tab-1-selector-1');
var elementTab1Selector2 = $('#tab-1-selector-2');
var elementTab1Selector3 = $('#tab-1-selector-3');

var elementTab2Selector1 = $('#tab-2-selector-1');
var elementTab2Selector2 = $('#tab-2-selector-2');
var elementTab2Selector3 = $('#tab-2-selector-3');

function tab1SelectorOnClick(event) {
  var id = event.target.id !== '' ? event.target.id : event.target.parentNode.id;
  if (id === 'tab-1-selector-1') {
    elementTab1Selector1.addClass('active');
    elementTab1Selector2.removeClass('active');
    elementTab1Selector3.removeClass('active');
    drawEducationTab1();
  } else if (id === 'tab-1-selector-2') {
    elementTab1Selector1.removeClass('active');
    elementTab1Selector2.addClass('active');
    elementTab1Selector3.removeClass('active');
    drawHealthTab1();
  } else { // id === 'tab-1-selector-3'
    elementTab1Selector1.removeClass('active');
    elementTab1Selector2.removeClass('active');
    elementTab1Selector3.addClass('active');
    drawMilitrayTab1();
  }
}

function tab2SelectorOnClick(event) {
  var id = event.target.id !== '' ? event.target.id : event.target.parentNode.id;
  if (id === 'tab-2-selector-1') {
    elementTab2Selector1.addClass('active');
    elementTab2Selector2.removeClass('active');
    elementTab2Selector3.removeClass('active');
    drawEducationTab2();
  } else if (id === 'tab-2-selector-2') {
    elementTab2Selector1.removeClass('active');
    elementTab2Selector2.addClass('active');
    elementTab2Selector3.removeClass('active');
    drawHealthTab2();
  } else { // id === 'tab-2-selector-3'
    elementTab2Selector1.removeClass('active');
    elementTab2Selector2.removeClass('active');
    elementTab2Selector3.addClass('active');
    drawMilitrayTab2();
  }
}

function drawEducationTab1() {
  drawSheetName('educationgdp', 'SELECT A,B,C,D,E,F', educationgdpResponseHandler);
  drawSheetName('educationgdp', 'SELECT A,F', EducationgdpResponseHandler);
}

function drawHealthTab1() {
  drawSheetName('healthgdp', 'SELECT A,B,C,D,E,F', healthgdpResponseHandler);
  drawSheetName('healthgdp', 'SELECT A,F', HealthgdpResponseHandler);
}

function drawMilitrayTab1() {
  drawSheetName('militarygdp', 'SELECT A,B,C,D,E,F', militarygdpResponseHandler);
  drawSheetName('militarygdp', 'SELECT A,F', MilitarygdpResponseHandler);
}

function drawEducationTab2() {
  drawSheetName('spendinggdpper', 'SELECT A,R,S,T,U', per15ResponseHandler);
  drawSheetName('pereducationspending', 'SELECT A,K', pereducation15ResponseHandler);
}

function drawHealthTab2() {
  drawSheetName('spendinggdpper', 'SELECT A,R,S,T,U', per15ResponseHandler);
  drawSheetName('perhealthspending', 'SELECT A,F', perhealth15ResponseHandler);
}

function drawMilitrayTab2() {
  drawSheetName('spendinggdpper', 'SELECT A,R,S,T,U', per15ResponseHandler);
  drawSheetName('permilitaryspending', 'SELECT A,K', permilitary15ResponseHandler);
}

function drawSheetName(sheetName, query, responseHandler) {
  var queryString = encodeURIComponent(query);
  var query = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/10VGRSM5WJe9--z7IqBdYt3A3DD_a7495So7jeq8x05M/gviz/tq?sheet=" + sheetName + "&headers=1&tq=" + queryString
  );
  query.send(responseHandler);
}

function educationgdpResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 5, desc: true });
  var options = {
    title: 'Education spending of GDP from 2011-2015',
    height: 400,
    vAxis: { title: 'Education % of GDP' },
    hAxis: { title: 'Country' }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('tab-1-canvas-1'));
  chart.draw(data, options);
}

function EducationgdpResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 1, desc: true });
  var options = {
    height: 400,
    colorAxis: { colors: ['#e7711c', '#4374e0'] },
    title: 'Top Countries by Education Spending 2015'
  };
  var chart = new google.visualization.GeoChart(document.getElementById('tab-1-canvas-2'));
  chart.draw(data, options);
}

function healthgdpResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 5, desc: true });
  var options = {
    title: 'Health spending of GDP from 2011-2015',
    height: 400,
    vAxis: { title: 'Healthcare % of GDP' },
    hAxis: { title: 'Country' }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('tab-1-canvas-1'));
  chart.draw(data, options);
}

function HealthgdpResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 1, desc: true });
  var options = {
    height: 400,
    colorAxis: { colors: ['#e7711c', '#4374e0'] },
    title: 'Top Countries by Health Spending 2015'
  };
  var chart = new google.visualization.GeoChart(document.getElementById('tab-1-canvas-2'));
  chart.draw(data, options);
}

function militarygdpResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 5, desc: true });
  var options = {
    title: 'Military spending of GDP from 2011-2015',
    height: 400,
    vAxis: { title: 'Military % of GDP' },
    hAxis: { title: 'Country' }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('tab-1-canvas-1'));
  chart.draw(data, options);
}

function MilitarygdpResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 1, desc: true });
  var options = {
    height: 400,
    colorAxis: { colors: ['#e7711c', '#4374e0'] },
    title: 'Top Countries by Military Spending 2015'
  };
  var chart = new google.visualization.GeoChart(document.getElementById('tab-1-canvas-2'));
  chart.draw(data, options);
}

function per15ResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 4, desc: true });
  var options = {
    title: 'Three categories spending of GDP per capita from 2011-2015',
    height: 400,
    vAxis: { title: '$ per Capita of GDP' },
    hAxis: { title: 'Country' }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('tab-2-canvas-1'));
  chart.draw(data, options);
}

function pereducation15ResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 1, desc: true });
  var options = {
    height: 400,
    colorAxis: { colors: ['#e7711c', '#4374e0'] },
  };
  var chart = new google.visualization.GeoChart(document.getElementById('tab-2-canvas-2'));
  chart.draw(data, options);
}

function perhealth15ResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 1, desc: true });
  var options = {
    height: 400,
    colorAxis: { colors: ['#e7711c', '#4374e0'] },
  };
  var chart = new google.visualization.GeoChart(document.getElementById('tab-2-canvas-2'));
  chart.draw(data, options);
}

function permilitary15ResponseHandler(response) {
  var data = response.getDataTable();
  data.sort({ column: 1, desc: true });
  var options = {
    height: 400,
    colorAxis: { colors: ['#e7711c', '#4374e0'] },
  };
  var chart = new google.visualization.GeoChart(document.getElementById('tab-2-canvas-2'));
  chart.draw(data, options);
}

elementTab1Selector1.bind('click', tab1SelectorOnClick);
elementTab1Selector2.bind('click', tab1SelectorOnClick);
elementTab1Selector3.bind('click', tab1SelectorOnClick);

elementTab2Selector1.bind('click', tab2SelectorOnClick);
elementTab2Selector2.bind('click', tab2SelectorOnClick);
elementTab2Selector3.bind('click', tab2SelectorOnClick);

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawEducationTab1);
google.charts.setOnLoadCallback(drawEducationTab2); // Here is a small bug.

var ticker = require('./ticker').Ticker
  , $ = require('../../pub/js/jquery.min.js')
  , base = require('all-your-base')
  , time = require('./timeSplit');

var decToBin = base.decToBin;
var parseTime = time.parseTime;
var splitConvertTime = time.splitConvertTime;
var splitTime = time.splitTime;
var timeStr;

var dot = $('td.dot div');
var showBin_td = $('tr.showBin td span');
var showDec_td = $('tr.showDec td span');
var bins = showBin_td.toArray();
var decs = showDec_td.toArray();

var ticker = new ticker();

function randomColor() {
	var randomInteger = function(min, max) {
		return Math.floor(min + Math.random() * ((max - min) + 1));
	};
	var	r,g,b;
	var rgb = [r,g,b];
	return { 'background-color': 'rgb(' + rgb.map(function(color) {
		return randomInteger(0, 255);
	}).toString() + ')'};

  // call like this:
  //$(this).css(randomColor());
}

$(document).ready(function() {
  ticker.on('tick', function() {
    timeStr = parseTime(new Date().toTimeString());
    var binaryTime = splitTime(timeStr, decToBin);
    var regTime = splitTime(timeStr);
    var times = [binaryTime, regTime];
    
    bins.forEach(function(val, ind){
      $(val).text(function() {
        return times[0][ind]; 
      });
    });
    decs.forEach(function(val, ind) {
      $(val).text(function() {
        return times[1][ind]; 
      });
    });
  });
});

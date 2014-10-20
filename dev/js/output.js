var Ticker = require('./ticker').Ticker
  , $ = require('../../pub/js/jquery.min.js')
  , time = require('./timeSplit')
  , base = require('all-your-base')
  , hashes = require('./hashes');

var decToBin = base.decToBin;
var parseTime = time.parseTime;
var splitConvertTime = time.splitConvertTime;
var splitTime = time.splitTime;
var timeStr;

var dot = $('td.dot div');
var showBin = $('tr.showBin td span').toArray();
var showDec = $('tr.showDec td span').toArray();


var ticker = new Ticker();
$(document).ready(function() {

  ticker.on('tick', function() {
    timeStr = parseTime(new Date().toTimeString());
    var binaryTime = splitTime(timeStr, decToBin);
    var regTime = splitTime(timeStr);

    hashes.hhTens(regTime[0]);
    hashes.hhOnes(regTime[1]);
    hashes.mmTens(regTime[2]);
    hashes.mmOnes(regTime[3]);
    hashes.ssTens(regTime[4]);
    hashes.ssOnes(regTime[5]);

    showBin.forEach(function(val, ind) {
      $(val).text(regTime[ind]);
    });
    showDec.forEach(function(val, ind) {
      $(val).text(regTime[ind]);
    });
  });
  
});

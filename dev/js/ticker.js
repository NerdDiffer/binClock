var util = require('util')
  , EventEmitter = require('events').EventEmitter
  , time = require('./timeSplit')
  , base = require('all-your-base');

var decToBin = base.decToBin;
var parseTime = time.parseTime;
var splitConvertTime = time.splitConvertTime;
var splitTime = time.splitTime;
var timeStr;

var Ticker = function() {
  var self = this;
  setInterval(function() {
    self.emit('tick'); 
  }, 1000);
};

util.inherits(Ticker, EventEmitter);

var ticker = new Ticker();

ticker.on('tick', function() {
  timeStr = parseTime(new Date().toTimeString());
  var binaryTime = splitTime(timeStr, decToBin);
  var regTime = splitTime(timeStr);
  return [binaryTime, regTime];
});

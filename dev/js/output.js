var $ = require('../../pub/js/jquery.min.js')
  , TimeObj = require('./TimeObj')
  , time = require('./timeSplit')
  , base = require('all-your-base')
  , hashes = require('./hashes');

var parseTime = time.parseTime
  , splitTime = time.splitTime
  , decToHex = base.decToHex
  , hexToDec = base.hexToDec
  , decToBin = base.decToBin;
 
var hexTime = TimeObj.HexTime
  , decTime = TimeObj.DecTime;

// count number of base-10 seconds since midnight & do some hexadecimal stuff
function hexCount (t) {
  //var d = new Date().toTimeString();
  //var t = parseTime(d);
  //console.log(d, t);
  var hh = parseInt(t.substr(0,2) * (decTime.ssInMM * decTime.mmInHH));
  var mm = parseInt(t.substr(2,2) * (decTime.ssInMM));
  var ss = parseInt(t.substr(4,2));
  var timeArr = [hh,mm,ss];
  //console.log(timeArr);

  var timeSum = hh + mm + ss;
  //console.log(timeSum);
  
  var _hh = (hh / decTime.ssInDD());
  var _mm = (mm / decTime.ssInHH());
  var _ss = (ss / decTime.ssInMM);
  var timePer = [_hh, _mm, _ss];
  timePer = timePer.map(function(val) {
    return parseFloat(val.toFixed(3));
  });
  //console.log(timePer);

  var pseudoBase = Math.pow(hexTime.base, 2);
  var timeMorphed = timePer.map(function(val) {
    return decToHex(Math.floor(val * pseudoBase));
  });
  //console.log(timeMorphed);
  return timeMorphed;
}

/** 
 * nice little utility function 
 * checks if selected element exists & if it does, returns a closure
 * http://css-tricks.com/snippets/jquery/check-if-element-exists/
 * @param callback, Function. define what to do here
 * @return, closure
 */
$.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);
  if (this.length) {
    callback.call(this, args);
  }
  return this;
};

var showHex = $('tr.showHex td span').toArray();
var rows = $('.hexTable tr');
var showBin = $('tr.showBin td span').toArray();
var showDec = $('tr.showDec td span').toArray();
var showTime = $('tr.showTime td:first-of-type span');
var t, regTime, binTime, hexTime;

var colorThis = $('body');

$(document).ready(function() {
  setInterval(function() {
    $('table.hexTable').exists(function() {
      (function () {
        t = parseTime(new Date().toTimeString());
        var hexTime = hexCount(t);
        regTime = splitTime(t);
        
        showHex.forEach(function(val, ind) {
          $(val).text(hexTime[ind]);
        });
        showDec.forEach(function(val, ind) {
          $(val).text(regTime[ind]);
        });
        showTime.text(function() {
          return t.substr(0,2) + 
            ':' + t.substr(2,2) + 
            ':' + t.substr(4);
        });
        colorThis.css('background-color', '#' + hexTime.join(''));
        rows.css('background-color', '#' + hexTime.join(''));
      })();
      //hexTick();
    });
    $('table.binTable').exists(function() {
      (function () {
        t = parseTime(new Date().toTimeString());
        binTime = splitTime(t, decToBin);
        regTime = splitTime(t);

        hashes.hhTens(regTime[0]);
        hashes.hhOnes(regTime[1]);
        hashes.mmTens(regTime[2]);
        hashes.mmOnes(regTime[3]);
        hashes.ssTens(regTime[4]);
        hashes.ssOnes(regTime[5]);

        showBin.forEach(function(val, ind) {
          $(val).text(binTime[ind]);
        });
        showDec.forEach(function(val, ind) {
          $(val).text(regTime[ind]);
        });
        showTime.text(function() {
          return t.substr(0,2) + 
            ':' + t.substr(2,2) + 
            ':' + t.substr(4);
        });
      })();
      //binTick();
    });
  }, 1000);
});

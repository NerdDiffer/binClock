var time = require('./timeSplit')
  , base = require('all-your-base');

var decToHex = base.decToHex
  , hexToDec = base.hexToDec
  , parse = time.parseTime
  , splitTime = time.splitTime;

var Time = {
  ssInHH: function() {
    return this.ssInMM * this.mmInHH; 
  },
  ssInDD: function() {
    return this.ssInMM * this.mmInHH * this.hhInDD;
  },
  mmInDD: function() {
    return this.mmInHH * this.hhInDD;
  },
  //pseuDegrees: function(unit) {
  //  return unit / Math.PI;
  //},
  logEnumProps: function() {
    return (Object.keys(this));
  },
  logAllProps: function() {
    return (Object.getOwnPropertyNames(this));
  },
};
Time.getHHFromSS = function(ss) {
  return ss / this.ssInHH();
};
Time.getDDFromMM = function(mm) {
  return mm / this.mmInDD();
};
Time.getDDFromSS = function(ss) {
  return ss / this.ssInDD();
};

var HexTime = Object.create(Time, {
  base: {value: 16, enumerable: true},
  ssInMM: {value: 16, enumerable: true},
  mmInHH: {value: 256, enumerable: true},
  hhInDD: {value: 16, enumerable: true},
});

var DecTime = Object.create(Time, {
  base: {value: 10, enumerable: true},
  ssInMM: {value: 60, enumerable: true},
  mmInHH: {value: 60, enumerable: true},
  hhInDD: {value: 24, enumerable: true},
  secondsSinceMidnight: {
    value: function (t) {
      var hh = parseInt(t.substr(0,2) * (this.ssInMM * this.mmInHH));
      var mm = parseInt(t.substr(2,2) * (this.ssInMM));
      var ss = parseInt(t.substr(4,2));
      return hh + mm + ss;
    }
  }
});

/* Correlation methods */

// hexadecimal unit to complimentary decimal unit
HexTime.getDecSec = function(hexSec) {
  var decBase = DecTime.ssInDD();
  var hexBase = Math.pow(HexTime.base, 4);
  return hexSec * ( decBase / hexBase ).toFixed(3);
};
HexTime.getDecMin = function(hexMin) {
  var decBase = DecTime.mmInDD();
  var hexBase = Math.pow(HexTime.base, 3);
  return hexMin * ( decBase / hexBase ).toFixed(3);
};
HexTime.getDecHour = function(hexHour) {
  var decBase = DecTime.hhInDD;
  var hexBase = Math.pow(HexTime.base, 1);
  return hexHour * ( decBase / hexBase ).toFixed(3);
};

// decimal unit to complimentary hexadecimal unit
DecTime.getHexSec = function(decSec) {
  var hexBase = Math.pow(HexTime.base, 4);
  var decBase = DecTime.ssInDD();
  return (decSec * ( hexBase / decBase )).toFixed(3);
};
DecTime.getHexMin = function(decMin) {
  var hexBase = Math.pow(HexTime.base, 3);
  var decBase = DecTime.mmInDD();
  return (decMin * ( hexBase / decBase )).toFixed(3);
};
DecTime.getHexHour = function(decHour) {
  var hexBase = Math.pow(HexTime.base, 1);
  var decBase = DecTime.hhInDD;
  return (decHour * ( hexBase / decBase )).toFixed(3);
};

module.exports = {
  Time: Time,
  HexTime: HexTime,
  DecTime: DecTime
};

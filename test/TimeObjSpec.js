var assert = require('assert')
  , TimeObj = require('../dev/js/TimeObj')
  , time = require('../dev/js/timeSplit')
  , base = require('all-your-base');

var decToHex = base.decToHex
  , hexToDec = base.hexToDec
  , parse = time.parseTime
  , splitTime = time.splitTime;

describe('Time', function() {
  var Time = TimeObj.Time;
  //it("should provide these basic properties", function() {
  //  assert.equal(
  //    'ssInHH,ssInDD,mmInDD,logEnumProps,logAllProps,getHHFromSS,getDDFromMM,getDDFromSS', 
  //    Object.keys(Time)
  //  ); 
  //});
  //it("should provide some functions for extrapolating other numbers", function() {
  //  assert.equal('function', typeof Time.ssInHH);
  //  assert.equal('function', typeof Time.ssInDD);
  //  assert.equal('function', typeof Time.mmInDD);
  //  assert.equal('function', typeof Time.getHHFromSS);
  //  assert.equal('function', typeof Time.getDDFromMM);
  //});
});

describe('HexTime', function() {
  var hexTime = TimeObj.HexTime;
  it("should have a property describing it as base-16", function() {
    assert.equal(16, hexTime.base); 
  });
  it("should have these counts of minutes to seconds to hours", function() {
    assert.equal(16, hexTime.ssInMM); 
    assert.equal(256, hexTime.mmInHH); 
    assert.equal(16, hexTime.hhInDD); 
  });
  describe('relating hexadecimal time units to other hexadecimal time units', function() {
    describe('#getHHFromSS', function() {
      it("should show that some arbitrary number of passed-in decimally-based hexSeconds are proportional to an amount of decimally-based hexHours", function() {
        assert.equal(1, hexTime.getHHFromSS(4096)); 
        assert.equal(2, hexTime.getHHFromSS(8192)); 
        assert.equal(0.5, hexTime.getHHFromSS(2048)); 
        assert.equal(16, hexTime.getHHFromSS(65536)); 
      });
    });
    describe('#getDDFromMM', function() {
      it("should show that some arbitrary number of passed-in decimally-based hexMinutes are proportional to an amount of decimally-based hexDays", function() {
        assert.equal(1, hexTime.getDDFromMM(4096)); 
        assert.equal(0.5, hexTime.getDDFromMM(2048)); 
        assert.equal(2, hexTime.getDDFromMM(8192)); 
        assert.equal(2.5, hexTime.getDDFromMM(10240)); 
        assert.equal(16, hexTime.getDDFromMM(65536)); 
      });
    });
    describe('#getDDFromSS', function() {
      it("should show that some arbitrary number of passed-in decimally-based hexSeconds are proportional to an amount of decimally-based hexDays", function() {
        assert.equal(1, hexTime.getDDFromSS(65536));
      });
    });
  });
  describe('correlating hexadecimal time units to decimal time units', function() {
    describe("#getDecSec", function() {
      it("should be passed a hexSecond & return a decSecond", function() {
        assert.equal(1.318, hexTime.getDecSec(1));
        assert.equal(2.636, hexTime.getDecSec(2));
      });
    });
    describe("#getDecMin", function() {
      it("should be passed a hexMinute & return a decMinute", function() {
        assert.equal(0.352, hexTime.getDecMin(1));
        assert.equal(0.704, hexTime.getDecMin(2));
      });
    });
    describe("#getDecHour", function() {
      it("should be passed a hexHour & return a decHour", function() {
        assert.equal(1.500, hexTime.getDecHour(1));
        assert.equal(3.000, hexTime.getDecHour(2));
        assert.equal(24.000, hexTime.getDecHour(16));
      });
    });
  });
});

describe('DecTime', function() {
  var decTime = TimeObj.DecTime;
  it("should have a property describing it as base-10", function() {
    assert.equal(10, decTime.base); 
  });
  it("should have these counts of minutes to seconds to hours", function() {
    assert.equal(60, decTime.ssInMM); 
    assert.equal(60, decTime.mmInHH); 
    assert.equal(24, decTime.hhInDD); 
  });
  describe('relating decimal units to other decimal units', function() {
    describe('#getHHFromSS', function() {
      it("should show that some arbitrary number of passed-in decimally-based decSeconds are proportional to an amount of decimally-based decHours", function() {
        assert.equal(1, decTime.getHHFromSS(3600)); 
        assert.equal(2, decTime.getHHFromSS(7200)); 
        assert.equal(1.5, decTime.getHHFromSS(5400)); 
      });
    });
    describe('#getDDFromMM', function() {
      it("should show that some arbitrary number of passed-in decimally-based decMinutes are proportional to an amount of decimally-based decDays", function() {
        assert.equal(1, decTime.getDDFromMM(1440)); 
        assert.equal(2, decTime.getDDFromMM(2880)); 
        assert.equal(1.5, decTime.getDDFromMM(2160)); 
      });
    });
    describe('#getDDFromSS', function() {
      it("should show that some arbitrary number of passed-in decimally-based decSeconds are proportional to an amount of decimally-based decDays", function() {
        assert.equal(1, decTime.getDDFromSS(86400)); 
        assert.equal(0.5, decTime.getDDFromSS(43200)); 
        assert.equal(1.5, decTime.getDDFromSS(129600)); 
      });
    });
  });
  describe('correlating decimal time units to hexadecimal time units', function() {
    describe("#getHexSec", function() {
      it("should be passed a decSecond & return hexSeconds", function() {
        assert.equal(0.759, decTime.getHexSec(1));
        assert.equal(45.511, decTime.getHexSec(60));
        assert.equal(65536, decTime.getHexSec(86400));
      });
    });
    describe("#getHexMin", function() {
      it("should be passed a decMinute & return hexMinutes", function() {
        assert.equal(2.844, decTime.getHexMin(1));
        assert.equal(170.667, decTime.getHexMin(60));
        assert.equal(4096, decTime.getHexMin(1440));
      });
    });
    describe("#getHexHour", function() {
      it("should be passed a decHour & return hexHours", function() {
        assert.equal(0.667, decTime.getHexHour(1));
        assert.equal(8, decTime.getHexHour(12));
        assert.equal(16, decTime.getHexHour(24));
      });
    });
  });
});

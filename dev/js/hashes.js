var $ = require('../../pub/js/jquery.js');

function ssOnes(num) {
  var hash = {
    '1': $('#ss0001'),
    '2': $('#ss0010'),
    '3': $('#ss0010, #ss0001'),
    '4': $('#ss0100'),
    '5': $('#ss0100, #ss0001'),
    '6': $('#ss0100, #ss0010'),
    '7': $('#ss0100, #ss0010, #ss0001'),
    '8': $('#ss1000'),
    '9': $('#ss1000, #ss0001'),
  };
  switch(num) {
    case '1': 
      hash['1'].addClass('active');
      break;
    case '2': 
      hash['1'].removeClass('active');
      hash['2'].addClass('active');
      break;
    case '3': 
      hash['2'].removeClass('active');
      hash['3'].addClass('active');
      break;
    case '4': 
      hash['3'].removeClass('active');
      hash['4'].addClass('active');
      break;
    case '5': 
      hash['4'].removeClass('active');
      hash['5'].addClass('active');
      break;
    case '6': 
      hash['5'].removeClass('active');
      hash['6'].addClass('active');
      break;
    case '7': 
      hash['6'].removeClass('active');
      hash['7'].addClass('active');
      break;
    case '8': 
      hash['7'].removeClass('active');
      hash['8'].addClass('active');
      break;
    case '9': 
      hash['8'].removeClass('active');
      hash['9'].addClass('active');
      break;
    case '0': 
      hash['9'].removeClass('active');
      break;
    default:
      break;
  }
}

function ssTens(num) {
  var hash = {
    '1': $('#ss1010'),
    '2': $('#ss10100'),
    '3': $('#ss10100, #ss1010'),
    '4': $('#ss101000'),
    '5': $('#ss101000, #ss1010'),
  };
  switch(num) {
    case '1': 
      hash['1'].addClass('active');
      break;
    case '2': 
      hash['1'].removeClass('active');
      hash['2'].addClass('active');
      break;
    case '3': 
      hash['2'].removeClass('active');
      hash['3'].addClass('active');
      break;
    case '4': 
      hash['3'].removeClass('active');
      hash['4'].addClass('active');
      break;
    case '5': 
      hash['4'].removeClass('active');
      hash['5'].addClass('active');
      break;
    case '0': 
      hash['5'].removeClass('active');
      break;
    default:
      break;
  }
}

function mmOnes(num) {
  var hash = {
    '1': $('#mm0001'),
    '2': $('#mm0010'),
    '3': $('#mm0010, #mm0001'),
    '4': $('#mm0100'),
    '5': $('#mm0100, #mm0001'),
    '6': $('#mm0100, #mm0010'),
    '7': $('#mm0100, #mm0010, #mm0001'),
    '8': $('#mm1000'),
    '9': $('#mm1000, #mm0001'),
  };
  switch(num) {
    case '1': 
      hash['1'].addClass('active');
      break;
    case '2': 
      hash['1'].removeClass('active');
      hash['2'].addClass('active');
      break;
    case '3': 
      hash['2'].removeClass('active');
      hash['3'].addClass('active');
      break;
    case '4': 
      hash['3'].removeClass('active');
      hash['4'].addClass('active');
      break;
    case '5': 
      hash['4'].removeClass('active');
      hash['5'].addClass('active');
      break;
    case '6': 
      hash['5'].removeClass('active');
      hash['6'].addClass('active');
      break;
    case '7': 
      hash['6'].removeClass('active');
      hash['7'].addClass('active');
      break;
    case '8': 
      hash['7'].removeClass('active');
      hash['8'].addClass('active');
      break;
    case '9': 
      hash['8'].removeClass('active');
      hash['9'].addClass('active');
      break;
    case '0': 
      hash['9'].removeClass('active');
      break;
    default:
      break;
  }
}

function mmTens(num) {
  var hash = {
    '1': $('#mm1010'),
    '2': $('#mm10100'),
    '3': $('#mm10100, #mm1010'),
    '4': $('#mm101000'),
    '5': $('#mm101000, #mm1010'),
  };
  switch(num) {
    case '1': 
      hash['1'].addClass('active');
      break;
    case '2': 
      hash['1'].removeClass('active');
      hash['2'].addClass('active');
      break;
    case '3': 
      hash['2'].removeClass('active');
      hash['3'].addClass('active');
      break;
    case '4': 
      hash['3'].removeClass('active');
      hash['4'].addClass('active');
      break;
    case '5': 
      hash['4'].removeClass('active');
      hash['5'].addClass('active');
      break;
    case '0': 
      hash['5'].removeClass('active');
      break;
    default:
      break;
  }
}

function hhOnes(num) {
  var hash = {
    '1': $('#hh0001'),
    '2': $('#hh0010'),
    '3': $('#hh0010, #hh0001'),
    '4': $('#hh0100'),
    '5': $('#hh0100, #hh0001'),
    '6': $('#hh0100, #hh0010'),
    '7': $('#hh0100, #hh0010, #hh0001'),
    '8': $('#hh1000'),
    '9': $('#hh1000, #hh0001'),
  };
  switch(num) {
    case '1': 
      hash['1'].addClass('active');
      break;
    case '2': 
      hash['1'].removeClass('active');
      hash['2'].addClass('active');
      break;
    case '3': 
      hash['2'].removeClass('active');
      hash['3'].addClass('active');
      break;
    case '4': 
      hash['3'].removeClass('active');
      hash['4'].addClass('active');
      break;
    case '5': 
      hash['4'].removeClass('active');
      hash['5'].addClass('active');
      break;
    case '6': 
      hash['5'].removeClass('active');
      hash['6'].addClass('active');
      break;
    case '7': 
      hash['6'].removeClass('active');
      hash['7'].addClass('active');
      break;
    case '8': 
      hash['7'].removeClass('active');
      hash['8'].addClass('active');
      break;
    case '9': 
      hash['8'].removeClass('active');
      hash['9'].addClass('active');
      break;
    case '0': 
      hash['9'].removeClass('active');
      break;
    default:
      break;
  }
}

function hhTens(num) {
  var hash = {
    '1': $('#hh1010'),
    '2': $('#hh10100'),
  };
  switch(num) {
    case '1': 
      hash['1'].addClass('active');
      break;
    case '2': 
      hash['1'].removeClass('active');
      hash['2'].addClass('active');
      break;
    case '3': 
      hash['2'].removeClass('active');
      hash['3'].addClass('active');
      break;
    case '4': 
      hash['3'].removeClass('active');
      hash['4'].addClass('active');
      break;
    case '5': 
      hash['4'].removeClass('active');
      hash['5'].addClass('active');
      break;
    case '0': 
      hash['5'].removeClass('active');
      break;
    default:
      break;
  }
}

module.exports = {
  ssOnes: ssOnes,
  ssTens: ssTens,
  mmOnes: mmOnes,
  mmTens: mmTens,
  hhOnes: hhOnes,
  hhTens: hhTens
};

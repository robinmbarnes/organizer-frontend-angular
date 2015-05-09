require('jasmine-expect');
var DayHoursGenerator = require('../../services/MonthDaysGenerator')();

describe('MonthDaysGenerator', function () {

  it('#generateForDate should produce 5 weeks in array', function () {
    var result = DayHoursGenerator.generateForDate(new Date());
    expect(result).toBeArray();
    expect(result.length).toEqual(5);
  });

  it('#generateForDate should produce 7 days for each week', function () {
    var result = DayHoursGenerator.generateForDate(new Date());
    for(var i = 0; i <= 4; i++) {
      expect(result[i]).toBeArray();
      expect(result[i].length).toEqual(7);
    }
  });

  it('#generateForDate should produce correct days for given date', function () {
    var date = new Date(2015, 5, 23); //June 23 2015
    var result = DayHoursGenerator.generateForDate(date);
    //Flatten and extract 'day month'
    result = result.reduce(function (previous, current) {
      return previous.concat(current);
    }, [])
      .map(function (val) {
        return val.getDay() + ' ' + val.getMonth();
      });
    var expected = [
      '1 5',
      '2 5',
      '3 5',
      '4 5',
      '5 5',
      '6 5',
      '7 5',
      '8 5',
      '9 5',
      '10 5',
      '11 5',
      '12 5',
      '13 5',
      '14 5',
      '15 5',
      '16 5',
      '17 5',
      '18 5',
      '19 5',
      '20 5',
      '21 5',
      '22 5',
      '23 5',
      '24 5',
      '25 5',
      '26 5',
      '27 5',
      '28 5',
      '29 5',
      '30 5',
      '1 6',
      '2 6',
      '3 6',
      '4 6',
      '5 6'
    ];
    expect(expected).toEqual(result);
  });

});
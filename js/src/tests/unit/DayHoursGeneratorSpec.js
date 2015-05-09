require('jasmine-expect');
var DayHoursGenerator = require('../../services/DayHoursGenerator')();

describe('DayHoursGenerator', function () {

  it('#generateForDate should produce 24 hours in array', function () {
    var result = DayHoursGenerator.generateForDate(new Date());
    expect(result).toBeArray();
    expect(result.length).toEqual(24);
  });

  it('#generateForDate should produce correct hours', function () {
    var result = DayHoursGenerator.generateForDate(new Date());
    for(var i = 0; i <= 23; i++) {
      expect(result[i].getHours()).toEqual(i);
    }
  });

});
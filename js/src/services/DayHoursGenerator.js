'use strict';

var DayHoursGenerator = {

  /**
   *
   * @param date
   * @returns {Date[]}
   */
  generateForDate: function (date) {

    var days = [];
    for(var i = 0; i <= 23; i++) {
      var currentDate = new Date(date.toUTCString());
      currentDate.setHours(i)
      currentDate.setMinutes(0)
      currentDate.setSeconds(0)
      currentDate.setMilliseconds(0);
      days.push(currentDate);
    }

    return days;
  }

};

module.exports = function () {
  return DayHoursGenerator;
};
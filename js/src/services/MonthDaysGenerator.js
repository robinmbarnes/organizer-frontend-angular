'use strict';

var monthDaysGenerator = {
    generateForDate: function(date) {
      var firstDayOfMonth = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
      );

      var dayOfWeek = firstDayOfMonth.getUTCDay();
      var firstDay = new Date(
        firstDayOfMonth.getFullYear(),
        firstDayOfMonth.getMonth(),
        1 - firstDayOfMonth.getUTCDay()
      );

      var weeks = [];
      var week = 0;
      weeks[week] = [];
      for(var i = 0; i < 35; i++) {
        if(typeof weeks[week] === 'undefined') {
          weeks[week] = [];
        }
        weeks[week].push(new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + i));
        if((i+1) % 7 === 0) {
          week++;
        }
      }

      return weeks;
    }


};

module.exports = function() {
  return monthDaysGenerator;
}
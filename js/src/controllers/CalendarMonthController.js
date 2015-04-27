'use strict';

function calendarMonthController($scope, $routeParams, MonthDaysGenerator, MonthInformation) {

  if(typeof $routeParams.year !== 'undefined' || typeof $routeParams.month !== 'undefined') {
    try {
      MonthInformation.setMonth($routeParams.month, $routeParams.year);
    } catch (err) {
      //Do nothing, the month will just remain as the current month
    }
  }

  var today = new Date();
  var weeks = MonthDaysGenerator.generateForDate(MonthInformation.getMonthDate());

  $scope.model = {
    weeks: weeks,
    date: MonthInformation.getMonthDate(),
    nextMonth: MonthInformation.getNextMonthDate(),
    previousMonth: MonthInformation.getPreviousMonthDate(),
    isDayActive: function (day) {
      return (day.getMonth() === MonthInformation.getMonthDate().getMonth());
    },
    isToday: function (day) {
      return (day.toDateString() === today.toDateString())
    }
  };
}

module.exports = calendarMonthController;
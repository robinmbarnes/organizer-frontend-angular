function calendarDayController($scope, DayHoursController) {

  var model = {
    days: DayHoursController.generateForDate(new Date())
  };

  $scope.model = model;
}

module.exports = calendarDayController;

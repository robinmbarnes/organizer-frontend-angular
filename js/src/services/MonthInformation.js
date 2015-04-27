'use strict';

function MonthInformation() {
  this._date = new Date();
}

/**
 *
 * @param int month
 * @param int year
 */
MonthInformation.prototype.setMonth = function (month, year) {
    var year = parseInt(year);
    var month = parseInt(month);
    var isMonthValid = (!isNaN(month) && month > 0 && month <= 12);
    var isYearValid = (!isNaN(year) && year > 0);
    if(isYearValid && isMonthValid) {
      this._date = new Date(year, month - 1, 1);
    } else {
      throw new Error('Invalid month or year given');
    }
};

MonthInformation.prototype.getMonthDate = function() {
  return this._date;
};

MonthInformation.prototype.getPreviousMonthDate = function () {
  var nextMonth = new Date(this._date.toDateString());
  nextMonth.setMonth(nextMonth.getMonth() - 1);

  return nextMonth;
};

MonthInformation.prototype.getNextMonthDate = function () {
  var nextMonth = new Date(this._date.toDateString());
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  return nextMonth;
};

module.exports = MonthInformation;
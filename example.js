angular.module('mwl.calendar.docs', ['mwl.calendar', 'ngAnimate', 'ui.bootstrap', 'colorpicker.module', 'oc.lazyLoad']);
angular
  .module('mwl.calendar.docs') //you will need to declare your module with the dependencies ['mwl.calendar', 'ui.bootstrap', 'ngAnimate']
  .controller('KitchenSinkCtrl', function($scope,$window,$ocLazyLoad, moment, alert, calendarConfig) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();
calendarConfig.dateFormatter = 'moment'; // use moment instead of angular for formatting dates
    var originali18n = angular.copy(calendarConfig.i18nStrings);
    calendarConfig.i18nStrings.weekNumber = 'Semaine {week}';

    $window.moment = $window.moment || moment;
    $ocLazyLoad.load('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/locale/de.js').then(function() {
      moment.updateLocale('de', {
        week: {
          dow: 1 // Monday is the first day of the week
        }
      });
      moment.updateLocale('de'); // change the locale to french
    });

    $scope.$on('$destroy', function() {
      moment.locale('en');
      calendarConfig.i18nStrings = originali18n;
    });

  });

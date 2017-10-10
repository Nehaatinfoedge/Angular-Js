angular
  .module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap'])
  .controller('MainCtrl', function($scope, $http) {
    //ngModel value
    $scope.selected = undefined;
    //lookup values
    $scope.countries = [ 
      {name: 'Afghanistan', code: 'AF'},
      {name: 'Antigua and Barbuda', code: 'AG'},
      {name: 'Bahamas', code: 'BS'},
      {name: 'Cambodia', code: 'KH'},
      {name: 'Cape Verde', code: 'CV'}
    ];
  });

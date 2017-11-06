// Module: copyExample
angular.
  module('myapp', []).
  controller('copyExample', ['$scope', function($scope) {
    $scope.leader = {};

    $scope.reset = function() {
      // Example with 1 argument
      $scope.user = angular.copy($scope.leader);
    };

    $scope.update = function(user) {
      // Example with 2 arguments
      angular.copy(user, $scope.leader);
    };

    $scope.reset();
  }])
  .controller('equalsExample', ['$scope', function($scope) {
  	$scope.user1 = {};
  	$scope.user2 = {};
  	$scope.compare = function() {
    		$scope.result = angular.equals($scope.user1, $scope.user2);
  	};
   }])
  .controller('FormController', ['$scope', function($scope) {
      $scope.userType = 'guest';
  }])
  .controller('ExampleController', ['$scope', function($scope) {
       $scope.user = {name: 'guest', last: 'visitor'};
       $scope.checkboxModel = {
       	value1 : true,
       	value2 : 'YES'
      };
      $scope.color = {
        name: 'blue'
      };
      $scope.specialValue = {
        "id": "12345",
        "value": "green"
      };
     }])
   .controller('DateController', ['$scope', function($scope) {
       $scope.example = {
         value: new Date(2013, 9, 22)
       };
     }]);
/*setTimeout(function () {
	// create an injector
	var $injector = angular.injector(['ng']);

	// use the injector to kick off your application
	// use the type inference to auto inject arguments, or use implicit injection
	$injector.invoke(function($rootScope, $compile, $document) {
  		$compile($document)($rootScope);
  		$rootScope.$digest();
	});
    // now you can use the injector.
    var $div = $('<div ng-controller="formController">123</div>');
    $('body').append($div);
    angular.element(document.body).injector().invoke(function($compile) {
        var scope = angular.element($div).scope();
        $compile($div)(scope);
    });
}, 100);*/

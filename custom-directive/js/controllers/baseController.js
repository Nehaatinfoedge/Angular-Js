angular.module('baseApp')
.controller('baseController',['$scope','$rootScope',function($scope,$rootScope){
	$scope.firstName = 'Angular';
	$scope.lastName = 'AngularJs';
	$scope.fullName = 'AngularJsDirective';
	$scope.reverseFirstName = function(){
		$scope.firstName = $scope.firstName.split('').reverse().join('');
	}
	$scope.reverseLastName = function(){
		$scope.lastName = $scope.lastName.split('').reverse().join('');
	}
	$scope.reverseFullName = function(){
		$scope.fullName = $scope.fullName.split('').reverse().join('');
	}
}])

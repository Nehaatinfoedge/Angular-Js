angular.module('baseApp')
.controller('baseController',['$scope','$rootScope','$filter',function($scope,$rootScope,$filter){
	$scope.name = 'angularjs';
	$scope.newName = $filter('capitalize')('angularjs',4);
}])

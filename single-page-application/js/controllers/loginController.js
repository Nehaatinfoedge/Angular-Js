angular.module('baseApp')
.controller('loginController',['$scope','$rootScope','baseService','$location',function($scope,$rootScope,baseService,$location){
	$scope.page = {};
	$scope.page.data = {};
	$scope.signIn = function(){
		baseService.signIn($scope.page.data)
		.success(function(response){
			$location.path('/create/user');
		})
		.error(function(error){
			$location.path('/create/user');
		});
	}
}])

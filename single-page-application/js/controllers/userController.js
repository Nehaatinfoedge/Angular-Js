angular.module('baseApp')
.controller('userController',['$scope','$rootScope','baseService','$location',function($scope,$rootScope,baseService,$location){
	$scope.page = {};
	$scope.page.data = {};
	$scope.createUser = function(){
		baseService.createUser($scope.page.data)
		.success(function(response){
			$location.path('/create/list');
		})
		.error(function(error){
			$location.path('/create/list');
		});
	}
	$scope.page.data.userList = [];
	$scope.getUsers = function(){
		baseService.getUsers()
		.success(function(response){
			$scope.page.data.userList = response;
		})
		.error(function(error){
			$scope.page.data.userList = [
							  {
							    "firstname": "ajitesh",
							    "lastname": "kumar",
							    "address": "211/20-B,mgstreet",
							    "city": "hyderabad",
							    "phone": "999-888-6666"
							  },
							  {
							    "firstname": "naman",
							    "lastname": "rai",
							    "address": "201,mgstreet",
							    "city": "hyderabad",
							    "phone": "999-876-5432"
							  }
							]	
		})
	};
	$scope.display = function(user){
		if(typeof $scope.page.data.search !== 'undefined' && $scope.page.data.search !== null && $scope.page.data.search !== ''){
			$scope.page.data.highlightText = user.firstname + ' ' + user.lastname;	
		}
		
	}
}])

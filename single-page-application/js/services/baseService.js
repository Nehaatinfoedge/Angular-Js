angular.module('baseApp')
.service('baseService',['$http',function($http){
	this.signIn = function(data){
		return $http.post('/angular/login',data);
	}
	this.createUser = function(data){
		return $http.post('/angular/create',data);	
	}
	this.getUsers = function(){
		return $http.get('/angular/list');	
	}
}]);

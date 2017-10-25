angular.module('configurableModule',['ngRoute'])
.provider('configurableService',['$routeProvider',function($routeProvider){
	var config = {};
	config.title = '';
	
	this.setPageTitle = function(title){
		config.title = title;
	}
	config.initRoutes = function(){
		$routeProvider
			.when('/login',{
				templateUrl : 'views/login.html',
				controller : 'loginController'
			})
			.when('/create/user',{
				templateUrl : 'views/createUser.html',
				controller : 'userController'
			})
			.when('/create/list',{
				templateUrl : 'views/userList.html',
				controller : 'userController'
			})
			.otherwise({
				redirectTo : '/login'
			});
	}
	this.$get = ['$rootScope','$http',function($rootScope,$http){
		return config;
	}]
}]);

angular.module('baseApp',['configurableModule'])
.config(['configurableServiceProvider',function(configurableServiceProvider){
	configurableServiceProvider.setPageTitle('Angular Single Page Application')
}])
.run(['$rootScope','configurableService',function($rootScope,configurableService){
	$rootScope.title = configurableService.title;
	configurableService.initRoutes();
}])

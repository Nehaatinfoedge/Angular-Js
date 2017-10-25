angular.module('customDirectiveApp',[])
.directive('defaultScopeCustomDirective',[function(){
	var directive = {};
	directive.restrict = 'EA';
	directive.replace = false;
	directive.template = "<div> Your name 'inside directive scope' is : {{firstName}}"
						+ '<br/> <br/> Change your name : <input type = "text" ng-model = "firstName"/>';
	directive.compile =  function(element,attrs){
		return {
			post : function($scope,$element,$attrs){

			}
		}
	}
	return directive;
}])
.directive('newScopeCustomDirective',[function(){
	var directive = {};
	directive.restrict = 'EA';
	directive.replace = true;
	directive.scope = true;
	directive.template = "<div> Your name 'inside directive scope' is : {{lastName}}"
						+ '<br/> <br/> Change your name : <input type = "text" ng-model = "lastName"/>';
	directive.compile =  function(element,attrs){
		return {
			post : function($scope,$element,$attrs){

			}
		}
	}
	return directive;
}])

.directive('isolatedScopeCustomDirective',[function(){
	var directive = {};
	directive.restrict = 'EA';
	directive.replace = true;
	directive.scope = {};
	directive.template = "<div> Your name 'inside directive scope' is : {{fullName}}"
						+ '<br/> <br/> Change your name : <input type = "text" ng-model = "fullName"/>';
	directive.compile =  function(element,attrs){
		return {
			post : function($scope,$element,$attrs){

			}
		}
	}
	return directive;
}])

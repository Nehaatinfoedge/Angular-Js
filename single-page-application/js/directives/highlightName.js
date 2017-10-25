angular.module('baseApp')
.directive('highlightName',['$parse',function($parse){
	var config = {};
	config.restrict = 'A';
	config.scope = {
		'filterValue' : '=',
		'display' : '&'
	}
	config.compile = function($element,$attrs){
		return {
			pre : function(scope,element,attrs){
				 element.on('mouseover',function(e){
				 	if(typeof scope.filterValue !== 'undefined' && scope.filterValue !== null && scope.filterValue !== ''){
				 		element.css('color', 'red');
				 		scope.$apply(function(){
				 			scope.display();	
				 		})
				 		
				 	}
				});
				element.on('mouseout',function(e){
					element.css('color', 'black');
					scope.$apply(function(){
				 		var highlightText = $parse(attrs.highlightText);
				 		highlightText.assign(scope.$parent, null);
				 	})
				});
			}
		}

	}
	return config;
}])

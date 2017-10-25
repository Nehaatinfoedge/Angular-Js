angular.module('baseApp')
.filter('userSearch',['$filter',function($filter){
	return function(input,filterValue){
		var result = [];
		if(typeof filterValue !== 'undefined' && filterValue !== null && filterValue !== ''){
			for(var index = 0 ; index < input.length; index++){
				var fullName = input[index].firstname + ' ' + input[index].lastname;
				if(fullName.indexOf(filterValue) > -1){
					result.push(input[index]);
				}
			}
			return result;	
		}
		
		return input;
	}
}])

angular.module('baseApp')
.filter('capitalize',[function(){
	return function(input,arg){
		if(isNaN(input)){
			var charPos = arg - 1 || 0;
			var letter = input.charAt(charPos).toUpperCase();
			var result = '';
			for(var index = 0 ;index < input.length;index++){
				if(index === charPos){
					result = result + letter;
				}else{
					result = result + input.charAt(index);
				}
			}
			return result;
		}
		

		return input;
	}
}]);

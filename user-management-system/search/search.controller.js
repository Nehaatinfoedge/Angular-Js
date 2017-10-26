	angular
        .module('app') 
 	.controller('TableCtrl', ['$scope','UserService', '$rootScope', function($scope,UserService,$rootScope) {  
    	
	$scope.allItems = getDummyData(); 
      
     	$scope.resetAll = function()
     	{
         $scope.filteredList = $scope.allItems ; 
         $scope.newFirstName = '';
         $scope.newLastName = '';
         $scope.newUsername = '';
         $scope.newPassword = '';
         $scope.searchText = ''; 
     	}
     
     
     	$scope.add = function()
     	{
         $scope.allItems.push({firstName : $scope.newFirstName, lastName : $scope.newLastName, username:$scope.newUsername, password:$scope.newPassword});
         $scope.resetAll();  
     	}
     
     
    	$scope.search = function()
    	{ 
        $scope.filteredList  = _.filter($scope.allItems,
                 function(item){  
                     return searchUtil(item,$scope.searchText); 
                 });
        
        if($scope.searchText == '')
        {
            $scope.filteredList = $scope.allItems ;
        }
    	}  
    
    	$scope.resetAll();       
}]);
 
/* Search Text in all 3 fields */
function searchUtil(item,toSearch)
{
    /* Search Text in all 3 fields */
    return ( item.firstName.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.lastName.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.username.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.password.toLowerCase().indexOf(toSearch.toLowerCase()) > -1
                            )                              
                     ? true : false ;
}

/*Get Dummy Data for Example*/
function getDummyData()
{
	if(localStorage.users!=''){
		var userArray = [];
		var ls = JSON.parse(localStorage.users);
		angular.forEach(ls, function(value, key) {
  			var obj={};
			obj.firstName = value.firstName;
			obj.lastName = value.lastName;
			obj.username = value.username;
			obj.password = value.password;
			userArray.push(obj);
		});
		return userArray;
	}
	else{
    	    return [
         	{EmpId:2, name:'Jitendra', Email: 'jz@gmail.com'},
         	{EmpId:1, name:'Minal', Email: 'amz@gmail.com'},
         	{EmpId:3, name:'Rudra', Email: 'ruz@gmail.com'} 
           ];
	}
}

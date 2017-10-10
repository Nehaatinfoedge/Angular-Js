var myApp = angular.module('myApp', []);
myApp.controller('MyCtrl',function($scope){
    $scope.name = '';
    $scope.availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
        ];
});
myApp.directive('autocomplete', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<input name="autocomplete" type="text"/>',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.list, function(value) {
                element.autocomplete({
                    source: value,
                    select: function(event, ui) {
                        scope[attrs.selection] = ui.item.value;
                        scope.$apply();
                    }
                });
            });
        }
    };
});
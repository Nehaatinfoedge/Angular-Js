var app = angular.module('myApp', []);

app
.constant("carouselDefaults", { 
        placeholderUrl: "",
        speed: 3
    })
.controller("SampleController",SampleController)
.controller("carouselController", function($scope, $timeout, carouselDefaults) {
    var items, nextResult, isPaused, modelOptions;

    function doNext(){
        $scope.index = ($scope.index + 1) % items.length;
    }
    function doPrevious(){
        var candidateIndex = $scope.index -1;
        $scope.index = candidateIndex < 0 ? items.length-1 : candidateIndex;
    }
    function move(directionFn){
        if (!isPaused){
            toggle();
            directionFn();
            toggle();
        } else {
            directionFn();
        }
    }
    
    function definePublicProperties(){
        
        var index = 0;
    
        Object.defineProperty($scope, "index", {
            get: function(){
                return index;
            },
            set: function(val){
                if (val >= items.length || val < 0) {
                    index = 0;
                } else {
                    index = val;
                }
            }
        });
        
    }  
    
    function current(){
        return items[$scope.index];
    }
    
    function initialse(){
        // inputs from outside world
        modelOptions = $scope.options || {};        
        items = $scope.items || [modelOptions.defaultItem || carouselDefaults.defaultItem];
        
        // external api
        $scope.current = current;
        $scope.next = next;
        $scope.previous = previous;
        $scope.toggle = toggle;
        definePublicProperties();
        
        // start carousel
        timedNext();
    }
    
    function next(){
        move(doNext);
    }
    
    function previous(){
        move(doPrevious);
    }
    
    function timedNext() {
        if (isPaused) return;
        
        nextResult = $timeout(function() {
            doNext();
            timedNext();
        }, speed());
    }
    
    function toggle(){
        if (!isPaused) {
            $timeout.cancel(nextResult);
            isPaused = true;
        } else{
            isPaused = false;
            timedNext();
        }                
    }
    
    function speed(){
        return (modelOptions.speed || carouselDefaults.speed)  * 1000;
    }
    
    initialse();
});
app.directive("carousel", function ($timeout) {
    
    return {
        restrict: "E",
        replace: true,
        templateUrl: "carousel.url",
        controller: "carouselController",
        scope: {
            items: "=",
            options: "="
        },
        link: function(scope, elem, attrs){}
    };
});

app.directive("swipeRight", function(){
    return {
        restrict: "A",
        link: function(scope, elem, attrs){
            elem.on("click", function(e){
                //doesn't make sense to swipe when the target is a button
                if (e.target.localName === "button") return;
                
                scope.$eval(attrs.swipeRight);
                scope.$apply();
            });
        }
    };
});

function SampleController($scope) {

    init();

    function init() {
        $scope.carouselOpts = {};
        $scope.images = ["http://images2.wikia.nocookie.net/__cb20110811172434/fallingskies/images/f/fd/Totoro_normal.gif","http://images2.wikia.nocookie.net/__cb20111231185621/trigun/images/2/2b/Vash1.jpg"];
    }
}

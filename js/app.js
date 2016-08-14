angular.module('app', [])

.controller("appCtrl", ['$scope',function($scope) {
}])

.directive("toggleAnswer", function() {
  return {
    restrict: 'A',
    scope:{
      isOpen: "=toggleAnswer"
    },
    link: function(scope, element, attrs) {
      var slideDuration = parseInt(attrs.slideToggleDuration, 10) || 300;
      if (attrs.startShown === false) {
        element.hide();
      }
      scope.$watch('isOpen', function(newVal,oldVal){
        if(newVal !== oldVal){
          element.stop().slideToggle(slideDuration);
        }
      });
    }
  };
})
;
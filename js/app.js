angular.module('app', ['ngSanitize'])

.controller("appCtrl", ['$scope', 'questionAnswer', function($scope, questionAnswer) {
  $scope.listQuestions = questionAnswer.list;
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
.constant("questionAnswer", {
  list: [
    {
      question: "What is Javascript ?",
      answer: "Javascript is a client-side scripting language that can be inserted into HTML pages and is understood by web browsers."
    },
    {
      question: "What are JavaScript types ?",
      answer: "<strong>Following are the JavaScript types:</strong><ul><li>Number</li><li>String</li><li>Boolean</li><li>Function</li><li>Object</li><li>Null</li><li>Undefined</li></ul>"
    },
    {
      question: "What is the use of isNaN function ?",
      answer: "isNaN function returns true if the argement is not a number otherwise it is false."
    }
  ]

})
;
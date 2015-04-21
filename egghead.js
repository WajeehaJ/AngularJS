/**
 * Created by wajeehajaved on 4/21/15.
 */
var egghead = angular.module("egghead", []);

egghead.controller("AppCtrl", function() {
    var app= this;
    app.message  = "Hello";
})
//Element Directive
egghead.directive("myFirstDirective", function() {
    return function (scope, element, attr) {
        element.text(scope.app.message + ' ' + attr.message);
    }
})

//Angular behavior directives

egghead.directive("enter", function() {
    return function(scope, element, attr) {
        element.bind("mouseenter", function() {
            element.addClass(attr.enter)
        })
    }
})

egghead.directive("flash", function() {
    return {

        restrict:"A",
        link: function() { alert("I'm faster")}
    }
})


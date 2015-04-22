/**
 * Created by wajeehajaved on 4/22/15.
 */
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.user = 'Wajeeha Javed';
    $scope.email = 'wajeeha.javed@arbisoft.com';
    $scope.submitted = false;
    $scope.myForm = function() {
    if ($scope.myForm.$valid) {
      // Submit as normal
    } else {
      $scope.myForm.submitted = true;
    }
  }
});
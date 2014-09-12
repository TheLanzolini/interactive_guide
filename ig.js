// Angular app and controllers; do not touch if you dont know angularjs and js
var app = angular.module('igApp', []);
app.controller('igController', ['$scope', '$http', function($scope, $http){

  //when server is running we can get the info
  $http.get('ig-condig.json').then(function(data){
    console.log("ig-config:", data);
  });

  $http.get('champion-lib.json').then(function(data){
    console.log("champion-lib:", data);
  });


}]);

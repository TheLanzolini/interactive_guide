// Angular app and controllers; do not touch if you dont know angularjs and js
console.log(notes);
var app = angular.module('igApp', []);
app.controller('igController', ['$scope', function($scope){
  $scope.patch = patch;
  $scope.summonerSpells = {
    "flash": {
      "name": "Flash"
      ,"imageSrc": "http://placehold.it/50x50"
    }
    ,"ignite": {
      "name": "Ignite"
      ,"imageSrc": "http://placehold.it/50x50"
    }
  };
  $scope.author = {
    name: "TheLanzolini"
    ,website: "twitch.tv/thelanzolini"
  };
  $scope.champions = {
    "caitlyn": {
      "name": "Caitlyn"
      ,"title": "The Sheriff of Piltover"
      ,"baseHp": 390
      ,"baseMp": 255
      ,"hp5": "4.75"
      ,"mp5": "6.5"
      ,"hplvl": 80
      ,"mplvl": 35
      ,"poke": 10
      ,"burst": 6
      ,"mobility": 6
      ,"seige": 10
      ,"laning": 10
      ,"teamfight": 8
    }
  };
  $scope.champion = $scope.champions[champion];
  $scope.summonerSpellOne = $scope.summonerSpells[summonerSpellOne];
  $scope.summonerSpellTwo = $scope.summonerSpells[summonerSpellTwo];
  console.log($scope.summonerSpells);
}]);
console.log(app);

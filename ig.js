// Angular app and controllers; do not touch if you dont know angularjs and js
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
      "name": "caitlyn"
      ,"title": "The Sheriff of Piltover"
      ,"baseHp": 390
      ,"baseMp": 255
      ,"hp5": "4.75"
      ,"mp5": "6.5"
      ,"hplvl": 80
      ,"mplvl": 35
      ,"champattrs": champattrs
    }
    ,"thresh": {
      "name": "thresh"
      ,"title": "The Chain Warden"
      ,"baseHp": 411
      ,"baseMp": 200
      ,"hp5": "6"
      ,"mp5": "5"
      ,"hplvl": 89
      ,"mplvl": 44
      ,"champattrs": champattrs
    }
  };
  $scope.runes = runes;
  console.log($scope.runes);
  $scope.champion = $scope.champions[champion];
  $scope.summonerSpellOne = $scope.summonerSpells[summonerSpellOne];
  $scope.summonerSpellTwo = $scope.summonerSpells[summonerSpellTwo];
  console.log($scope.champions);
}]);

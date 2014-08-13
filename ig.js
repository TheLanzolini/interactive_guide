// This is the interactive guide
// MIT Licence
// Github repo:
// Author: Alex Lanzoni
// Email: thelanzolini@gmail.com
// League tag: NA/EUW: TheLanzolini

// |====================================|
// | SET THESE OPTIONS. LOWER CASE ONLY |
// |====================================|

var patch = "4.13"


var authorName = "thelanzolini";
var authorWebsite = "twitch.tv/thelanzolini";
var showRankedInfo = false;

var champion = "caitlyn";
var summonerSpellOne = "flash";
var summonerSpellTwo = "ignite";
var marks = 1;
var seals = 1;
var glyphs = 1;
var quints = 1;
var offense = [1, 2, 4, 1, 0, 3, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 3, 1, 1];
var defense = [2, 0, 0, 2, 0, 3, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var utility = null;
var tipsNtricks = "Heres a tip, and a Donger behind it!";
var notes = {
  note1: "Play Corki"
  ,note2: "Buy Trinity Force"
  ,note3: "Do tons of Damage"
};
var skillOrder = [0, 2, 0, 1, 0, 3, 0, 2, 0, 2, 3, 2, 2, 1, 1, 3, 1, 1];

// Angular app and controllers; do not touch if you dont know angularjs and js
var app = angular.module('igApp', []);
app.controller('igController', ['$scope', function($scope){
  $scope.patch = patch;
  $scope.summonerSpells = {
    "flash": {
      "name": "Flash"
      ,"imageSrc": "images/summoner/spells/flash.jpg"
    }
    ,"ignite": {
      "name": "Ignite"
      ,"imageSrc": "images/summoner/spells/ignite.jpg"
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

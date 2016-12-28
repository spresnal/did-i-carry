'use strict';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import './league.html';
 
class LeagueCtrl {
    constructor($scope) {
        var ctrl = this;

        ctrl.region = 'na';
        ctrl.regions = ['br', 'eune', 'euw', 'jp', 'kr', 'lan', 'las', 'na', 'oce', 'ru', 'tr'];

        //temporary
        ctrl.summonerName = 'Firebun';
        
        ctrl.didICarryLastGame = function() {
            Meteor.call('didICarryLastGame', {summonerName:ctrl.summonerName}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.updateSummonerRegion = function() {
            Meteor.call('updateSummonerRegion', ctrl.region);
        };
    }
}
 
export default angular.module('league', [
  angularMeteor
])
  .component('league', {
      templateUrl: 'imports/components/league/league.html',
      controller: ['$scope', LeagueCtrl]
  });
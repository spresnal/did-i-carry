'use strict';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import league from '../imports/components/league/league';
 
angular.module('meteor-angular-lol', [
  angularMeteor,
  league.name
]);
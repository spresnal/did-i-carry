


//3. get data for most recent match
//4. check match data versus neural net

'use strict';

Meteor.methods({
    didICarryLastGame: function (v) {
        this.unblock();
        console.log(v.summonerName);
        Meteor.call('getSummonersByNames', {summonerNames: v.summonerName}, function(error, results) {
            //1. convert league name into id
            var summonerId = results.data[v.summonerName.toLowerCase()].id;

            Meteor.call('getMatchListBySummonerId', {summonerId: summonerId, optionalParams:{beginIndex:0, endIndex:1}}, function(error, results) {
                //2. use league id to get most recent match
                var matchId = results.data.matches[0].matchId;
            });
        });
    }
});
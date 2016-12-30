


//4. check match data versus neural net

'use strict';

Meteor.methods({
    didICarryLastGame: function (v) {
        this.unblock();

        //1. convert league name into id
        Meteor.call('getSummonersByNames', {summonerNames: v.summonerName}, function(error, results) {
            var summonerId = results.data[v.summonerName.toLowerCase()].id;

            //2. use league id to get most recent match
            Meteor.call('getMatchListBySummonerId', {summonerId: summonerId, optionalParams:{beginIndex:0, endIndex:1}}, function(error, results) {
                var matchId = results.data.matches[0].matchId;

                //3. get data for most recent match
                Meteor.call('getMatchById', {matchId: matchId}, function(error, results){
                    console.log(results);
                });
            });
        });
    }
});
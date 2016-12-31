matchTransformer = (function() { 
    'use strict';   
    var expose = {};

    var gameTotals;

    expose.transform = function(matchData){
        var matchResults = [];
        gameTotals = getEmptyGameTotals();

        matchData.participants.forEach( function (participant){
            appendStats(participant.stats);
        });

        matchData.participants.forEach( function (participant){
            matchResults.push({
                input: normalizeInput(participant.stats),
                output: [participant.stats.winner ? 1 : 0]
            });
        });

        return matchResults;
    };

    var normalizeInput = function(stats){
        return [
            stats.kills/gameTotals.kills,
            stats.deaths/gameTotals.deaths,
            stats.assists/gameTotals.assists,
            stats.totalDamageDealt/gameTotals.totalDamageDealt,
            stats.totalDamageDealtToChampions/gameTotals.totalDamageDealtToChampions,
            stats.totalDamageTaken/gameTotals.totalDamageTaken,
            stats.goldSpent/gameTotals.goldSpent
        ];
    }

    var appendStats = function(stats){
        gameTotals.kills += stats.kills;
        gameTotals.deaths += stats.deaths;
        gameTotals.assists += stats.assists;
        gameTotals.totalDamageDealt += stats.totalDamageDealt;
        gameTotals.totalDamageDealtToChampions += stats.totalDamageDealtToChampions;
        gameTotals.totalDamageTaken += stats.totalDamageTaken;
        gameTotals.goldSpent += stats.goldSpent;
    };
    
    var getEmptyGameTotals = function(){
        return {
            kills: 0,
            deaths: 0,
            assists: 0,
            totalDamageDealt: 0,
            totalDamageDealtToChampions: 0,
            totalDamageTaken: 0,
            goldSpent: 0
        };
    };
    
    return expose;
}());
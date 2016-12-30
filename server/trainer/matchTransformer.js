matchTransformer = (function() { 
    'use strict';   
    var expose = {};

    var team100,
        team200;

    expose.transform = function(matchData){
        var matchResults = [];
        team100 = getEmptyTeamTotals();
        team200 = getEmptyTeamTotals();


        matchData.participants.forEach( function (participant){
            appendStatsToTeam(participant);
        });

        matchData.participants.forEach( function (participant){
            var team = getParticipantTeam(participant);
            matchResults.push({
                input: getParticipantInput(participant, team),
                output: [team.winner]
            });
        });

        console.log(matchResults);
        return matchResults;
    };

    var getParticipantInput = function(participant, team){
        var stats = participant.stats;
        return [
            stats.kills/team.kills,
            stats.deaths/team.deaths,
            stats.assists/team.assists,
            stats.totalDamageDealt/team.totalDamageDealt,
            stats.totalDamageDealtToChampions/team.totalDamageDealtToChampions,
            stats.totalDamageTaken/team.totalDamageTaken,
            stats.goldSpent/team.goldSpent
        ];
    }

    var getParticipantTeam = function(participant){
        return participant.teamId === 100 ? team100 : team200;
    }

    var appendStatsToTeam = function(participant){
        var team = getParticipantTeam(participant);
        appendStats(team, participant.stats);
    };

    var appendStats = function(team, stats){
        team.winner = stats.winner ? 1 : 0;
        team.kills += stats.kills;
        team.deaths += stats.deaths;
        team.assists += stats.assists;
        team.totalDamageDealt += stats.totalDamageDealt;
        team.totalDamageDealtToChampions += stats.totalDamageDealtToChampions;
        team.totalDamageTaken += stats.totalDamageTaken;
        team.goldSpent += stats.goldSpent;
    };
    
    var getEmptyTeamTotals = function(){
        return {
            winner: 0,
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
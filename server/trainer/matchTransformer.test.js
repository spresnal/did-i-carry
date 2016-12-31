'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { Mongo } from 'meteor/mongo';

import '/server/trainer/matchTransformer.js';

describe('matchTransformer', function () {
    var matchData = {
        matchId: 2054994244,
        region: "NA",
        platformId: "NA1",
        matchMode: "CLASSIC",
        matchType: "MATCHED_GAME",
        matchCreation: 1451603074200,
        matchDuration: 3067,
        queueType: "RANKED_SOLO_5x5",
        mapId: 11,
        season: "PRESEASON2016",
        matchVersion: "5.24.0.256",
        participants: [
            {
                teamId: 100,
                spell1Id: 4,
                spell2Id: 7,
                championId: 236,
                highestAchievedSeasonTier: "UNRANKED",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 5.7,
                        tenToTwenty: 4.9,
                        twentyToThirty: 3.5,
                        thirtyToEnd: 3.8
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 373.1,
                        tenToTwenty: 384.20000000000005,
                        twentyToThirty: 355,
                        thirtyToEnd: 550.15
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 210.3,
                        tenToTwenty: 330.4,
                        twentyToThirty: 294.9,
                        thirtyToEnd: 446.8
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 252.5,
                        tenToTwenty: 753.4,
                        twentyToThirty: 948.6,
                        thirtyToEnd: 1250.2000000000003
                    },
                    role: "SOLO",
                    lane: "BOTTOM"
                },
                masteries: [
                    {
                        masteryId: 6111,
                        rank: 5
                    },
                    {
                        masteryId: 6122,
                        rank: 1
                    },
                    {
                        masteryId: 6131,
                        rank: 5
                    },
                    {
                        masteryId: 6141,
                        rank: 1
                    },
                    {
                        masteryId: 6151,
                        rank: 5
                    },
                    {
                        masteryId: 6161,
                        rank: 1
                    },
                    {
                        masteryId: 6312,
                        rank: 5
                    },
                    {
                        masteryId: 6322,
                        rank: 1
                    },
                    {
                        masteryId: 6331,
                        rank: 5
                    },
                    {
                        masteryId: 6343,
                        rank: 1
                    }
                ],
                stats: {
                    winner: false,
                    champLevel: 18,
                    item0: 3034,
                    item1: 3031,
                    item2: 3139,
                    item3: 1301,
                    item4: 3508,
                    item5: 3026,
                    item6: 3363,
                    kills: 6,
                    doubleKills: 1,
                    tripleKills: 1,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 4,
                    deaths: 13,
                    assists: 16,
                    totalDamageDealt: 278697,
                    totalDamageDealtToChampions: 41886,
                    totalDamageTaken: 47802,
                    largestCriticalStrike: 1138,
                    totalHeal: 7118,
                    minionsKilled: 217,
                    neutralMinionsKilled: 46,
                    neutralMinionsKilledTeamJungle: 32,
                    neutralMinionsKilledEnemyJungle: 14,
                    goldEarned: 17977,
                    goldSpent: 17550,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 3445,
                    physicalDamageDealtToChampions: 37598,
                    trueDamageDealtToChampions: 841,
                    visionWardsBoughtInGame: 0,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 12664,
                    physicalDamageDealt: 263863,
                    trueDamageDealt: 2169,
                    magicDamageTaken: 16501,
                    physicalDamageTaken: 29673,
                    trueDamageTaken: 1628,
                    firstBloodKill: false,
                    firstBloodAssist: false,
                    firstTowerKill: false,
                    firstTowerAssist: false,
                    firstInhibitorKill: false,
                    firstInhibitorAssist: false,
                    inhibitorKills: 0,
                    towerKills: 1,
                    wardsPlaced: 20,
                    wardsKilled: 1,
                    largestMultiKill: 3,
                    killingSprees: 1,
                    totalUnitsHealed: 3,
                    totalTimeCrowdControlDealt: 184
                },
                participantId: 1,
                runes: [
                    {
                        runeId: 5245,
                        rank: 9
                    },
                    {
                        runeId: 5289,
                        rank: 9
                    },
                    {
                        runeId: 5317,
                        rank: 9
                    },
                    {
                        runeId: 5337,
                        rank: 3
                    }
                ]
            },
            {
                teamId: 100,
                spell1Id: 14,
                spell2Id: 4,
                championId: 40,
                highestAchievedSeasonTier: "SILVER",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 0,
                        tenToTwenty: 0.7,
                        twentyToThirty: 1.1,
                        thirtyToEnd: 0.8999999999999999
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 0,
                        tenToTwenty: 414.4,
                        twentyToThirty: 377.4,
                        thirtyToEnd: 558.65
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 98,
                        tenToTwenty: 264.5,
                        twentyToThirty: 340.6,
                        thirtyToEnd: 373.2
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 0,
                        tenToTwenty: 592.3,
                        twentyToThirty: 681.6,
                        thirtyToEnd: 1209.6
                    },
                    role: "NONE",
                    lane: "JUNGLE"
                },
                masteries: [
                    {
                        masteryId: 6212,
                        rank: 5
                    },
                    {
                        masteryId: 6221,
                        rank: 1
                    },
                    {
                        masteryId: 6232,
                        rank: 5
                    },
                    {
                        masteryId: 6241,
                        rank: 1
                    },
                    {
                        masteryId: 6311,
                        rank: 5
                    },
                    {
                        masteryId: 6322,
                        rank: 1
                    },
                    {
                        masteryId: 6332,
                        rank: 5
                    },
                    {
                        masteryId: 6343,
                        rank: 1
                    },
                    {
                        masteryId: 6352,
                        rank: 5
                    },
                    {
                        masteryId: 6363,
                        rank: 1
                    }
                ],
                stats: {
                    winner: false,
                    champLevel: 18,
                    item0: 1327,
                    item1: 2045,
                    item2: 3092,
                    item3: 3110,
                    item4: 3050,
                    item5: 3190,
                    item6: 3364,
                    kills: 4,
                    doubleKills: 0,
                    tripleKills: 0,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 0,
                    deaths: 12,
                    assists: 21,
                    totalDamageDealt: 48419,
                    totalDamageDealtToChampions: 12942,
                    totalDamageTaken: 36931,
                    largestCriticalStrike: 0,
                    totalHeal: 10832,
                    minionsKilled: 36,
                    neutralMinionsKilled: 1,
                    neutralMinionsKilledTeamJungle: 1,
                    neutralMinionsKilledEnemyJungle: 0,
                    goldEarned: 15200,
                    goldSpent: 13075,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 10175,
                    physicalDamageDealtToChampions: 1861,
                    trueDamageDealtToChampions: 906,
                    visionWardsBoughtInGame: 1,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 39822,
                    physicalDamageDealt: 7474,
                    trueDamageDealt: 1122,
                    magicDamageTaken: 19724,
                    physicalDamageTaken: 14986,
                    trueDamageTaken: 2219,
                    firstBloodKill: false,
                    firstBloodAssist: false,
                    firstTowerKill: false,
                    firstTowerAssist: false,
                    firstInhibitorKill: false,
                    firstInhibitorAssist: false,
                    inhibitorKills: 0,
                    towerKills: 1,
                    wardsPlaced: 25,
                    wardsKilled: 2,
                    largestMultiKill: 1,
                    killingSprees: 0,
                    totalUnitsHealed: 12,
                    totalTimeCrowdControlDealt: 2769
                },
                participantId: 2,
                runes: [
                    {
                        runeId: 5271,
                        rank: 9
                    },
                    {
                        runeId: 5298,
                        rank: 9
                    },
                    {
                        runeId: 5316,
                        rank: 9
                    },
                    {
                        runeId: 5357,
                        rank: 3
                    }
                ]
            },
            {
                teamId: 100,
                spell1Id: 12,
                spell2Id: 4,
                championId: 75,
                highestAchievedSeasonTier: "SILVER",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 4.9,
                        tenToTwenty: 8,
                        twentyToThirty: 6.2,
                        thirtyToEnd: 7.699999999999999
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 380.5,
                        tenToTwenty: 615.7,
                        twentyToThirty: 566.2,
                        thirtyToEnd: 818.55
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 213.39999999999998,
                        tenToTwenty: 409.6,
                        twentyToThirty: 437,
                        thirtyToEnd: 584.95
                    },
                    csDiffPerMinDeltas: {
                        zeroToTen: -0.7000000000000002,
                        tenToTwenty: 0.20000000000000018,
                        twentyToThirty: 0.20000000000000062,
                        thirtyToEnd: 2.4000000000000004
                    },
                    xpDiffPerMinDeltas: {
                        zeroToTen: -70.30000000000001,
                        tenToTwenty: 166.5,
                        twentyToThirty: 110.80000000000001,
                        thirtyToEnd: 338.35
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 591,
                        tenToTwenty: 901.5,
                        twentyToThirty: 1136,
                        thirtyToEnd: 1474.8
                    },
                    damageTakenDiffPerMinDeltas: {
                        zeroToTen: 221.40000000000003,
                        tenToTwenty: 56.599999999999966,
                        twentyToThirty: 70.10000000000002,
                        thirtyToEnd: 496.6499999999999
                    },
                    role: "SOLO",
                    lane: "TOP"
                },
                masteries: [
                    {
                        masteryId: 6212,
                        rank: 5
                    },
                    {
                        masteryId: 6221,
                        rank: 1
                    },
                    {
                        masteryId: 6231,
                        rank: 5
                    },
                    {
                        masteryId: 6242,
                        rank: 1
                    },
                    {
                        masteryId: 6311,
                        rank: 5
                    },
                    {
                        masteryId: 6323,
                        rank: 1
                    },
                    {
                        masteryId: 6332,
                        rank: 5
                    },
                    {
                        masteryId: 6343,
                        rank: 1
                    },
                    {
                        masteryId: 6352,
                        rank: 5
                    },
                    {
                        masteryId: 6362,
                        rank: 1
                    }
                ],
                stats: {
                    winner: false,
                    champLevel: 18,
                    item0: 3110,
                    item1: 3111,
                    item2: 3025,
                    item3: 3065,
                    item4: 3026,
                    item5: 3075,
                    item6: 3340,
                    kills: 16,
                    doubleKills: 2,
                    tripleKills: 0,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 11,
                    deaths: 7,
                    assists: 11,
                    totalDamageDealt: 374742,
                    totalDamageDealtToChampions: 52577,
                    totalDamageTaken: 59963,
                    largestCriticalStrike: 0,
                    totalHeal: 3602,
                    minionsKilled: 345,
                    neutralMinionsKilled: 14,
                    neutralMinionsKilledTeamJungle: 13,
                    neutralMinionsKilledEnemyJungle: 1,
                    goldEarned: 22984,
                    goldSpent: 18800,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 19192,
                    physicalDamageDealtToChampions: 31946,
                    trueDamageDealtToChampions: 1439,
                    visionWardsBoughtInGame: 0,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 87493,
                    physicalDamageDealt: 284501,
                    trueDamageDealt: 2747,
                    magicDamageTaken: 19368,
                    physicalDamageTaken: 35489,
                    trueDamageTaken: 5105,
                    firstBloodKill: false,
                    firstBloodAssist: false,
                    firstTowerKill: false,
                    firstTowerAssist: false,
                    firstInhibitorKill: false,
                    firstInhibitorAssist: false,
                    inhibitorKills: 0,
                    towerKills: 2,
                    wardsPlaced: 6,
                    wardsKilled: 0,
                    largestMultiKill: 2,
                    killingSprees: 3,
                    totalUnitsHealed: 1,
                    totalTimeCrowdControlDealt: 5857
                },
                participantId: 3,
                runes: [
                    {
                        runeId: 5245,
                        rank: 9
                    },
                    {
                        runeId: 5289,
                        rank: 9
                    },
                    {
                        runeId: 5317,
                        rank: 9
                    },
                    {
                        runeId: 5335,
                        rank: 3
                    }
                ]
            },
            {
                teamId: 100,
                spell1Id: 11,
                spell2Id: 4,
                championId: 32,
                highestAchievedSeasonTier: "SILVER",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 1.1,
                        tenToTwenty: 1.5,
                        twentyToThirty: 3,
                        thirtyToEnd: 2.2
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 232.5,
                        tenToTwenty: 531,
                        twentyToThirty: 432.3,
                        thirtyToEnd: 546.2
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 172.8,
                        tenToTwenty: 353.8,
                        twentyToThirty: 304.5,
                        thirtyToEnd: 400.54999999999995
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 514.5,
                        tenToTwenty: 883.2,
                        twentyToThirty: 1006.9,
                        thirtyToEnd: 1375.75
                    },
                    role: "NONE",
                    lane: "JUNGLE"
                },
                masteries: [ ],
                stats: {
                    winner: false,
                    champLevel: 18,
                    item0: 1401,
                    item1: 3157,
                    item2: 3800,
                    item3: 3742,
                    item4: 1316,
                    item5: 3075,
                    item6: 3340,
                    kills: 6,
                    doubleKills: 1,
                    tripleKills: 0,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 2,
                    deaths: 15,
                    assists: 18,
                    totalDamageDealt: 205243,
                    totalDamageDealtToChampions: 35431,
                    totalDamageTaken: 54597,
                    largestCriticalStrike: 0,
                    totalHeal: 5237,
                    minionsKilled: 101,
                    neutralMinionsKilled: 67,
                    neutralMinionsKilledTeamJungle: 67,
                    neutralMinionsKilledEnemyJungle: 0,
                    goldEarned: 17078,
                    goldSpent: 15575,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 29929,
                    physicalDamageDealtToChampions: 2690,
                    trueDamageDealtToChampions: 2810,
                    visionWardsBoughtInGame: 0,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 163835,
                    physicalDamageDealt: 28401,
                    trueDamageDealt: 13006,
                    magicDamageTaken: 20785,
                    physicalDamageTaken: 27332,
                    trueDamageTaken: 6479,
                    firstBloodKill: false,
                    firstBloodAssist: false,
                    firstTowerKill: false,
                    firstTowerAssist: false,
                    firstInhibitorKill: false,
                    firstInhibitorAssist: false,
                    inhibitorKills: 0,
                    towerKills: 1,
                    wardsPlaced: 20,
                    wardsKilled: 0,
                    largestMultiKill: 2,
                    killingSprees: 2,
                    totalUnitsHealed: 1,
                    totalTimeCrowdControlDealt: 286
                },
                participantId: 4,
                runes: [
                    {
                        runeId: 5289,
                        rank: 9
                    },
                    {
                        runeId: 5317,
                        rank: 9
                    },
                    {
                        runeId: 5357,
                        rank: 3
                    },
                    {
                        runeId: 5402,
                        rank: 9
                    }
                ]
            },
            {
                teamId: 100,
                spell1Id: 4,
                spell2Id: 12,
                championId: 98,
                highestAchievedSeasonTier: "SILVER",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 3.4,
                        tenToTwenty: 2.5,
                        twentyToThirty: 2.2,
                        thirtyToEnd: 3.05
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 347.3,
                        tenToTwenty: 448.5,
                        twentyToThirty: 410.20000000000005,
                        thirtyToEnd: 436.29999999999995
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 195.8,
                        tenToTwenty: 302.6,
                        twentyToThirty: 369.5,
                        thirtyToEnd: 387.25
                    },
                    csDiffPerMinDeltas: {
                        zeroToTen: -2.2,
                        tenToTwenty: -2.5,
                        twentyToThirty: -1.3,
                        thirtyToEnd: -1.7000000000000002
                    },
                    xpDiffPerMinDeltas: {
                        zeroToTen: -122.39999999999998,
                        tenToTwenty: 97.70000000000002,
                        twentyToThirty: 21.00000000000003,
                        thirtyToEnd: -130.24999999999997
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 476.1,
                        tenToTwenty: 860.6999999999999,
                        twentyToThirty: 1569.8,
                        thirtyToEnd: 1570.0500000000002
                    },
                    damageTakenDiffPerMinDeltas: {
                        zeroToTen: 219.60000000000002,
                        tenToTwenty: 338.49999999999994,
                        twentyToThirty: 812.7,
                        thirtyToEnd: 385.70000000000005
                    },
                    role: "SOLO",
                    lane: "MIDDLE"
                },
                masteries: [
                    {
                        masteryId: 6111,
                        rank: 5
                    },
                    {
                        masteryId: 6121,
                        rank: 1
                    },
                    {
                        masteryId: 6134,
                        rank: 5
                    },
                    {
                        masteryId: 6142,
                        rank: 1
                    },
                    {
                        masteryId: 6312,
                        rank: 5
                    },
                    {
                        masteryId: 6322,
                        rank: 1
                    },
                    {
                        masteryId: 6331,
                        rank: 5
                    },
                    {
                        masteryId: 6343,
                        rank: 1
                    },
                    {
                        masteryId: 6352,
                        rank: 5
                    },
                    {
                        masteryId: 6362,
                        rank: 1
                    }
                ],
                stats: {
                    winner: false,
                    champLevel: 18,
                    item0: 1054,
                    item1: 3065,
                    item2: 3047,
                    item3: 3078,
                    item4: 3068,
                    item5: 3748,
                    item6: 3340,
                    kills: 13,
                    doubleKills: 0,
                    tripleKills: 0,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 3,
                    deaths: 17,
                    assists: 14,
                    totalDamageDealt: 133260,
                    totalDamageDealtToChampions: 28745,
                    totalDamageTaken: 63728,
                    largestCriticalStrike: 487,
                    totalHeal: 1821,
                    minionsKilled: 148,
                    neutralMinionsKilled: 1,
                    neutralMinionsKilledTeamJungle: 1,
                    neutralMinionsKilledEnemyJungle: 0,
                    goldEarned: 17530,
                    goldSpent: 14800,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 19830,
                    physicalDamageDealtToChampions: 8610,
                    trueDamageDealtToChampions: 303,
                    visionWardsBoughtInGame: 0,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 62237,
                    physicalDamageDealt: 69932,
                    trueDamageDealt: 1091,
                    magicDamageTaken: 21544,
                    physicalDamageTaken: 35571,
                    trueDamageTaken: 6612,
                    firstBloodKill: false,
                    firstBloodAssist: false,
                    firstTowerKill: false,
                    firstTowerAssist: false,
                    firstInhibitorKill: false,
                    firstInhibitorAssist: false,
                    inhibitorKills: 0,
                    towerKills: 0,
                    wardsPlaced: 3,
                    wardsKilled: 0,
                    largestMultiKill: 1,
                    killingSprees: 3,
                    totalUnitsHealed: 1,
                    totalTimeCrowdControlDealt: 211
                },
                participantId: 5,
                runes: [
                    {
                        runeId: 5245,
                        rank: 9
                    },
                    {
                        runeId: 5289,
                        rank: 9
                    },
                    {
                        runeId: 5317,
                        rank: 9
                    },
                    {
                        runeId: 5347,
                        rank: 3
                    }
                ]
            },
            {
                teamId: 200,
                spell1Id: 14,
                spell2Id: 4,
                championId: 85,
                highestAchievedSeasonTier: "SILVER",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 5.6,
                        tenToTwenty: 5,
                        twentyToThirty: 3.5,
                        thirtyToEnd: 4.75
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 469.7,
                        tenToTwenty: 350.79999999999995,
                        twentyToThirty: 389.2,
                        thirtyToEnd: 566.55
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 285.3,
                        tenToTwenty: 308.8,
                        twentyToThirty: 296.5,
                        thirtyToEnd: 478.6
                    },
                    csDiffPerMinDeltas: {
                        zeroToTen: 2.2,
                        tenToTwenty: 2.5,
                        twentyToThirty: 1.3,
                        thirtyToEnd: 1.7000000000000002
                    },
                    xpDiffPerMinDeltas: {
                        zeroToTen: 122.39999999999998,
                        tenToTwenty: -97.70000000000002,
                        twentyToThirty: -21.00000000000003,
                        thirtyToEnd: 130.24999999999997
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 256.5,
                        tenToTwenty: 522.2,
                        twentyToThirty: 757.0999999999999,
                        thirtyToEnd: 1184.35
                    },
                    damageTakenDiffPerMinDeltas: {
                        zeroToTen: -219.60000000000002,
                        tenToTwenty: -338.49999999999994,
                        twentyToThirty: -812.7,
                        thirtyToEnd: -385.70000000000005
                    },
                    role: "SOLO",
                    lane: "MIDDLE"
                },
                masteries: [
                    {
                        masteryId: 6114,
                        rank: 5
                    },
                    {
                        masteryId: 6121,
                        rank: 1
                    },
                    {
                        masteryId: 6134,
                        rank: 5
                    },
                    {
                        masteryId: 6142,
                        rank: 1
                    },
                    {
                        masteryId: 6312,
                        rank: 5
                    },
                    {
                        masteryId: 6323,
                        rank: 1
                    },
                    {
                        masteryId: 6331,
                        rank: 5
                    },
                    {
                        masteryId: 6343,
                        rank: 1
                    },
                    {
                        masteryId: 6351,
                        rank: 5
                    },
                    {
                        masteryId: 6362,
                        rank: 1
                    }
                ],
                stats: {
                    winner: true,
                    champLevel: 18,
                    item0: 3285,
                    item1: 3157,
                    item2: 3116,
                    item3: 3152,
                    item4: 1311,
                    item5: 3089,
                    item6: 3340,
                    kills: 9,
                    doubleKills: 0,
                    tripleKills: 0,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 4,
                    deaths: 7,
                    assists: 12,
                    totalDamageDealt: 259000,
                    totalDamageDealtToChampions: 58365,
                    totalDamageTaken: 39788,
                    largestCriticalStrike: 0,
                    totalHeal: 10946,
                    minionsKilled: 245,
                    neutralMinionsKilled: 15,
                    neutralMinionsKilledTeamJungle: 7,
                    neutralMinionsKilledEnemyJungle: 8,
                    goldEarned: 19457,
                    goldSpent: 19225,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 53242,
                    physicalDamageDealtToChampions: 3476,
                    trueDamageDealtToChampions: 1646,
                    visionWardsBoughtInGame: 1,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 209633,
                    physicalDamageDealt: 47148,
                    trueDamageDealt: 2218,
                    magicDamageTaken: 17972,
                    physicalDamageTaken: 20738,
                    trueDamageTaken: 1076,
                    firstBloodKill: true,
                    firstBloodAssist: false,
                    firstTowerKill: false,
                    firstTowerAssist: true,
                    firstInhibitorKill: false,
                    firstInhibitorAssist: false,
                    inhibitorKills: 0,
                    towerKills: 1,
                    wardsPlaced: 14,
                    wardsKilled: 1,
                    largestMultiKill: 1,
                    killingSprees: 3,
                    totalUnitsHealed: 1,
                    totalTimeCrowdControlDealt: 1604
                },
                participantId: 6,
                runes: [
                    {
                        runeId: 5273,
                        rank: 9
                    },
                    {
                        runeId: 5289,
                        rank: 9
                    },
                    {
                        runeId: 5317,
                        rank: 9
                    },
                    {
                        runeId: 5357,
                        rank: 3
                    }
                ]
            },
            {
                teamId: 200,
                spell1Id: 12,
                spell2Id: 4,
                championId: 157,
                highestAchievedSeasonTier: "SILVER",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 5.6,
                        tenToTwenty: 7.800000000000001,
                        twentyToThirty: 6,
                        thirtyToEnd: 5.3
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 450.8,
                        tenToTwenty: 449.2,
                        twentyToThirty: 455.4,
                        thirtyToEnd: 480.19999999999993
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 288.1,
                        tenToTwenty: 362.20000000000005,
                        twentyToThirty: 335.7,
                        thirtyToEnd: 422.35
                    },
                    csDiffPerMinDeltas: {
                        zeroToTen: 0.7000000000000002,
                        tenToTwenty: -0.20000000000000018,
                        twentyToThirty: -0.20000000000000062,
                        thirtyToEnd: -2.4000000000000004
                    },
                    xpDiffPerMinDeltas: {
                        zeroToTen: 70.30000000000001,
                        tenToTwenty: -166.5,
                        twentyToThirty: -110.80000000000001,
                        thirtyToEnd: -338.35
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 369.6,
                        tenToTwenty: 844.9,
                        twentyToThirty: 1065.9,
                        thirtyToEnd: 978.1500000000001
                    },
                    damageTakenDiffPerMinDeltas: {
                        zeroToTen: -221.40000000000003,
                        tenToTwenty: -56.599999999999966,
                        twentyToThirty: -70.10000000000002,
                        thirtyToEnd: -496.6499999999999
                    },
                    role: "SOLO",
                    lane: "TOP"
                },
                masteries: [
                    {
                        masteryId: 6111,
                        rank: 5
                    },
                    {
                        masteryId: 6122,
                        rank: 1
                    },
                    {
                        masteryId: 6131,
                        rank: 5
                    },
                    {
                        masteryId: 6141,
                        rank: 1
                    },
                    {
                        masteryId: 6151,
                        rank: 5
                    },
                    {
                        masteryId: 6161,
                        rank: 1
                    },
                    {
                        masteryId: 6212,
                        rank: 5
                    },
                    {
                        masteryId: 6223,
                        rank: 1
                    },
                    {
                        masteryId: 6231,
                        rank: 5
                    },
                    {
                        masteryId: 6241,
                        rank: 1
                    }
                ],
                stats: {
                    winner: true,
                    champLevel: 18,
                    item0: 3153,
                    item1: 3087,
                    item2: 3111,
                    item3: 3031,
                    item4: 3078,
                    item5: 1038,
                    item6: 3340,
                    kills: 5,
                    doubleKills: 0,
                    tripleKills: 0,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 0,
                    deaths: 14,
                    assists: 13,
                    totalDamageDealt: 323545,
                    totalDamageDealtToChampions: 31389,
                    totalDamageTaken: 44732,
                    largestCriticalStrike: 1025,
                    totalHeal: 3374,
                    minionsKilled: 307,
                    neutralMinionsKilled: 27,
                    neutralMinionsKilledTeamJungle: 19,
                    neutralMinionsKilledEnemyJungle: 8,
                    goldEarned: 19365,
                    goldSpent: 16700,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 8635,
                    physicalDamageDealtToChampions: 22754,
                    trueDamageDealtToChampions: 0,
                    visionWardsBoughtInGame: 0,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 108797,
                    physicalDamageDealt: 214603,
                    trueDamageDealt: 144,
                    magicDamageTaken: 11924,
                    physicalDamageTaken: 31638,
                    trueDamageTaken: 1170,
                    firstBloodKill: false,
                    firstBloodAssist: false,
                    firstTowerKill: false,
                    firstTowerAssist: true,
                    firstInhibitorKill: false,
                    firstInhibitorAssist: true,
                    inhibitorKills: 0,
                    towerKills: 0,
                    wardsPlaced: 15,
                    wardsKilled: 0,
                    largestMultiKill: 1,
                    killingSprees: 0,
                    totalUnitsHealed: 1,
                    totalTimeCrowdControlDealt: 223
                },
                participantId: 7,
                runes: [
                    {
                        runeId: 5245,
                        rank: 6
                    },
                    {
                        runeId: 5251,
                        rank: 3
                    },
                    {
                        runeId: 5289,
                        rank: 9
                    },
                    {
                        runeId: 5317,
                        rank: 9
                    },
                    {
                        runeId: 5337,
                        rank: 3
                    }
                ]
            },
            {
                teamId: 200,
                spell1Id: 4,
                spell2Id: 3,
                championId: 432,
                highestAchievedSeasonTier: "BRONZE",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 0.7,
                        tenToTwenty: 0,
                        twentyToThirty: 1.4000000000000001,
                        thirtyToEnd: 1.05
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 259.5,
                        tenToTwenty: 370.9,
                        twentyToThirty: 435.7,
                        thirtyToEnd: 505.75
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 184.6,
                        tenToTwenty: 295.29999999999995,
                        twentyToThirty: 278.6,
                        thirtyToEnd: 385.04999999999995
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 150.7,
                        tenToTwenty: 613.1,
                        twentyToThirty: 317,
                        thirtyToEnd: 945.2
                    },
                    role: "DUO_SUPPORT",
                    lane: "BOTTOM"
                },
                masteries: [ ],
                stats: {
                    winner: true,
                    champLevel: 18,
                    item0: 3117,
                    item1: 3110,
                    item2: 3069,
                    item3: 3102,
                    item4: 3742,
                    item5: 3083,
                    item6: 3340,
                    kills: 5,
                    doubleKills: 0,
                    tripleKills: 0,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 3,
                    deaths: 4,
                    assists: 25,
                    totalDamageDealt: 70095,
                    totalDamageDealtToChampions: 20722,
                    totalDamageTaken: 33604,
                    largestCriticalStrike: 0,
                    totalHeal: 8938,
                    minionsKilled: 42,
                    neutralMinionsKilled: 2,
                    neutralMinionsKilledTeamJungle: 1,
                    neutralMinionsKilledEnemyJungle: 1,
                    goldEarned: 16590,
                    goldSpent: 14675,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 17727,
                    physicalDamageDealtToChampions: 2994,
                    trueDamageDealtToChampions: 0,
                    visionWardsBoughtInGame: 1,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 56127,
                    physicalDamageDealt: 13968,
                    trueDamageDealt: 0,
                    magicDamageTaken: 13996,
                    physicalDamageTaken: 18212,
                    trueDamageTaken: 1396,
                    firstBloodKill: false,
                    firstBloodAssist: false,
                    firstTowerKill: false,
                    firstTowerAssist: false,
                    firstInhibitorKill: false,
                    firstInhibitorAssist: true,
                    inhibitorKills: 0,
                    towerKills: 0,
                    wardsPlaced: 22,
                    wardsKilled: 0,
                    largestMultiKill: 1,
                    killingSprees: 1,
                    totalUnitsHealed: 5,
                    totalTimeCrowdControlDealt: 2152
                },
                participantId: 8,
                runes: [
                    {
                        runeId: 5245,
                        rank: 1
                    },
                    {
                        runeId: 5273,
                        rank: 8
                    },
                    {
                        runeId: 5289,
                        rank: 9
                    },
                    {
                        runeId: 5317,
                        rank: 9
                    },
                    {
                        runeId: 5357,
                        rank: 3
                    }
                ]
            },
            {
                teamId: 200,
                spell1Id: 11,
                spell2Id: 4,
                championId: 80,
                highestAchievedSeasonTier: "SILVER",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 0.2,
                        tenToTwenty: 2.4,
                        twentyToThirty: 0.8,
                        thirtyToEnd: 1.15
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 377.40000000000003,
                        tenToTwenty: 648,
                        twentyToThirty: 507.4,
                        thirtyToEnd: 337.25
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 365.9,
                        tenToTwenty: 519.7,
                        twentyToThirty: 412.8,
                        thirtyToEnd: 400.29999999999995
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 440.5,
                        tenToTwenty: 994.9,
                        twentyToThirty: 1307.7,
                        thirtyToEnd: 1339.35
                    },
                    role: "NONE",
                    lane: "JUNGLE"
                },
                masteries: [
                    {
                        masteryId: 6111,
                        rank: 5
                    },
                    {
                        masteryId: 6121,
                        rank: 1
                    },
                    {
                        masteryId: 6134,
                        rank: 5
                    },
                    {
                        masteryId: 6141,
                        rank: 1
                    },
                    {
                        masteryId: 6312,
                        rank: 5
                    },
                    {
                        masteryId: 6321,
                        rank: 1
                    },
                    {
                        masteryId: 6331,
                        rank: 5
                    },
                    {
                        masteryId: 6343,
                        rank: 1
                    },
                    {
                        masteryId: 6351,
                        rank: 5
                    },
                    {
                        masteryId: 6362,
                        rank: 1
                    }
                ],
                stats: {
                    winner: true,
                    champLevel: 18,
                    item0: 3074,
                    item1: 1320,
                    item2: 3071,
                    item3: 1400,
                    item4: 3142,
                    item5: 3026,
                    item6: 3340,
                    kills: 28,
                    doubleKills: 4,
                    tripleKills: 0,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 6,
                    deaths: 13,
                    assists: 12,
                    totalDamageDealt: 222209,
                    totalDamageDealtToChampions: 57526,
                    totalDamageTaken: 56932,
                    largestCriticalStrike: 1586,
                    totalHeal: 9875,
                    minionsKilled: 59,
                    neutralMinionsKilled: 73,
                    neutralMinionsKilledTeamJungle: 55,
                    neutralMinionsKilledEnemyJungle: 18,
                    goldEarned: 22139,
                    goldSpent: 22875,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 10674,
                    physicalDamageDealtToChampions: 42580,
                    trueDamageDealtToChampions: 4271,
                    visionWardsBoughtInGame: 0,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 21774,
                    physicalDamageDealt: 185521,
                    trueDamageDealt: 14913,
                    magicDamageTaken: 19319,
                    physicalDamageTaken: 35478,
                    trueDamageTaken: 2134,
                    firstBloodKill: false,
                    firstBloodAssist: false,
                    firstTowerKill: true,
                    firstTowerAssist: false,
                    firstInhibitorKill: false,
                    firstInhibitorAssist: true,
                    inhibitorKills: 0,
                    towerKills: 2,
                    wardsPlaced: 9,
                    wardsKilled: 1,
                    largestMultiKill: 2,
                    killingSprees: 5,
                    totalUnitsHealed: 1,
                    totalTimeCrowdControlDealt: 472
                },
                participantId: 9,
                runes: [
                    {
                        runeId: 5245,
                        rank: 9
                    },
                    {
                        runeId: 5289,
                        rank: 9
                    },
                    {
                        runeId: 5317,
                        rank: 9
                    },
                    {
                        runeId: 5335,
                        rank: 3
                    }
                ]
            },
            {
                teamId: 200,
                spell1Id: 4,
                spell2Id: 7,
                championId: 67,
                highestAchievedSeasonTier: "UNRANKED",
                timeline: {
                    creepsPerMinDeltas: {
                        zeroToTen: 5.9,
                        tenToTwenty: 7.800000000000001,
                        twentyToThirty: 5.199999999999999,
                        thirtyToEnd: 4.3999999999999995
                    },
                    xpPerMinDeltas: {
                        zeroToTen: 379.3,
                        tenToTwenty: 494.20000000000005,
                        twentyToThirty: 480.5,
                        thirtyToEnd: 530.1
                    },
                    goldPerMinDeltas: {
                        zeroToTen: 239.8,
                        tenToTwenty: 442.6,
                        twentyToThirty: 459.29999999999995,
                        thirtyToEnd: 457
                    },
                    damageTakenPerMinDeltas: {
                        zeroToTen: 266.1,
                        tenToTwenty: 635.9000000000001,
                        twentyToThirty: 712.7,
                        thirtyToEnd: 1137.85
                    },
                    role: "DUO_CARRY",
                    lane: "BOTTOM"
                },
                masteries: [
                    {
                        masteryId: 6111,
                        rank: 5
                    },
                    {
                        masteryId: 6122,
                        rank: 1
                    },
                    {
                        masteryId: 6131,
                        rank: 5
                    },
                    {
                        masteryId: 6141,
                        rank: 1
                    },
                    {
                        masteryId: 6151,
                        rank: 5
                    },
                    {
                        masteryId: 6161,
                        rank: 1
                    },
                    {
                        masteryId: 6312,
                        rank: 5
                    },
                    {
                        masteryId: 6322,
                        rank: 1
                    },
                    {
                        masteryId: 6331,
                        rank: 5
                    },
                    {
                        masteryId: 6343,
                        rank: 1
                    }
                ],
                stats: {
                    winner: true,
                    champLevel: 18,
                    item0: 1300,
                    item1: 3094,
                    item2: 3153,
                    item3: 3087,
                    item4: 3031,
                    item5: 3036,
                    item6: 3340,
                    kills: 17,
                    doubleKills: 4,
                    tripleKills: 0,
                    quadraKills: 0,
                    pentaKills: 0,
                    unrealKills: 0,
                    largestKillingSpree: 5,
                    deaths: 8,
                    assists: 15,
                    totalDamageDealt: 284016,
                    totalDamageDealtToChampions: 62053,
                    totalDamageTaken: 41251,
                    largestCriticalStrike: 854,
                    totalHeal: 10104,
                    minionsKilled: 277,
                    neutralMinionsKilled: 9,
                    neutralMinionsKilledTeamJungle: 3,
                    neutralMinionsKilledEnemyJungle: 6,
                    goldEarned: 22082,
                    goldSpent: 19300,
                    combatPlayerScore: 0,
                    objectivePlayerScore: 0,
                    totalPlayerScore: 0,
                    totalScoreRank: 0,
                    magicDamageDealtToChampions: 6314,
                    physicalDamageDealtToChampions: 39610,
                    trueDamageDealtToChampions: 16128,
                    visionWardsBoughtInGame: 0,
                    sightWardsBoughtInGame: 0,
                    magicDamageDealt: 42695,
                    physicalDamageDealt: 211039,
                    trueDamageDealt: 30282,
                    magicDamageTaken: 19361,
                    physicalDamageTaken: 21298,
                    trueDamageTaken: 591,
                    firstBloodKill: false,
                    firstBloodAssist: false,
                    firstTowerKill: false,
                    firstTowerAssist: false,
                    firstInhibitorKill: true,
                    firstInhibitorAssist: false,
                    inhibitorKills: 2,
                    towerKills: 5,
                    wardsPlaced: 17,
                    wardsKilled: 0,
                    largestMultiKill: 2,
                    killingSprees: 6,
                    totalUnitsHealed: 4,
                    totalTimeCrowdControlDealt: 510
                },
                participantId: 10,
                runes: [
                    {
                        runeId: 5245,
                        rank: 9
                    },
                    {
                        runeId: 5289,
                        rank: 9
                    },
                    {
                        runeId: 5317,
                        rank: 9
                    },
                    {
                        runeId: 5337,
                        rank: 3
                    }
                ]
            }
        ],
        participantIdentities: [
            {
                participantId: 1,
                player: {
                    summonerId: 51666047,
                    summonerName: "jrizznezz",
                    matchHistoryUri: "/v1/stats/player_history/NA1/214684661",
                    profileIcon: 984
                }
            },
            {
                participantId: 2,
                player: {
                    summonerId: 42726231,
                    summonerName: "ConsumeSumWater",
                    matchHistoryUri: "/v1/stats/player_history/NA1/205308031",
                    profileIcon: 627
                }
            },
            {
                participantId: 3,
                player: {
                    summonerId: 49262934,
                    summonerName: "PuruPandey",
                    matchHistoryUri: "/v1/stats/player_history/NA1/212183251",
                    profileIcon: 786
                }
            },
            {
                participantId: 4,
                player: {
                    summonerId: 50204765,
                    summonerName: "NurseStun",
                    matchHistoryUri: "/v1/stats/player_history/NA1/212845505",
                    profileIcon: 746
                }
            },
            {
                participantId: 5,
                player: {
                    summonerId: 53865827,
                    summonerName: "so saucey",
                    matchHistoryUri: "/v1/stats/player_history/NA1/216581777",
                    profileIcon: 934
                }
            },
            {
                participantId: 6,
                player: {
                    summonerId: 28903187,
                    summonerName: "sounkt",
                    matchHistoryUri: "/v1/stats/player_history/NA1/43158388",
                    profileIcon: 953
                }
            },
            {
                participantId: 7,
                player: {
                    summonerId: 63800895,
                    summonerName: "Lewis",
                    matchHistoryUri: "/v1/stats/player_history/NA1/226592647",
                    profileIcon: 550
                }
            },
            {
                participantId: 8,
                player: {
                    summonerId: 51403662,
                    summonerName: "M1alphax",
                    matchHistoryUri: "/v1/stats/player_history/NA1/214315201",
                    profileIcon: 622
                }
            },
            {
                participantId: 9,
                player: {
                    summonerId: 65760428,
                    summonerName: "Annihilatorftw",
                    matchHistoryUri: "/v1/stats/player_history/NA1/227668857",
                    profileIcon: 982
                }
            },
            {
                participantId: 10,
                player: {
                    summonerId: 19171337,
                    summonerName: "DiligentGod",
                    matchHistoryUri: "/v1/stats/player_history/NA/31865816",
                    profileIcon: 683
                }
            }
        ],
        teams: [
            {
                teamId: 100,
                winner: false,
                firstBlood: false,
                firstTower: false,
                firstInhibitor: false,
                firstBaron: true,
                firstDragon: false,
                firstRiftHerald: false,
                towerKills: 5,
                inhibitorKills: 0,
                baronKills: 1,
                dragonKills: 1,
                riftHeraldKills: 0,
                vilemawKills: 0,
                dominionVictoryScore: 0,
                bans: [
                    {
                        championId: 36,
                        pickTurn: 1
                    },
                    {
                        championId: 16,
                        pickTurn: 3
                    },
                    {
                        championId: 238,
                        pickTurn: 5
                    }
                ]
            },
            {
                teamId: 200,
                winner: true,
                firstBlood: true,
                firstTower: true,
                firstInhibitor: true,
                firstBaron: false,
                firstDragon: true,
                firstRiftHerald: false,
                towerKills: 10,
                inhibitorKills: 2,
                baronKills: 0,
                dragonKills: 4,
                riftHeraldKills: 0,
                vilemawKills: 0,
                dominionVictoryScore: 0,
                bans: [
                    {
                        championId: 420,
                        pickTurn: 2
                    },
                    {
                        championId: 24,
                        pickTurn: 4
                    },
                    {
                        championId: 55,
                        pickTurn: 6
                    }
                ]
            }
        ],
        timeline: {
            frames: [ ],
            frameInterval: 60000
        }
    };

    var matchData2 = {
        "region": "NA",
        "matchType": "MATCHED_GAME",
        "matchCreation": 1481395754513,
        "participants": [
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6114
                    },
                    {
                    "rank": 1,
                    "masteryId": 6121
                    },
                    {
                    "rank": 5,
                    "masteryId": 6134
                    },
                    {
                    "rank": 1,
                    "masteryId": 6142
                    },
                    {
                    "rank": 5,
                    "masteryId": 6211
                    },
                    {
                    "rank": 1,
                    "masteryId": 6223
                    },
                    {
                    "rank": 5,
                    "masteryId": 6231
                    },
                    {
                    "rank": 1,
                    "masteryId": 6241
                    },
                    {
                    "rank": 5,
                    "masteryId": 6251
                    },
                    {
                    "rank": 1,
                    "masteryId": 6262
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 3009,
                    "item1": 3044,
                    "totalDamageTaken": 14053,
                    "item0": 3706,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": true,
                    "magicDamageDealt": 7540,
                    "wardsKilled": 0,
                    "largestCriticalStrike": 0,
                    "trueDamageDealt": 6424,
                    "doubleKills": 0,
                    "physicalDamageDealt": 62011,
                    "tripleKills": 0,
                    "deaths": 0,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 695,
                    "assists": 7,
                    "visionWardsBoughtInGame": 0,
                    "totalTimeCrowdControlDealt": 437,
                    "champLevel": 11,
                    "physicalDamageTaken": 11456,
                    "totalDamageDealt": 75976,
                    "largestKillingSpree": 4,
                    "inhibitorKills": 0,
                    "minionsKilled": 11,
                    "towerKills": 0,
                    "physicalDamageDealtToChampions": 4084,
                    "quadraKills": 0,
                    "goldSpent": 5450,
                    "totalDamageDealtToChampions": 5363,
                    "goldEarned": 7744,
                    "neutralMinionsKilledTeamJungle": 31,
                    "firstBloodKill": false,
                    "firstTowerKill": false,
                    "wardsPlaced": 5,
                    "trueDamageDealtToChampions": 584,
                    "killingSprees": 1,
                    "firstInhibitorKill": false,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 1,
                    "kills": 4,
                    "firstInhibitorAssist": true,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 41,
                    "magicDamageTaken": 2356,
                    "largestMultiKill": 1,
                    "totalHeal": 7075,
                    "item4": 3057,
                    "item3": 3101,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": false,
                    "item5": 0,
                    "trueDamageTaken": 240,
                    "neutralMinionsKilled": 72,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 9,
                    "runeId": 5245
                    },
                    {
                    "rank": 9,
                    "runeId": 5289
                    },
                    {
                    "rank": 9,
                    "runeId": 5317
                    },
                    {
                    "rank": 3,
                    "runeId": 5337
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": 117.89999999999999},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": -6.5},
                    "xpPerMinDeltas": {"zeroToTen": 353.6},
                    "goldPerMinDeltas": {"zeroToTen": 315},
                    "role": "NONE",
                    "creepsPerMinDeltas": {"zeroToTen": 0},
                    "csDiffPerMinDeltas": {"zeroToTen": -0.4},
                    "damageTakenPerMinDeltas": {"zeroToTen": 715.4000000000001},
                    "lane": "JUNGLE"
                },
                "spell2Id": 11,
                "participantId": 1,
                "championId": 120,
                "teamId": 100,
                "highestAchievedSeasonTier": "PLATINUM",
                "spell1Id": 6
            },
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6114
                    },
                    {
                    "rank": 1,
                    "masteryId": 6122
                    },
                    {
                    "rank": 5,
                    "masteryId": 6134
                    },
                    {
                    "rank": 1,
                    "masteryId": 6142
                    },
                    {
                    "rank": 5,
                    "masteryId": 6312
                    },
                    {
                    "rank": 1,
                    "masteryId": 6323
                    },
                    {
                    "rank": 5,
                    "masteryId": 6331
                    },
                    {
                    "rank": 1,
                    "masteryId": 6343
                    },
                    {
                    "rank": 5,
                    "masteryId": 6351
                    },
                    {
                    "rank": 1,
                    "masteryId": 6362
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 3165,
                    "item1": 0,
                    "totalDamageTaken": 3974,
                    "item0": 1056,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": true,
                    "magicDamageDealt": 43757,
                    "wardsKilled": 0,
                    "largestCriticalStrike": 340,
                    "trueDamageDealt": 1498,
                    "doubleKills": 0,
                    "physicalDamageDealt": 11252,
                    "tripleKills": 0,
                    "deaths": 0,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 7971,
                    "assists": 4,
                    "visionWardsBoughtInGame": 1,
                    "totalTimeCrowdControlDealt": 74,
                    "champLevel": 11,
                    "physicalDamageTaken": 2576,
                    "totalDamageDealt": 56508,
                    "largestKillingSpree": 6,
                    "inhibitorKills": 2,
                    "minionsKilled": 103,
                    "towerKills": 2,
                    "physicalDamageDealtToChampions": 508,
                    "quadraKills": 0,
                    "goldSpent": 5060,
                    "totalDamageDealtToChampions": 8863,
                    "goldEarned": 7860,
                    "neutralMinionsKilledTeamJungle": 1,
                    "firstBloodKill": false,
                    "firstTowerKill": false,
                    "wardsPlaced": 8,
                    "trueDamageDealtToChampions": 384,
                    "killingSprees": 1,
                    "firstInhibitorKill": true,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 1,
                    "kills": 6,
                    "firstInhibitorAssist": false,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 0,
                    "magicDamageTaken": 997,
                    "largestMultiKill": 1,
                    "totalHeal": 374,
                    "item4": 1052,
                    "item3": 3020,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": false,
                    "item5": 0,
                    "trueDamageTaken": 400,
                    "neutralMinionsKilled": 1,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 9,
                    "runeId": 5273
                    },
                    {
                    "rank": 4,
                    "runeId": 5289
                    },
                    {
                    "rank": 5,
                    "runeId": 5296
                    },
                    {
                    "rank": 9,
                    "runeId": 5316
                    },
                    {
                    "rank": 3,
                    "runeId": 5357
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": 134.9},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": -206.8},
                    "xpPerMinDeltas": {"zeroToTen": 517.5},
                    "goldPerMinDeltas": {"zeroToTen": 434.8},
                    "role": "SOLO",
                    "creepsPerMinDeltas": {"zeroToTen": 7.300000000000001},
                    "csDiffPerMinDeltas": {"zeroToTen": 0.7000000000000002},
                    "damageTakenPerMinDeltas": {"zeroToTen": 83.5},
                    "lane": "MIDDLE"
                },
                "spell2Id": 4,
                "participantId": 2,
                "championId": 7,
                "teamId": 100,
                "highestAchievedSeasonTier": "GOLD",
                "spell1Id": 14
            },
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6111
                    },
                    {
                    "rank": 1,
                    "masteryId": 6122
                    },
                    {
                    "rank": 5,
                    "masteryId": 6131
                    },
                    {
                    "rank": 1,
                    "masteryId": 6141
                    },
                    {
                    "rank": 5,
                    "masteryId": 6151
                    },
                    {
                    "rank": 1,
                    "masteryId": 6162
                    },
                    {
                    "rank": 5,
                    "masteryId": 6211
                    },
                    {
                    "rank": 1,
                    "masteryId": 6222
                    },
                    {
                    "rank": 5,
                    "masteryId": 6232
                    },
                    {
                    "rank": 1,
                    "masteryId": 6243
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 3047,
                    "item1": 1055,
                    "totalDamageTaken": 8071,
                    "item0": 1038,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": true,
                    "magicDamageDealt": 16913,
                    "wardsKilled": 0,
                    "largestCriticalStrike": 319,
                    "trueDamageDealt": 0,
                    "doubleKills": 0,
                    "physicalDamageDealt": 55361,
                    "tripleKills": 0,
                    "deaths": 2,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 1507,
                    "assists": 6,
                    "visionWardsBoughtInGame": 0,
                    "totalTimeCrowdControlDealt": 74,
                    "champLevel": 11,
                    "physicalDamageTaken": 6841,
                    "totalDamageDealt": 72274,
                    "largestKillingSpree": 3,
                    "inhibitorKills": 0,
                    "minionsKilled": 113,
                    "towerKills": 2,
                    "physicalDamageDealtToChampions": 4155,
                    "quadraKills": 0,
                    "goldSpent": 6475,
                    "totalDamageDealtToChampions": 5663,
                    "goldEarned": 7823,
                    "neutralMinionsKilledTeamJungle": 6,
                    "firstBloodKill": true,
                    "firstTowerKill": false,
                    "wardsPlaced": 4,
                    "trueDamageDealtToChampions": 0,
                    "killingSprees": 1,
                    "firstInhibitorKill": false,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 1,
                    "kills": 4,
                    "firstInhibitorAssist": true,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 1,
                    "magicDamageTaken": 821,
                    "largestMultiKill": 1,
                    "totalHeal": 312,
                    "item4": 1037,
                    "item3": 3046,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": false,
                    "item5": 0,
                    "trueDamageTaken": 408,
                    "neutralMinionsKilled": 7,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 9,
                    "runeId": 5247
                    },
                    {
                    "rank": 9,
                    "runeId": 5289
                    },
                    {
                    "rank": 9,
                    "runeId": 5316
                    },
                    {
                    "rank": 3,
                    "runeId": 5337
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": 203.99999999999997},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": -83.70000000000002},
                    "xpPerMinDeltas": {"zeroToTen": 457.29999999999995},
                    "goldPerMinDeltas": {"zeroToTen": 384.20000000000005},
                    "role": "SOLO",
                    "creepsPerMinDeltas": {"zeroToTen": 6.9},
                    "csDiffPerMinDeltas": {"zeroToTen": 3.9},
                    "damageTakenPerMinDeltas": {"zeroToTen": 361.7},
                    "lane": "TOP"
                },
                "spell2Id": 4,
                "participantId": 3,
                "championId": 157,
                "teamId": 100,
                "highestAchievedSeasonTier": "PLATINUM",
                "spell1Id": 12
            },
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6111
                    },
                    {
                    "rank": 1,
                    "masteryId": 6122
                    },
                    {
                    "rank": 5,
                    "masteryId": 6131
                    },
                    {
                    "rank": 1,
                    "masteryId": 6142
                    },
                    {
                    "rank": 5,
                    "masteryId": 6151
                    },
                    {
                    "rank": 1,
                    "masteryId": 6161
                    },
                    {
                    "rank": 5,
                    "masteryId": 6311
                    },
                    {
                    "rank": 1,
                    "masteryId": 6323
                    },
                    {
                    "rank": 5,
                    "masteryId": 6331
                    },
                    {
                    "rank": 1,
                    "masteryId": 6343
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 3031,
                    "item1": 1055,
                    "totalDamageTaken": 5454,
                    "item0": 2003,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": true,
                    "magicDamageDealt": 804,
                    "wardsKilled": 0,
                    "largestCriticalStrike": 502,
                    "trueDamageDealt": 0,
                    "doubleKills": 1,
                    "physicalDamageDealt": 79353,
                    "tripleKills": 1,
                    "deaths": 1,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 93,
                    "assists": 4,
                    "visionWardsBoughtInGame": 0,
                    "totalTimeCrowdControlDealt": 19,
                    "champLevel": 11,
                    "physicalDamageTaken": 3906,
                    "totalDamageDealt": 80157,
                    "largestKillingSpree": 3,
                    "inhibitorKills": 1,
                    "minionsKilled": 148,
                    "towerKills": 2,
                    "physicalDamageDealtToChampions": 7458,
                    "quadraKills": 0,
                    "goldSpent": 7100,
                    "totalDamageDealtToChampions": 7552,
                    "goldEarned": 8585,
                    "neutralMinionsKilledTeamJungle": 0,
                    "firstBloodKill": false,
                    "firstTowerKill": false,
                    "wardsPlaced": 3,
                    "trueDamageDealtToChampions": 0,
                    "killingSprees": 2,
                    "firstInhibitorKill": false,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 2,
                    "kills": 5,
                    "firstInhibitorAssist": false,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 0,
                    "magicDamageTaken": 1234,
                    "largestMultiKill": 3,
                    "totalHeal": 900,
                    "item4": 3085,
                    "item3": 1001,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": true,
                    "item5": 0,
                    "trueDamageTaken": 313,
                    "neutralMinionsKilled": 0,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 9,
                    "runeId": 5245
                    },
                    {
                    "rank": 9,
                    "runeId": 5290
                    },
                    {
                    "rank": 9,
                    "runeId": 5317
                    },
                    {
                    "rank": 3,
                    "runeId": 5335
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": 113.1},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": -75.44999999999999},
                    "xpPerMinDeltas": {"zeroToTen": 400.79999999999995},
                    "goldPerMinDeltas": {"zeroToTen": 441.20000000000005},
                    "role": "DUO_CARRY",
                    "creepsPerMinDeltas": {"zeroToTen": 8.7},
                    "csDiffPerMinDeltas": {"zeroToTen": 1.6999999999999995},
                    "damageTakenPerMinDeltas": {"zeroToTen": 210.5},
                    "lane": "BOTTOM"
                },
                "spell2Id": 7,
                "participantId": 4,
                "championId": 222,
                "teamId": 100,
                "highestAchievedSeasonTier": "PLATINUM",
                "spell1Id": 4
            },
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6114
                    },
                    {
                    "rank": 1,
                    "masteryId": 6122
                    },
                    {
                    "rank": 5,
                    "masteryId": 6134
                    },
                    {
                    "rank": 1,
                    "masteryId": 6142
                    },
                    {
                    "rank": 5,
                    "masteryId": 6154
                    },
                    {
                    "rank": 1,
                    "masteryId": 6164
                    },
                    {
                    "rank": 5,
                    "masteryId": 6312
                    },
                    {
                    "rank": 1,
                    "masteryId": 6322
                    },
                    {
                    "rank": 5,
                    "masteryId": 6332
                    },
                    {
                    "rank": 1,
                    "masteryId": 6342
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 3107,
                    "item1": 3020,
                    "totalDamageTaken": 5444,
                    "item0": 3092,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": true,
                    "magicDamageDealt": 18513,
                    "wardsKilled": 0,
                    "largestCriticalStrike": 0,
                    "trueDamageDealt": 0,
                    "doubleKills": 0,
                    "physicalDamageDealt": 6892,
                    "tripleKills": 0,
                    "deaths": 1,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 4497,
                    "assists": 4,
                    "visionWardsBoughtInGame": 0,
                    "totalTimeCrowdControlDealt": 153,
                    "champLevel": 10,
                    "physicalDamageTaken": 3608,
                    "totalDamageDealt": 25405,
                    "largestKillingSpree": 5,
                    "inhibitorKills": 0,
                    "minionsKilled": 16,
                    "towerKills": 2,
                    "physicalDamageDealtToChampions": 467,
                    "quadraKills": 0,
                    "goldSpent": 5985,
                    "totalDamageDealtToChampions": 4965,
                    "goldEarned": 7066,
                    "neutralMinionsKilledTeamJungle": 0,
                    "firstBloodKill": false,
                    "firstTowerKill": true,
                    "wardsPlaced": 1,
                    "trueDamageDealtToChampions": 0,
                    "killingSprees": 1,
                    "firstInhibitorKill": false,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 1,
                    "kills": 5,
                    "firstInhibitorAssist": false,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 0,
                    "magicDamageTaken": 1381,
                    "largestMultiKill": 1,
                    "totalHeal": 655,
                    "item4": 0,
                    "item3": 1052,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": false,
                    "item5": 0,
                    "trueDamageTaken": 454,
                    "neutralMinionsKilled": 0,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 9,
                    "runeId": 5245
                    },
                    {
                    "rank": 9,
                    "runeId": 5289
                    },
                    {
                    "rank": 9,
                    "runeId": 5317
                    },
                    {
                    "rank": 3,
                    "runeId": 5357
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": 113.1},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": -75.44999999999999},
                    "xpPerMinDeltas": {"zeroToTen": 293.79999999999995},
                    "goldPerMinDeltas": {"zeroToTen": 261.1},
                    "role": "DUO_SUPPORT",
                    "creepsPerMinDeltas": {"zeroToTen": 0.1},
                    "csDiffPerMinDeltas": {"zeroToTen": 1.6999999999999995},
                    "damageTakenPerMinDeltas": {"zeroToTen": 190.5},
                    "lane": "BOTTOM"
                },
                "spell2Id": 4,
                "participantId": 5,
                "championId": 43,
                "teamId": 100,
                "highestAchievedSeasonTier": "PLATINUM",
                "spell1Id": 3
            },
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6111
                    },
                    {
                    "rank": 1,
                    "masteryId": 6121
                    },
                    {
                    "rank": 5,
                    "masteryId": 6131
                    },
                    {
                    "rank": 1,
                    "masteryId": 6143
                    },
                    {
                    "rank": 5,
                    "masteryId": 6151
                    },
                    {
                    "rank": 1,
                    "masteryId": 6162
                    },
                    {
                    "rank": 5,
                    "masteryId": 6312
                    },
                    {
                    "rank": 1,
                    "masteryId": 6322
                    },
                    {
                    "rank": 5,
                    "masteryId": 6331
                    },
                    {
                    "rank": 1,
                    "masteryId": 6343
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 2010,
                    "item1": 3070,
                    "totalDamageTaken": 2244,
                    "item0": 1055,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": false,
                    "magicDamageDealt": 351,
                    "wardsKilled": 0,
                    "largestCriticalStrike": 0,
                    "trueDamageDealt": 0,
                    "doubleKills": 0,
                    "physicalDamageDealt": 9254,
                    "tripleKills": 0,
                    "deaths": 1,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 85,
                    "assists": 0,
                    "visionWardsBoughtInGame": 0,
                    "totalTimeCrowdControlDealt": 0,
                    "champLevel": 5,
                    "physicalDamageTaken": 1572,
                    "totalDamageDealt": 9605,
                    "largestKillingSpree": 0,
                    "inhibitorKills": 0,
                    "minionsKilled": 39,
                    "towerKills": 0,
                    "physicalDamageDealtToChampions": 580,
                    "quadraKills": 0,
                    "goldSpent": 1350,
                    "totalDamageDealtToChampions": 666,
                    "goldEarned": 3264,
                    "neutralMinionsKilledTeamJungle": 0,
                    "firstBloodKill": false,
                    "firstTowerKill": false,
                    "wardsPlaced": 0,
                    "trueDamageDealtToChampions": 0,
                    "killingSprees": 0,
                    "firstInhibitorKill": false,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 2,
                    "kills": 0,
                    "firstInhibitorAssist": false,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 0,
                    "magicDamageTaken": 672,
                    "largestMultiKill": 0,
                    "totalHeal": 264,
                    "item4": 0,
                    "item3": 0,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": false,
                    "item5": 0,
                    "trueDamageTaken": 0,
                    "neutralMinionsKilled": 0,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 9,
                    "runeId": 5245
                    },
                    {
                    "rank": 9,
                    "runeId": 5289
                    },
                    {
                    "rank": 9,
                    "runeId": 5317
                    },
                    {
                    "rank": 3,
                    "runeId": 5337
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": -113.1},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": 75.44999999999999},
                    "xpPerMinDeltas": {"zeroToTen": 181.3},
                    "goldPerMinDeltas": {"zeroToTen": 173.8},
                    "role": "DUO",
                    "creepsPerMinDeltas": {"zeroToTen": 3.9000000000000004},
                    "csDiffPerMinDeltas": {"zeroToTen": -1.6999999999999995},
                    "damageTakenPerMinDeltas": {"zeroToTen": 224.4},
                    "lane": "BOTTOM"
                },
                "spell2Id": 4,
                "participantId": 6,
                "championId": 81,
                "teamId": 200,
                "highestAchievedSeasonTier": "GOLD",
                "spell1Id": 7
            },
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6114
                    },
                    {
                    "rank": 1,
                    "masteryId": 6123
                    },
                    {
                    "rank": 5,
                    "masteryId": 6134
                    },
                    {
                    "rank": 1,
                    "masteryId": 6143
                    },
                    {
                    "rank": 5,
                    "masteryId": 6212
                    },
                    {
                    "rank": 1,
                    "masteryId": 6221
                    },
                    {
                    "rank": 5,
                    "masteryId": 6231
                    },
                    {
                    "rank": 1,
                    "masteryId": 6243
                    },
                    {
                    "rank": 5,
                    "masteryId": 6251
                    },
                    {
                    "rank": 1,
                    "masteryId": 6262
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 2302,
                    "item1": 3067,
                    "totalDamageTaken": 7102,
                    "item0": 0,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": false,
                    "magicDamageDealt": 5057,
                    "wardsKilled": 0,
                    "largestCriticalStrike": 0,
                    "trueDamageDealt": 320,
                    "doubleKills": 0,
                    "physicalDamageDealt": 10575,
                    "tripleKills": 0,
                    "deaths": 4,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 1204,
                    "assists": 1,
                    "visionWardsBoughtInGame": 0,
                    "totalTimeCrowdControlDealt": 45,
                    "champLevel": 9,
                    "physicalDamageTaken": 5342,
                    "totalDamageDealt": 15952,
                    "largestKillingSpree": 0,
                    "inhibitorKills": 0,
                    "minionsKilled": 36,
                    "towerKills": 0,
                    "physicalDamageDealtToChampions": 1680,
                    "quadraKills": 0,
                    "goldSpent": 3750,
                    "totalDamageDealtToChampions": 3205,
                    "goldEarned": 4048,
                    "neutralMinionsKilledTeamJungle": 0,
                    "firstBloodKill": false,
                    "firstTowerKill": false,
                    "wardsPlaced": 6,
                    "trueDamageDealtToChampions": 320,
                    "killingSprees": 0,
                    "firstInhibitorKill": false,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 1,
                    "kills": 1,
                    "firstInhibitorAssist": false,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 0,
                    "magicDamageTaken": 1547,
                    "largestMultiKill": 1,
                    "totalHeal": 297,
                    "item4": 3009,
                    "item3": 0,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": false,
                    "item5": 0,
                    "trueDamageTaken": 212,
                    "neutralMinionsKilled": 0,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 9,
                    "runeId": 5245
                    },
                    {
                    "rank": 9,
                    "runeId": 5290
                    },
                    {
                    "rank": 9,
                    "runeId": 5317
                    },
                    {
                    "rank": 3,
                    "runeId": 8022
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": -113.1},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": 75.44999999999999},
                    "xpPerMinDeltas": {"zeroToTen": 287.1},
                    "goldPerMinDeltas": {"zeroToTen": 171.1},
                    "role": "DUO",
                    "creepsPerMinDeltas": {"zeroToTen": 1.5},
                    "csDiffPerMinDeltas": {"zeroToTen": -1.6999999999999995},
                    "damageTakenPerMinDeltas": {"zeroToTen": 327.5},
                    "lane": "BOTTOM"
                },
                "spell2Id": 4,
                "participantId": 7,
                "championId": 89,
                "teamId": 200,
                "highestAchievedSeasonTier": "PLATINUM",
                "spell1Id": 14
            },
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6111
                    },
                    {
                    "rank": 1,
                    "masteryId": 6121
                    },
                    {
                    "rank": 5,
                    "masteryId": 6131
                    },
                    {
                    "rank": 1,
                    "masteryId": 6143
                    },
                    {
                    "rank": 5,
                    "masteryId": 6212
                    },
                    {
                    "rank": 1,
                    "masteryId": 6223
                    },
                    {
                    "rank": 5,
                    "masteryId": 6231
                    },
                    {
                    "rank": 1,
                    "masteryId": 6241
                    },
                    {
                    "rank": 5,
                    "masteryId": 6252
                    },
                    {
                    "rank": 1,
                    "masteryId": 6261
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 3158,
                    "item1": 2031,
                    "totalDamageTaken": 15343,
                    "item0": 1401,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": false,
                    "magicDamageDealt": 4196,
                    "wardsKilled": 1,
                    "largestCriticalStrike": 0,
                    "trueDamageDealt": 3383,
                    "doubleKills": 0,
                    "physicalDamageDealt": 33055,
                    "tripleKills": 0,
                    "deaths": 8,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 629,
                    "assists": 0,
                    "visionWardsBoughtInGame": 0,
                    "totalTimeCrowdControlDealt": 298,
                    "champLevel": 9,
                    "physicalDamageTaken": 8842,
                    "totalDamageDealt": 40636,
                    "largestKillingSpree": 0,
                    "inhibitorKills": 0,
                    "minionsKilled": 25,
                    "towerKills": 0,
                    "physicalDamageDealtToChampions": 3905,
                    "quadraKills": 0,
                    "goldSpent": 3975,
                    "totalDamageDealtToChampions": 5821,
                    "goldEarned": 4331,
                    "neutralMinionsKilledTeamJungle": 20,
                    "firstBloodKill": false,
                    "firstTowerKill": false,
                    "wardsPlaced": 6,
                    "trueDamageDealtToChampions": 1287,
                    "killingSprees": 0,
                    "firstInhibitorKill": false,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 1,
                    "kills": 2,
                    "firstInhibitorAssist": false,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 1,
                    "magicDamageTaken": 6187,
                    "largestMultiKill": 1,
                    "totalHeal": 2124,
                    "item4": 0,
                    "item3": 1029,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": false,
                    "item5": 0,
                    "trueDamageTaken": 314,
                    "neutralMinionsKilled": 21,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 9,
                    "runeId": 5245
                    },
                    {
                    "rank": 3,
                    "runeId": 5290
                    },
                    {
                    "rank": 6,
                    "runeId": 5295
                    },
                    {
                    "rank": 9,
                    "runeId": 5317
                    },
                    {
                    "rank": 3,
                    "runeId": 5335
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": -117.89999999999999},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": 6.5},
                    "xpPerMinDeltas": {"zeroToTen": 235.7},
                    "goldPerMinDeltas": {"zeroToTen": 220.10000000000002},
                    "role": "NONE",
                    "creepsPerMinDeltas": {"zeroToTen": 0.4},
                    "csDiffPerMinDeltas": {"zeroToTen": 0.4},
                    "damageTakenPerMinDeltas": {"zeroToTen": 721.9000000000001},
                    "lane": "JUNGLE"
                },
                "spell2Id": 11,
                "participantId": 8,
                "championId": 2,
                "teamId": 200,
                "highestAchievedSeasonTier": "PLATINUM",
                "spell1Id": 6
            },
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6212
                    },
                    {
                    "rank": 1,
                    "masteryId": 6223
                    },
                    {
                    "rank": 5,
                    "masteryId": 6232
                    },
                    {
                    "rank": 1,
                    "masteryId": 6243
                    },
                    {
                    "rank": 5,
                    "masteryId": 6311
                    },
                    {
                    "rank": 1,
                    "masteryId": 6323
                    },
                    {
                    "rank": 5,
                    "masteryId": 6331
                    },
                    {
                    "rank": 1,
                    "masteryId": 6343
                    },
                    {
                    "rank": 5,
                    "masteryId": 6352
                    },
                    {
                    "rank": 1,
                    "masteryId": 6362
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 0,
                    "item1": 2031,
                    "totalDamageTaken": 9100,
                    "item0": 3133,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": false,
                    "magicDamageDealt": 342,
                    "wardsKilled": 0,
                    "largestCriticalStrike": 0,
                    "trueDamageDealt": 0,
                    "doubleKills": 0,
                    "physicalDamageDealt": 14025,
                    "tripleKills": 0,
                    "deaths": 8,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 314,
                    "assists": 1,
                    "visionWardsBoughtInGame": 1,
                    "totalTimeCrowdControlDealt": 46,
                    "champLevel": 8,
                    "physicalDamageTaken": 5892,
                    "totalDamageDealt": 14367,
                    "largestKillingSpree": 0,
                    "inhibitorKills": 0,
                    "minionsKilled": 33,
                    "towerKills": 0,
                    "physicalDamageDealtToChampions": 3369,
                    "quadraKills": 0,
                    "goldSpent": 2875,
                    "totalDamageDealtToChampions": 3683,
                    "goldEarned": 3349,
                    "neutralMinionsKilledTeamJungle": 0,
                    "firstBloodKill": false,
                    "firstTowerKill": false,
                    "wardsPlaced": 2,
                    "trueDamageDealtToChampions": 0,
                    "killingSprees": 0,
                    "firstInhibitorKill": false,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 1,
                    "kills": 0,
                    "firstInhibitorAssist": false,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 2,
                    "magicDamageTaken": 2928,
                    "largestMultiKill": 0,
                    "totalHeal": 40,
                    "item4": 1036,
                    "item3": 3077,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": false,
                    "item5": 0,
                    "trueDamageTaken": 280,
                    "neutralMinionsKilled": 2,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 9,
                    "runeId": 5245
                    },
                    {
                    "rank": 9,
                    "runeId": 5289
                    },
                    {
                    "rank": 9,
                    "runeId": 5317
                    },
                    {
                    "rank": 3,
                    "runeId": 5335
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": -203.99999999999997},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": 83.70000000000002},
                    "xpPerMinDeltas": {"zeroToTen": 253.3},
                    "goldPerMinDeltas": {"zeroToTen": 161.39999999999998},
                    "role": "SOLO",
                    "creepsPerMinDeltas": {"zeroToTen": 3},
                    "csDiffPerMinDeltas": {"zeroToTen": -3.9},
                    "damageTakenPerMinDeltas": {"zeroToTen": 445.4},
                    "lane": "TOP"
                },
                "spell2Id": 4,
                "participantId": 9,
                "championId": 92,
                "teamId": 200,
                "highestAchievedSeasonTier": "GOLD",
                "spell1Id": 12
            },
            {
                "masteries": [
                    {
                    "rank": 5,
                    "masteryId": 6114
                    },
                    {
                    "rank": 1,
                    "masteryId": 6122
                    },
                    {
                    "rank": 5,
                    "masteryId": 6134
                    },
                    {
                    "rank": 1,
                    "masteryId": 6142
                    },
                    {
                    "rank": 5,
                    "masteryId": 6312
                    },
                    {
                    "rank": 1,
                    "masteryId": 6323
                    },
                    {
                    "rank": 5,
                    "masteryId": 6331
                    },
                    {
                    "rank": 1,
                    "masteryId": 6343
                    },
                    {
                    "rank": 5,
                    "masteryId": 6351
                    },
                    {
                    "rank": 1,
                    "masteryId": 6362
                    }
                ],
                "stats": {
                    "unrealKills": 0,
                    "item2": 1055,
                    "item1": 3152,
                    "totalDamageTaken": 8455,
                    "item0": 2003,
                    "pentaKills": 0,
                    "sightWardsBoughtInGame": 0,
                    "winner": false,
                    "magicDamageDealt": 33606,
                    "wardsKilled": 0,
                    "largestCriticalStrike": 0,
                    "trueDamageDealt": 210,
                    "doubleKills": 0,
                    "physicalDamageDealt": 12760,
                    "tripleKills": 0,
                    "deaths": 3,
                    "firstBloodAssist": false,
                    "magicDamageDealtToChampions": 3748,
                    "assists": 0,
                    "visionWardsBoughtInGame": 0,
                    "totalTimeCrowdControlDealt": 24,
                    "champLevel": 10,
                    "physicalDamageTaken": 4642,
                    "totalDamageDealt": 46577,
                    "largestKillingSpree": 0,
                    "inhibitorKills": 0,
                    "minionsKilled": 115,
                    "towerKills": 0,
                    "physicalDamageDealtToChampions": 338,
                    "quadraKills": 0,
                    "goldSpent": 4450,
                    "totalDamageDealtToChampions": 4296,
                    "goldEarned": 4958,
                    "neutralMinionsKilledTeamJungle": 0,
                    "firstBloodKill": false,
                    "firstTowerKill": false,
                    "wardsPlaced": 4,
                    "trueDamageDealtToChampions": 210,
                    "killingSprees": 0,
                    "firstInhibitorKill": false,
                    "totalScoreRank": 0,
                    "totalUnitsHealed": 1,
                    "kills": 1,
                    "firstInhibitorAssist": false,
                    "totalPlayerScore": 0,
                    "neutralMinionsKilledEnemyJungle": 0,
                    "magicDamageTaken": 3651,
                    "largestMultiKill": 1,
                    "totalHeal": 288,
                    "item4": 0,
                    "item3": 3108,
                    "objectivePlayerScore": 0,
                    "item6": 3340,
                    "firstTowerAssist": false,
                    "item5": 1001,
                    "trueDamageTaken": 162,
                    "neutralMinionsKilled": 0,
                    "combatPlayerScore": 0
                },
                "runes": [
                    {
                    "rank": 5,
                    "runeId": 5273
                    },
                    {
                    "rank": 9,
                    "runeId": 5289
                    },
                    {
                    "rank": 9,
                    "runeId": 5316
                    },
                    {
                    "rank": 3,
                    "runeId": 5357
                    },
                    {
                    "rank": 4,
                    "runeId": 5402
                    }
                ],
                "timeline": {
                    "xpDiffPerMinDeltas": {"zeroToTen": -134.9},
                    "damageTakenDiffPerMinDeltas": {"zeroToTen": 206.8},
                    "xpPerMinDeltas": {"zeroToTen": 382.6},
                    "goldPerMinDeltas": {"zeroToTen": 228.7},
                    "role": "SOLO",
                    "creepsPerMinDeltas": {"zeroToTen": 6.6},
                    "csDiffPerMinDeltas": {"zeroToTen": -0.7000000000000002},
                    "damageTakenPerMinDeltas": {"zeroToTen": 290.3},
                    "lane": "MIDDLE"
                },
                "spell2Id": 4,
                "participantId": 10,
                "championId": 85,
                "teamId": 200,
                "highestAchievedSeasonTier": "PLATINUM",
                "spell1Id": 14
            }
        ],
        "platformId": "NA1",
        "matchMode": "CLASSIC",
        "participantIdentities": [
            {
                "player": {
                    "profileIcon": 2075,
                    "matchHistoryUri": "/v1/stats/player_history/NA1/217481529",
                    "summonerName": "Eruptic",
                    "summonerId": 55423996
                },
                "participantId": 1
            },
            {
                "player": {
                    "profileIcon": 2074,
                    "matchHistoryUri": "/v1/stats/player_history/NA1/201946339",
                    "summonerName": "Pôseidòn",
                    "summonerId": 38974371
                },
                "participantId": 2
            },
            {
                "player": {
                    "profileIcon": 580,
                    "matchHistoryUri": "/v1/stats/player_history/NA/450887",
                    "summonerName": "Aìrblade",
                    "summonerId": 424055
                },
                "participantId": 3
            },
            {
                "player": {
                    "profileIcon": 749,
                    "matchHistoryUri": "/v1/stats/player_history/NA1/201214725",
                    "summonerName": "T1Batard",
                    "summonerId": 38270252
                },
                "participantId": 4
            },
            {
                "player": {
                    "profileIcon": 2074,
                    "matchHistoryUri": "/v1/stats/player_history/NA1/211817006",
                    "summonerName": "Mw2CoD",
                    "summonerId": 48578308
                },
                "participantId": 5
            },
            {
                "player": {
                    "profileIcon": 713,
                    "matchHistoryUri": "/v1/stats/player_history/NA1/222378169",
                    "summonerName": "LogicLoL",
                    "summonerId": 60648090
                },
                "participantId": 6
            },
            {
                "player": {
                    "profileIcon": 1378,
                    "matchHistoryUri": "/v1/stats/player_history/NA/31891740",
                    "summonerName": "above 9k",
                    "summonerId": 19197261
                },
                "participantId": 7
            },
            {
                "player": {
                    "profileIcon": 1301,
                    "matchHistoryUri": "/v1/stats/player_history/NA/32377240",
                    "summonerName": "MrPersonage",
                    "summonerId": 19683357
                },
                "participantId": 8
            },
            {
                "player": {
                    "profileIcon": 1422,
                    "matchHistoryUri": "/v1/stats/player_history/NA1/227245528",
                    "summonerName": "KillerLlama1234",
                    "summonerId": 65050707
                },
                "participantId": 9
            },
            {
                "player": {
                    "profileIcon": 687,
                    "matchHistoryUri": "/v1/stats/player_history/NA/37628664",
                    "summonerName": "Phroggen",
                    "summonerId": 23521773
                },
                "participantId": 10
            }
        ],
        "matchVersion": "6.24.168.1268",
        "teams": [
            {
                "bans": [
                    {
                    "pickTurn": 1,
                    "championId": 223
                    },
                    {
                    "pickTurn": 3,
                    "championId": 29
                    },
                    {
                    "pickTurn": 5,
                    "championId": 238
                    }
                ],
                "firstBlood": true,
                "firstTower": true,
                "firstInhibitor": true,
                "winner": true,
                "firstDragon": true,
                "vilemawKills": 0,
                "baronKills": 0,
                "teamId": 100,
                "inhibitorKills": 3,
                "dominionVictoryScore": 0,
                "riftHeraldKills": 0,
                "firstRiftHerald": false,
                "towerKills": 11,
                "firstBaron": false,
                "dragonKills": 1
            },
            {
                "bans": [
                    {
                    "pickTurn": 2,
                    "championId": 67
                    },
                    {
                    "pickTurn": 4,
                    "championId": 131
                    },
                    {
                    "pickTurn": 6,
                    "championId": 103
                    }
                ],
                "firstBlood": false,
                "firstTower": false,
                "firstInhibitor": false,
                "winner": false,
                "firstDragon": false,
                "vilemawKills": 0,
                "baronKills": 0,
                "teamId": 200,
                "inhibitorKills": 0,
                "dominionVictoryScore": 0,
                "riftHeraldKills": 0,
                "firstRiftHerald": false,
                "towerKills": 0,
                "firstBaron": false,
                "dragonKills": 0
            }
        ],
        "mapId": 11,
        "season": "PRESEASON2017",
        "queueType": "TEAM_BUILDER_RANKED_SOLO",
        "matchId": 2369055791,
        "matchDuration": 988
    };

var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


    describe('transform', function() { 
        it('returns valid input and output ready for neural network', function () {
            // arrange
            var trainingSet = matchTransformer.transform(matchData);
            var trainingSet2 = matchTransformer.transform(matchData2);
            var myNetwork = new Architect.Perceptron(7, 5, 1)
            var trainer = new Trainer(myNetwork)

            console.log(new Mongo.Collection('matches1').find().count());

            // act
            var result = trainer.train(trainingSet2);

            // assert
            console.log(trainingSet2[0].input)
            console.log(myNetwork.activate(trainingSet2[0].input));
            console.log(trainingSet2[0].output);
            expect(result).to.be.null;
        });
    });
});
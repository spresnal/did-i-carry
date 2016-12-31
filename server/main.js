'use strict';

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    //setup
    var synaptic = require('synaptic'); // this line is not needed in the browser
    var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

    //global network
    myNetwork = new Architect.Perceptron(7, 5, 1);

    //normalize
    var trainingSet = [];

    var matches = new Mongo.Collection('matches1').find().fetch();
    for(var i = 0; i < matches.length; i++){
        trainingSet = trainingSet.concat(matchTransformer.transform(matches[i]));
    }

    //train
    var trainer = new Trainer(myNetwork)
    var result = trainer.train(trainingSet, {
        iterations: 100,
        shuffle: false
    });

    // assert
    console.log(result);
    // console.log(trainingSet2[0].input)
    // console.log(myNetwork.activate(trainingSet2[0].input));
    // console.log(trainingSet2[0].output);
});

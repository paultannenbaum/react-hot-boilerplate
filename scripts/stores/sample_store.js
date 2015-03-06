'use strict';

var Reflux        = require('reflux');
var SampleActions = require('../actions/sample_action');

var SampleStore = Reflux.createStore({

  init: function() {
    this.listenTo(SampleActions.foo, this.onFoo);
  },

  onFoo: function(data) {
    console.log('Store is determining application logic')
    var newData;

    if (data === 'Hi There!') {
      newData = 'Bye There!';
    } else {
      newData = 'Hi There!';
    }

    this.trigger(newData);
  },

  onBar: function() {
    console.log('Bar Action Initiated');
  }
});

module.exports = SampleStore;

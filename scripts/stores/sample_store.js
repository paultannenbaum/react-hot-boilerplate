'use strict';

var Reflux  = require('reflux');
var actions = require('../actions/sample_action');

var SampleStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.message = '';
  },

  loginError: function(errorCode) {
    var message;
    switch (errorCode) {
    }
    this.trigger(message);
  }

});

module.exports = SampleStore;


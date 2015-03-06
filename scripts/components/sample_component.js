'use strict';

var React        = require('react');
var SampleAction = require('../actions/sample_action');

var SampleComponent = React.createClass({
  propTypes: {},
  mixins:    [],

  getInitialState: function() {
    return {
      echo: 'Hello from the sample component'
    };
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  render: function() {
    return (
      <div>{this.state.echo}</div>
    );
  }
});

module.exports = SampleComponent;

'use strict';

var React        = require('react');
var Reflux       = require('reflux');
var SampleAction = require('../actions/sample_action');
var SampleStore  = require('../stores/sample_store');

var SampleComponent = React.createClass({
  propTypes: {},
  mixins:    [
    Reflux.listenTo(SampleStore, 'handleUpdate')
  ],

  getInitialState: function() {
    return {
      echo: 'Hi There!'
    };
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  handleUpdate: function(data) {
    console.log('Component Is Updating');
    this.setState({
      echo: data
    })
  },

  handleClick: function() {
    SampleAction.foo(this.state.echo);
  },

  render: function() {
    console.log('Component Is Rendering');
    return (
      <div onClick={this.handleClick}>{this.state.echo}</div>
    );
  }
});

module.exports = SampleComponent;

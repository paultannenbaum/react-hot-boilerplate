'use strict'

var React = require('react');

var App = React.createClass({
  propTypes: {},
  mixins:    [],

  getInitialState: function() {
    return {
      echo: 'Hello Foo'
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

module.exports = App;

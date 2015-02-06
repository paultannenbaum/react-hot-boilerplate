'use strict';

var React = require('react');

var Header = React.createClass({
  propTypes: {},
  mixins:    [],

  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  render: function() {
    return (
      <header>This is the header</header>
    );
  }
});

module.exports = Header;

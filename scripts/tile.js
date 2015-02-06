'use strict';

var React = require('react');

module.exports = React.createClass({
  propTypes: {},
  mixins:    [],

  getInitialState: function() { return {}; },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  render: function() {
    return (
      <div className='tile'></div>
    );
  }
});

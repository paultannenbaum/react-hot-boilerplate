'use strict';

var React = require('react');

var App = React.createClass({
  propTypes: {},
  mixins:    [],

  getInitialState: function() {},
  getDefaultProps: function() {},

  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  _parseData: function() {},
  _onSelect: function() {},

  render: function() {
    return (
      <div id='board'>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
      </div>
    );
  }
});

module.exports = App;

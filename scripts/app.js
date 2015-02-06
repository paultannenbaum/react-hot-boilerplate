'use strict';

var React = require('react');

var App = React.createClass({
  render() {
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

'use strict';

var React = require('react');

var Sidebar = React.createClass({
  propTypes: {
    moves: React.PropTypes.array
  },
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
      <div className='sidebar'>
        <b>Game Play History</b>
        <ul>
        {this.props.moves.map(function(move, index) {
          return <li key={index}>Player {move.player}, Row {move.row}, Cell {move.cell}</li>
        })}
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;

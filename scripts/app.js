'use strict';

var React = require('react');
var Tile  = require('./tile');

var App = React.createClass({
  propTypes: {},
  mixins:    [],

  getInitialState: function() {
    return {
      player: 'X'
    };
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  handleTileClick: function(tile) {
    if (!tile.state.value) {
      this.setTileState(tile);
      this.switchPlayers();
    }
  },

  setTileState: function(tile) {
    return tile.setState({
      value: this.state.player
    });
  },

  switchPlayers: function() {
    return this.setState({
      player: this.state.player === 'X' ? 'O' : 'X'
    });
  },

  render: function() {
    return (
      <div id='board'>
        <Tile onClick={this.handleTileClick} />
        <Tile onClick={this.handleTileClick} />
        <Tile onClick={this.handleTileClick} />
        <Tile onClick={this.handleTileClick} />
        <Tile onClick={this.handleTileClick} />
        <Tile onClick={this.handleTileClick} />
        <Tile onClick={this.handleTileClick} />
        <Tile onClick={this.handleTileClick} />
        <Tile onClick={this.handleTileClick} />
      </div>
    );
  }
});

module.exports = App;

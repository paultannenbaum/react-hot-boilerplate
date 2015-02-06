'use strict';

var React = require('react');
var Tile  = require('./tile');

var App = React.createClass({
  propTypes: {},
  mixins:    [],


  getInitialState: function() {
    return {
      player: 'X',
      tileValues: [],
      gameStatus: 'open'
    };
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  handleTileClick: function(tile) {
    if (this.state.gameStatus === 'open' && !tile.state.value) {
      this.setTileState(tile);
      this.recordTilePlay(tile);
      this.analyzeBoardForWinOrDraw();

      if (this.state.gameStatus === 'open') {
        console.log('players switched');
        this.switchPlayers();
      }
    }
  },

  setTileState: function(tile) {
    tile.setState({
      value: this.state.player
    });
  },

  recordTilePlay: function(tile) {
    var arrayRef = this.state.tileValues;
    arrayRef[tile.props.index] = this.state.player;

    this.setState({
      tileValues: arrayRef
    });
  },

  // This is whole method is pretty shitty, but its just a prototype
  analyzeBoardForWinOrDraw: function() {
    var possibleWinRoutes = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    possibleWinRoutes.forEach(function(winRoute) {
      var currentStateofRoute =
        this.state.tileValues[winRoute[0]] +
        this.state.tileValues[winRoute[1]] +
        this.state.tileValues[winRoute[2]];

      if (currentStateofRoute === 'XXX' || currentStateofRoute === 'OOO') {
        this.setState({
          gameStatus: 'closed'
        });
      }
    }, this);
  },

  switchPlayers: function() {
    this.setState({
      player: this.state.player === 'X' ? 'O' : 'X'
    });
  },

  render: function() {
    return (
      <div id='board'>
        <Tile index={0} onClick={this.handleTileClick} />
        <Tile index={1} onClick={this.handleTileClick} />
        <Tile index={2} onClick={this.handleTileClick} />
        <Tile index={3} onClick={this.handleTileClick} />
        <Tile index={4} onClick={this.handleTileClick} />
        <Tile index={5} onClick={this.handleTileClick} />
        <Tile index={6} onClick={this.handleTileClick} />
        <Tile index={7} onClick={this.handleTileClick} />
        <Tile index={8} onClick={this.handleTileClick} />
      </div>
    );
  }
});

module.exports = App;

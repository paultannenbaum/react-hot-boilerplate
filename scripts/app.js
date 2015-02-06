'use strict';

var React   = require('react');
var Tile    = require('./tile');
var Header  = require('./header');
var Sidebar = require('./sidebar');

var App = React.createClass({
  propTypes: {},
  mixins:    [],

  getInitialState: function() {
    return {
      player: 'X',
      boardValues: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      playHistory: [],
      gameStatus: 'open'
    };
  },
  getDefaultProps: function() {
    return {
      possibleWinRoutes: [
        // Horizontals
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],

        // Verticals
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],

        // Diagonals
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]]
      ]
    }
  },
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  handleTileClick: function(tile) {
    if (this.state.gameStatus === 'open' && !tile.state.value) {
      this.setTileState(tile);
      this.recordTilePlay(tile);
      this.analyzeBoardForWinOrDraw();

      if (this.state.gameStatus === 'open') {
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
    var tileArrayRef    = this.state.boardValues;
    var historyArrayRef = this.state.playHistory;
    var row             = tile.props.position[0];
    var cell            = tile.props.position[1];

    tileArrayRef[row][cell] = this.state.player;
    historyArrayRef.push({
      player: this.state.player,
      row: row,
      cell: cell
    });

    this.setState({
      tileValues: tileArrayRef,
      playHistory: historyArrayRef
    });
  },

  // This is whole method is pretty shitty, but its just a prototype
  analyzeBoardForWinOrDraw: function() {
    this.props.possibleWinRoutes.forEach(function(winRoute) {
      var routeState = '';

      winRoute.forEach(function(cellPosition) {
        var row  = cellPosition[0];
        var cell = cellPosition[1];

        routeState += this.state.boardValues[row][cell];
      }, this);

      if (routeState === 'XXX' || routeState === 'OOO') {
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
      <div id="app">
        <Header player={this.state.player} gameStatus={this.state.gameStatus} />
        <Sidebar moves={this.state.playHistory} />
        <div className='board'>
          <Tile position={[0, 0]} onClick={this.handleTileClick} />
          <Tile position={[0, 1]} onClick={this.handleTileClick} />
          <Tile position={[0, 2]} onClick={this.handleTileClick} />
          <Tile position={[1, 0]} onClick={this.handleTileClick} />
          <Tile position={[1, 1]} onClick={this.handleTileClick} />
          <Tile position={[1, 2]} onClick={this.handleTileClick} />
          <Tile position={[2, 0]} onClick={this.handleTileClick} />
          <Tile position={[2, 1]} onClick={this.handleTileClick} />
          <Tile position={[2, 2]} onClick={this.handleTileClick} />
        </div>
      </div>
    );
  }
});

module.exports = App;

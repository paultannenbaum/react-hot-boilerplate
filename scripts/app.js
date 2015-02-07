'use strict';

var React   = require('react');
var _       = require('underscore');
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
    var boardArrayRef   = this.state.boardValues;
    var historyArrayRef = this.state.playHistory;
    var row             = tile.props.position[0];
    var cell            = tile.props.position[1];

    boardArrayRef[row][cell] = this.state.player;
    historyArrayRef.push({
      player: this.state.player,
      row: row,
      cell: cell
    });

    this.setState({
      boardValues: boardArrayRef,
      playHistory: historyArrayRef
    });
  },

  // This is whole method is pretty shitty, but its just a prototype
  analyzeBoardForWinOrDraw: function() {
    if (!_.contains(_.flatten(this.state.boardValues), null)) {
      this.setState({
        gameStatus: 'draw'
      });
    } else {
      _.each(this.props.possibleWinRoutes, function(winRoute) {
        var routeState = '';

        _.each(winRoute, function(cellPosition) {
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
    }
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

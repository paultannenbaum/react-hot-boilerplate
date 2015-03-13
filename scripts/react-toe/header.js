'use strict';

var React = require('react');

var Header = React.createClass({
  propTypes: {
    player:     React.PropTypes.string,
    gameStatus: React.PropTypes.string
  },
  mixins:    [],

  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
  },
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  render: function() {
    var text      = '';
    var className = '';

    switch (this.props.gameStatus) {
      case 'open':
        text = "Game on! Player " + this.props.player + "'s Turn";
        break;
      case 'draw':
        text      = "Game Over. Draw Match";
        className = 'game-over';
        break;
      case 'closed':
        text      = "Game Over. Player " + this.props.player + " Wins!";
        className = 'game-over';
        break;
    }

    return (
      <header className={className}>{text}</header>
    );
  }
});

module.exports = Header;

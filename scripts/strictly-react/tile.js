'use strict';

var React = require('react');

var Tile = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    index: React.PropTypes.number
  },
  mixins:    [],

  getInitialState: function() {
    return {
      value: ''
    };
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  registerCallback: function() {
    this.props.onClick(this);
  },

  render: function() {
    return (
      <div className='tile' onClick={this.registerCallback}>
        {this.state.value}
      </div>
    );
  }
});

module.exports = Tile;

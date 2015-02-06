'use strict';

var React = require('react');

module.exports = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func
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

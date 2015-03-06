'use strict';

var React           = require('react');
var SampleComponent = require('./components/sample_component');

var App = React.createClass({
  propTypes: {},
  mixins:    [],

  getInitialState: function() { return null; },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},


  render: function() {
    return (
      <SampleComponent />
    );
  }
});

React.render(<App />, document.body);

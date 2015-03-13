'use strict';

var React           = require('react');
var SampleComponent = require('./components/sample_component');

var App = React.createClass({
  render: function() {
    return (
      <SampleComponent />
    );
  }
});

React.render(<App />, document.body);

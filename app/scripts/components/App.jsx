var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <RouteHandler />
    );
  }
});

module.exports = App;

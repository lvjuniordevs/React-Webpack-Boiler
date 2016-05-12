//imports React from the React library
//imports ReactDOM so React can be Rendered to the DOM
//all css pipes through here as well...

var React = require('react');
var ReactDOM = require('react-dom');

require('./main.css');

var App = require('./components/app');

ReactDOM.render(<App greet={"I'm a prop!"}/>,document.getElementById('app'));
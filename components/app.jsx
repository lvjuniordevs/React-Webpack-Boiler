var React = require('react');

//the parent component

var App = React.createClass({
	getInitialState(){
		return({
			text: 'Initial State'
		})
	},
	render:function(){
		return(<div>
				<h1>{this.state.text}</h1>
				<p>{this.props.greet}</p>
			</div>)
	}
});

module.exports = App;
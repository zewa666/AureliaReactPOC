import React from 'react';
import ReactDom from 'react-dom';
import {inject, noView} from 'aurelia-framework';

var HelloTest = React.createClass({
	render: function () {
		return (<h1>Hello React{this.props.foo}</h1>);
	}
});


@noView()
@inject(Element)
export class Hello {

	constructor(element) {
		this.element = element;
		this.foo = '!';
	}

	bind() {
		ReactDom.render(<HelloTest foo={this.foo} />, this.element);
	}
}

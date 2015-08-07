import React from 'react';
import ReactDom from 'react-dom';
import {inject, noView, bindable} from 'aurelia-framework';

var HelloTest = React.createClass({
	render: function () {
		return (<h1>Hello React {this.props.foo}</h1>);
	}
});


@noView()
@inject(Element)
export class Hello {

  @bindable foo = "!";

	constructor(element) {
		this.element = element;
	}

  render() {
    ReactDom.render(<HelloTest foo={this.foo} />, this.element);
  }

	bind() {
		this.render();
	}

  fooChanged() {
    this.render();
  }
}

import React from 'react';
import ReactDom from 'react-dom';
import {customElement, inject, bindable, noView} from 'aurelia-framework';

var HelloTest = React.createClass({
	render: function () {
	   return (
			<h1>Hello React</h1>
		);
  }
});


@inject(Element)
@noView()
export class Hello {
    constructor(element) {
      this.element = element;
			ReactDom.render(<HelloTest/>, this.element );
    }
}

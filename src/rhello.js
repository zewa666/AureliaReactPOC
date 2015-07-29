import React from 'react';
import ReactDom from 'react-dom';
import {customElement, inject, bindable, noView} from 'aurelia-framework';

var RHelloTest = React.createClass({
	render: function () {
		console.log('render!');
	   return (
			<div>
				<span>Hello React</span>
			</div>
		);
  }
});


@inject(Element)
@noView()
export class Rhello {
    constructor(element) {
      this.element = element;
			ReactDom.render(<RHelloTest/>, this.element );
			console.log('elm:', this.element);
    }
}

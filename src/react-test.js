import React from 'react';
import {customElement, inject, bindable, noView} from 'aurelia-framework';

var NavBarElem = React.createClass({
	getInitialState: function () {
		return {
			router: {}
		};
	},
	render: function () {
	   return (
			<div>
				<span>React element</span>
			</div>
		);
  }
});

@noView()
@inject(Element)
@bindable('router')
@customElement('nav-bar-elem')
export class ReactTest {

    constructor(element) {
        this.element = element;
    }

    bind() {
      var elm = React.createElement('NavBarElem');
        React.render(elm, this.element );
    }
}

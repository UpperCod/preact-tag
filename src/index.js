import { h, render } from "preact";

function getProps(props, element) {
    let data = {};
    for (let i = 0; i < props.length; i++) {
        let prop = props[i],
            value =
                element instanceof HTMLElement
                    ? element.getAttribute(prop)
                    : element[prop];
        data[
            prop.replace(/-+([\w])/g, (all, letter) => letter.toUpperCase())
        ] = /^json-/.test(prop) ? JSON.parse(value) : value;
    }
    return data;
}

export default function register(tag, Component) {
    let props = Component.props || [];
    customElements.define(
        tag,
        class extends HTMLElement {
            constructor() {
                super();
                this.render(getProps(props, this));
            }
            static get observedAttributes() {
                return props;
            }
            render(props) {
                this.currentNode = render(
                    h(Component, props),
                    this,
                    this.currentNode
                );
            }
            disconnectedCallback() {
                this.currentNode = render(undefined, this, this);
            }
            attributeChangedCallback(index, prev, next) {
                this.render({
                    ...getProps(props, this),
                    ...getProps([index], { [index]: next })
                });
            }
        }
    );
}

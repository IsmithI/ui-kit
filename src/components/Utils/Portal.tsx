import * as React from 'react';
// @ts-ignore
import * as ReactDOM from 'react-dom';

let modalRoot = document.getElementById('modal');
if (!modalRoot) {
  modalRoot = document.createElement('div');
  document.body.appendChild(modalRoot);
}

export class Portal extends React.Component<any> {
  el: HTMLElement;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    if (modalRoot) modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    if (modalRoot) modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

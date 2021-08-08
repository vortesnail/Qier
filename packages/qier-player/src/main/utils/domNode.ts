import { dispose, Dispose } from './dispose';
import { createEle, removeEle } from './dom';

export class DomNode implements Dispose {
  el: HTMLElement;

  constructor(
    container?: HTMLElement,
    tag?: string,
    attrs?: Record<string, any>,
    children?: string | Array<Node>,
    classPrefix?: string,
  ) {
    this.el = createEle(tag, attrs, children, classPrefix);
    if (container) container.appendChild(this.el);
  }

  injectStyle(style?: Partial<CSSStyleDeclaration>): void {
    Object.assign(this.el.style, style);
  }

  dispose() {
    removeEle(this.el);
    dispose(this);
  }
}

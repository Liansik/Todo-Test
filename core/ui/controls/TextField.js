import { Element } from '../Element';
import { info } from '../../logger';

export class TextField extends Element {
  constructor(selector, name = 'TextField') {
    super(selector, name);
  }

  setValue(value) {
    info(`Going to set ${value} to ${this.name}`)
    this.waitUntilVisible();
    return this.element.setValue(value);
  }
}

import { Element } from '../Element';

export class CheckBox extends Element {
  constructor(selector, name = 'CheckBox') {
    super(selector, name);
  }

  setChecked() {
    const element = this.element
    if (element.isEnabled() && !this.isSelected()) {
      element.click();
    }
  }

  setUnchecked() {
    const element = this.element;
    if (element.isEnabled() && this.isSelected()) {
      element.click();
    }
  }

  isSelected() {
    return this.element.isSelected();
  }
}

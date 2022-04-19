import {curry} from "lodash";
import {closeFrame, goBack, openFrame} from "../browser";

export class BasePage {
  identifier

  constructor(identifier, name = 'Base page') {
    this.identifier = identifier;
    this.name = name;
  }

  withFrame = curry((id, action) => {
    let result;

    openFrame(id);
    result = action();
    closeFrame();

    return result;
  })

  pressEnterOnElement() {
    browser.keys("\uE007");
  }

  acceptPopUp() {
    browser.acceptAlert();
  }

  dismissPopUp() {
    browser.dismissAlert();
  }

  getPopUpText() {
    return browser.getAlertText();
  }

  isPopUpVisible() {
    return !!this.getPopUpText().length;
  }

  backToPreviousPage() {
    goBack();
  }

  refreshPage() {
    refreshPage();
  }
}

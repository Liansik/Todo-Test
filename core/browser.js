import { Element } from './ui';

export const openUrl = url => {
  browser.url(url);
}

export const getCurrentUrl = () => {
  return browser.getUrl()
}

export const openPath = path => {
  browser.url(`${browser.options.baseUrl}${path}`);
}

export const goBack = () => {
  browser.back();
}

export const refreshPage = () => {
  browser.refresh();
}

export const openFrame = (frameId, name = 'new') => {
  const frame = new Element(`#${frameId}`, `Open ${name} frame`);
  frame.waitUntilVisible();
  browser.switchToFrame(frameId);
}

export const closeFrame = () => {
  browser.switchToFrame(null);
}

export const switchTab = id => {
  browser.switchToWindow(id);
}
 
export const switchWindows = (linkOrTitle) => {
  return browser.switchWindow(linkOrTitle)
}
export const getWindows = () => {
  return browser.getWindowHandles();
}

export const acceptAlert = () => {
  if (browser.isAlertOpen()) {
    browser.acceptAlert();
  }
}

'use strict';

import { by, element, protractor, ElementFinder, ProtractorBrowser } from 'protractor';

export class OpenViduCall {
  constructor() {}

  getInputDashboard(browser) {
    return browser.element(by.css('#room_card input'));
  }

  getRoomButton(browser): ElementFinder {
    return browser.element(by.css('#room_card button'));
  }
  getShareScreenButton(browser): ElementFinder {
    return browser.element(by.css('#navScreenButton'));
  }

  getDialogExtension(browser): ElementFinder {
    return browser.element(by.css('#dialogExtension'));
  }

  getFullscreenButton(browser): ElementFinder {
    return browser.element(by.css('#fullscreenButton'));
  }

  openNewBrowserInTheSameRoom(browser): ProtractorBrowser {
    return browser.forkNewDriverInstance(true);
  }

  getLocalNickname(browser): ElementFinder {
    return browser.element(by.css('#localNickname'));
  }
  getRemoteNickname(browser): ElementFinder {
    return browser.element(by.css('#remoteNickname'));
  }

  getDialogNickname(browser): ElementFinder {
    return browser.element(by.css('#dialogNickname'));
  }

  getCamButton(browser): ElementFinder {
    return browser.element(by.css('#navCamButton'));
  }

  getCamIcon(browser): ElementFinder {
    return browser.element(by.css('#statusCam'));
  }

  getMicButton(browser): ElementFinder {
    return browser.element(by.css('#navMicButton'));
  }

  getMicIcon(browser): ElementFinder {
    return browser.element(by.css('#statusMic'));
  }

  getLeaveButton(browser): ElementFinder {
    return browser.element(by.css('#navLeaveButton'));
  }

  getChatButton(browser): ElementFinder {
    return browser.element(by.css('#navChatButton'));
  }

  getVideo(browser): ElementFinder {
    return this.getChatContent(browser).element(by.css('.OT_widget-container'));
  }

  getVideoList(browser): ElementFinder {
    return browser.element.all(by.css('.OT_widget-container'));
  }

  getRemoteVideoList(browser): ElementFinder {
    return browser.element.all(by.css('.OV_big video'));
  }

  getChatContent(browser): ElementFinder {
    return browser.element(by.css('#chatComponent'));
  }

  getChatInput(browser): ElementFinder {
    return browser.element(by.css('#messageInput input'));
  }

  getNewMessagePoint(browser): ElementFinder {
    return browser.element(by.css('#point'));
  }

  pressEnter(browser) {
    browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }

  getMessageList(browser) {
    return browser.element.all(by.css('#chatComponent .message-wrap .message .msg-detail'));
  }

  closeSession(browser) {
    const leaveButton = this.getLeaveButton(browser);
    leaveButton.click();
    browser.quit();
  }

  typeWithDelay(input, keys: string) {
    keys.split('').forEach((c) => input.sendKeys(c));
  }
}

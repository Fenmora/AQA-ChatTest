const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

const pages = {
  login: LoginPage,
};

Given(/^I am on the (.+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.+)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Then(/^I should logOut/, async () => {
  await LoginPage.btnSignOut.click();
});

When(/^I click into Register button/, async () => {
  await LoginPage.switchToRegister();
});

Then(/^I should see the register form/, async () => {
  await LoginPage.registerVisible();
});

Then(/^I write user information (.+) and (.+) and  (.+)$/, async (username, email, password) => {
  await LoginPage.register(username, email, password);
  await LoginPage.userTitleLabel.isDisplayed();
});

When(/^I am on the chat page with (.+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
  const chatSelected = await LoginPage.chatPersonList[0];
  await chatSelected.click();
});

Then(/^I do click to a chat$/, async () => {
  const chatSelected = await LoginPage.chatPersonList[0];
  await chatSelected.click();
  await browser.pause(5000);
});

Then(/^I should be able to selected a chat$/, async () => {
  await LoginPage.usernameChatSelectedName.isDisplayed();
  await browser.pause(5000);
});

Then(/^I should be able to sent a email saying (.+)$/, async (message) => {
  await LoginPage.writeMessage.setValue(message);
  await LoginPage.sendBtn.click();
});

Then(/^I last email should be showed in chat detail (.+)$/, async (message) => {
  const lastChatLabel = await LoginPage.lastChatLabel[0];
  await expect(lastChatLabel).toHaveText(expect.stringContaining(message));
});

Then(/^I should be able to compare last message (.+)$/, async (message_received) => {
  const lastChatLabel = await LoginPage.lastChatLabel[0];
  await expect(lastChatLabel).toHaveText(expect.stringContaining(message_received));
});

// Then  I should be able to compare last message <message_received>

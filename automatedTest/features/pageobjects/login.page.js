const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  get inputUsername() {
    return $("#username");
  }
  get inputEmail() {
    return $("#email");
  }
  get inputPassword() {
    return $("#password");
  }
  get inputUsernameSignUp() {
    return $("#usernameSignUp");
  }
  get inputEmailSignUp() {
    return $("#emailSignUp");
  }
  get inputPasswordSignUp() {
    return $("#passwordSignUp");
  }
  get btnSubmit() {
    return $("#signIn");
  }
  get btnSignUp() {
    return $("#signUp");
  }
  get btnSignOut() {
    return $("#signOut");
  }
  get btnRegister() {
    return $("#Register");
  }
  get userTitleLabel() {
    return $("#userTitle");
  }
  get chatPersonList() {
    return $$("#ChatPerson");
  }
  get usernameChatSelectedName() {
    return $("#usernameChatSelectedName");
  }
  get writeMessage() {
    return $("#writeMessage");
  }
  get sendBtn() {
    return $("#sendButton");
  }

  get lastChatLabel() {
    return $$("#lastChat");
  }

  async login(username, password) {
    await this.inputEmail.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  async register(username, email, password) {
    await this.inputEmailSignUp.setValue(email);
    await this.inputUsernameSignUp.setValue(username);
    await this.inputPasswordSignUp.setValue(password);
    await this.btnSignUp.click();
  }

  async switchToRegister() {
    await this.btnRegister.click();
  }

  async registerVisible() {
    await this.inputEmailSignUp.isDisplayed();
    await this.inputPasswordSignUp.isDisplayed();
    await this.inputUsernameSignUp.isDisplayed();
  }

  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();

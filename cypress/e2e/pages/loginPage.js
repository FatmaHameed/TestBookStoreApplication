class LoginPage {
  typeUsername(username) {
    const usernameInput = cy.get('#userName');
    usernameInput.type(username);
  }
  typePassword(password) {
    const passwordInput = cy.get('#password');
    passwordInput.type(password);
  }

  clickLoginBtn() {
    const loginBtn = cy.get('#login');
    loginBtn.click();
  }
}

export default LoginPage;

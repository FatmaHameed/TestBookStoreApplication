class HomePage {
  clickProfile() {
    const profile = cy.get(':nth-child(1) > .nav-link');
    profile.click();
  }
  clickRegisterLink() {
    const registerLink = cy.get('[href="/register"]');
    registerLink.contains('register').click();
  }
  clickLoginLink() {
    const loginLink = cy.get('[href="/login"]');
    loginLink.click();
  }
  navigateToProfilePage() {
    const profilePageElement = cy.get(
      ':nth-child(6) > .element-list > .menu-list > #item-3',
    );
    profilePageElement.click();
  }
}

export default HomePage;

class ProfilePage {
  getProfileHeader() {
    return cy.get('.main-header').contains('Profile');
  }
  searchBook(book) {
    const searchInput = cy.get('#searchBox');
    searchInput.type(`${book}{enter}`);
  }
  getUsernameValueElement(username) {
    return cy.get('#userName-value').contains(username);
  }
  clickGoToBookStoreBtn() {
    const goToStoreBtn = cy.get('#gotoStore');
    goToStoreBtn.click();
  }
  clickLogoutBtn() {
    const logoutBtn = cy.get('#submit');
    logoutBtn.click();
  }
}

export default ProfilePage;

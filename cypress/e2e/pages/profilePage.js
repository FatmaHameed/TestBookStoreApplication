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
  getBooksContainer() {
    return cy.get('.rt-tbody');
  }
  selectBooksNumbersToBeDisplayed(text, BooksNo) {
    const selectElement = cy.get('select');
    selectElement.select(text).should('have.value', `${BooksNo}`);
  }
}

export default ProfilePage;

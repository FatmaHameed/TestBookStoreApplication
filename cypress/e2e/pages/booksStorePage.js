class BooksStorePage {
  getAddBookToYourCollectionBtn() {
    return cy.get('.text-right > #addNewRecordButton');
  }
  getBookTitleElement() {
    return cy.get('#title-wrapper > .col-md-9 > #userName-value');
  }
}

export default BooksStorePage;

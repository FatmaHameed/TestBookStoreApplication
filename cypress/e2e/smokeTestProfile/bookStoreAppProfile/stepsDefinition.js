import HomePage from '../../pages/homePage';
import LoginPage from '../../pages/loginPage';
import ProfilePage from '../../pages/profilePage';
import BooksStorePage from '../../pages/booksStorePage';

import {
  Given,
  When,
  And,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

const home = new HomePage();
const login = new LoginPage();
const profile = new ProfilePage();
const booksStore = new BooksStorePage();

// Scenario 1: login with an existing user

Given('I visit the profile page of the Book Store Application', () => {
  cy.visit('/profile');
});

When('I click on login link', () => {
  home.clickLoginLink();
});

And('I type', (dataTable) => {
  for (const { label, env: environmentKey } of dataTable.hashes()) {
    cy.get(`input[id="${label}"]`).type(Cypress.env(environmentKey));
  }
});

And('I click on the Login button', () => {
  login.clickLoginBtn();
});

Then('I should see my profile', () => {
  cy.url().should('eq', 'https://demoqa.com/profile');
  profile.getProfileHeader().should('contain', 'Profile');
});

// Scenario 2: navigate to the book store

Given('I am logged in to my profile in the Book Store Application', () => {
  cy.login(`${Cypress.env(`username`)} `, `${Cypress.env(`password`)} `);
});

When('I click on Go To Book Store button', () => {
  profile.clickGoToBookStoreBtn();
});

Then('I should see the list of books in the book store', () => {
  cy.contains('Git Pocket Guide').should('be.visible');

  profile.getBooksContainer().then(($list) => {
    expect($list.find('a').length).to.not.equal(0);
  });

  cy.verifyBooksTitlesAreVisible();
});

// Scenario 3: add books to my collection in the profile

When(
  'I add a book for the books store to my collection not previously there',
  () => {
    cy.addNotNotExistBookToMyCollection();
    booksStore
      .getAddBookToYourCollectionBtn()
      .contains('Add To Your Collection')
      .should('be.visible')
      .trigger('mouseover')
      .click();
  },
);

Then('I should see this book in my profile', () => {
  let AddedBookTitle;

  booksStore
    .getBookTitleElement()
    .invoke('text')
    .then(($bookTitle) => {
      AddedBookTitle = $bookTitle;
      // cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click();
      home.navigateToProfilePage();
      profile.selectBooksNumbersToBeDisplayed('10 rows', '10');
      profile.getBooksContainer().should('contain', `${AddedBookTitle}`);
    });
});

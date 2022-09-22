import HomePage from '../../pages/homePage';
import LoginPage from '../../pages/loginPage';
import ProfilePage from '../../pages/profilePage';

import {
  Given,
  When,
  And,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

const home = new HomePage();
const login = new LoginPage();
const profile = new ProfilePage();

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

  cy.get('.rt-tbody').then(($list) => {
    expect($list.find('a').length).to.not.equal(0);
  });

  cy.verifyBooksTitlesAreVisible();
});

// Scenario 3: logout the user

When('I click on logout button', () => {
  profile.clickLogoutBtn();
});

Then('I should be logged out the profile', () => {
  profile.getProfileHeader().should('not.exist');
  cy.url('/login');
});

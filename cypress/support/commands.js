import HomePage from '../e2e/pages/homePage';
import LoginPage from '../e2e/pages/loginPage';
import ProfilePage from '../e2e/pages/profilePage';

const home = new HomePage();
const login = new LoginPage();
const profile = new ProfilePage();

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/profile');
  home.clickLoginLink();
  login.typeUsername(username);
  login.typePassword(password);
  login.clickLoginBtn();
  cy.url().should('eq', 'https://demoqa.com/profile');
  profile.getProfileHeader().should('contain', 'Profile');
});

Cypress.Commands.add('verifyBooksTitlesAreVisible', () => {
  const profileBooks = [];
  cy.get('.rt-tbody')
    .then(($divs) => {
      if ($divs.find('a').length != 0) {
        cy.get('.rt-tbody')
          .find('a')
          .then(($a) => {
            Cypress.$.makeArray($a).map((el) => {
              profileBooks.push(el.innerText);
            });
          });
      } else {
        console.log('the a element length = 0');
      }
    })
    .then(() => {
      profileBooks.forEach((bookTitle) => {
        cy.contains(bookTitle).should('be.visible');
      });
    });
});

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
        profile
          .getBooksContainer()
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

Cypress.Commands.add('addNotNotExistBookToMyCollection', () => {
  const profileBooks = [];
  const booksFromBooksStore = [];
  profile
    .getBooksContainer()
    .then(($divs) => {
      if ($divs.find('a').length != 0) {
        profile
          .getBooksContainer()
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
      profile.clickGoToBookStoreBtn();
    })
    .then(() => {
      cy.get('.rt-tbody').then(($divs2) => {
        if ($divs2.find('a').length != 0) {
          profile
            .getBooksContainer()
            .find('a')
            .then(($a2) => {
              Cypress.$.makeArray($a2).map((el) => {
                booksFromBooksStore.push(el.innerText);
              });
            });
        } else {
          console.log('the a element length in the bookstore = 0');
        }
      });
    })
    .then(() => {
      for (i = 0; i < booksFromBooksStore.length; i++) {
        if (!profileBooks.includes(booksFromBooksStore[i])) {
          profileBooks.push(booksFromBooksStore[i]);

          break;
        }
      }
    })
    .then(() => {
      const latestBook = profileBooks[profileBooks.length - 1];
      profile
        .getBooksContainer()
        .find('a')
        .contains(latestBook)
        .should('be.visible')
        .trigger('mouseover', { force: true })
        .click({ force: true });
    });
});

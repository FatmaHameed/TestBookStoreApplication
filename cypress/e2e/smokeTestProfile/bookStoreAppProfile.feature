Feature: Smoke Test of Book Store Application
  As a tester, I want to automate three scenatios covering demoqa.com/profile as a smoke test

  Scenario: login with an existing user
    Given I visit the profile page of the Book Store Application
    When I click on login link
    And I type
      | label    | env      |
      | userName | username |
      | password | password |

    And I click on the Login button
    Then I should see my profile

  Scenario: navigate to the book store and check books are there
    Given I am logged in to my profile in the Book Store Application
    When I click on Go To Book Store button
    Then I should see the list of books in the book store

  Scenario: add books to my collection in the profile
    Given I am logged in to my profile in the Book Store Application
    When I add a book for the books store to my collection not previously there
    Then I should see this book in my profile

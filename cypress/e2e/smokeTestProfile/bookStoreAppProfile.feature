
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

  Scenario: navigate to the book store
    Given I am logged in to my profile in the Book Store Application
    When I click on Go To Book Store button
    Then I should see the list of books in the book store

  Scenario: logout the user
    Given I am logged in to my profile in the Book Store Application
    And I click on logout button
    Then I should be logged out the profile
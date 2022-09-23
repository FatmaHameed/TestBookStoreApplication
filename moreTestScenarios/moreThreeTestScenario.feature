Feature: Smoke Test of Book Store Application
  As a tester, I want to write more three scenatios necessary to cover demoqa.com/profile as a smoke test

  Background: visiting the profile page of the Book Store Application

    Given I visit the profile page of the Book Store Application

  Scenario: register a new user
    When I click on register link
    And I fill in the necessary information and requirements to register the user
    And I verify the Google reCAPCHA
    And I click on the Register button
    Then I should see the alert message 'User Register Successfully.'

  Scenario: delete a book from my collection
    When I log in to my profile in the Book Store Application
    And I click on Delete a book icon button next to the book title
    And I confirm deletion by approving both displayed alerts
    Then This book should be removed from my collection book list


  Scenario: logout the user
    Given I am logged in to my profile in the Book Store Application
    And I click on logout button
    Then I should be logged out the profile
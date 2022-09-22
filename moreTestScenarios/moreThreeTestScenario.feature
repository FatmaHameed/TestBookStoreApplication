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

  Scenario: add books to my collection in the profile
    When I log in to my profile in the Book Store Application
    And I click on Go To Book Store button
    And I add a book which is not in my collection
    And I see the alert with success message "Book added to your collection".
    Then I should see this book in my profile

  Scenario: delete a book from my collection
    When I log in to my profile in the Book Store Application
    And I click on Delete a book icon button next to the book title
    And I confirm deletion by approving both displayed alerts
    Then This book should be removed from my collection book list
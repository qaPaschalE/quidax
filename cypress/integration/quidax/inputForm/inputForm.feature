@inputForms
Feature: One that checks one of the input forms

    This feature seeks to test input forms E2E

    Scenario: As a user, I should be able to get to input form validation page
        Given I visit the website
        When I click on input forms
        And I click on input form submit
        Then I see Input form with validations page

    Scenario: As a user, I should be able to fill all required field on the form and send
        When I input First name
        And I input last name
        And I input valid email address
        And I input valid phone number
        And I input valid address
        And I input a valid city
        And I select a preferred state from dropdown
        And I input zip code
        And I put a website or domain name
        And I select no for hosting
        And I input description
        Then I click on send button

    
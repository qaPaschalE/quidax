@listBoxes
Feature: One that tests one of the list boxes

    This feature seeks to test for Data list filter

    Scenario: As a user I should be able to view Data list filter page
        Given That I visit seleniumeasy test website
        When I click on List Box dropdown
        And I click on Data list filter
        Then I should see Data list filter page displayed

Scenario: As a user I should have where I can search Attendees
        When I click on List Box dropdown
        And I click on Data list filter
        Then I should see a search field

    Scenario: As a user I should be able to search Attendees by name
        When I search Attendees by name
        Then I should get my result as first on the list

    Scenario: As a user I should be able to search Attendees by phone
        When I search Attendees by phone
        Then I should get my first result phone number

    Scenario: As a user I should be able to search Attendees by email
        When I search Attendees by email
        Then I should get my first result email
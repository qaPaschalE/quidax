@alertAndModals
Feature: One that verifies one alert and modals

    This feature seeks to verify one of Bootstrap Modal Example for Automation

    Scenario: As a user I should be able to click on Bootsatrap modal to view Bootstrap Modal Example for Automation
        Given That I visit seleniumeasy test website
        When I click on alert & modals
        And I click on Bootstrap modals
        Then I should see Bootstrap Modal Example for Automation

    Scenario: As a user I should be able to launch modal for single modal
        When I click launch modal button for single modal Example
        Then I should see Modal Title modal

    Scenario: As a user I should be able to Save changes for single modal
        When I click on Save changes for single modal
        Then I should return to Bootstrap Modal sample page

    Scenario: As a user I should be able to close single modal
        When I click on close button
        Then I should return to Bootstrap Modal sample page

    Scenario: As a user I should be able to launch multiple modal
        When I click launch modal button for multiple modal Example
        Then I should see First modal

    Scenario: As a user I should be able to Save changes on first modal of Multiple modal
        When I click on Save changes for multiple modal
        Then I should return to Bootstrap Modal sample page

    Scenario: As a user I should be able to close first modal of Multiple modal
        When I click on close button
        Then I should return to Bootstrap Modal sample page

    Scenario: As a user I should be able to launch modal 2 from First modal
        When I click on Launch modal from first Modal
        Then I should see modal 2 displayed

    Scenario: As a user I should be able to Save changes on modal 2 of Multiple modal
        When I click on Save changes for modal 2
        Then I should return to Bootstrap Modal sample page

    Scenario: As a user I should be able to close modal 2 of Multiple modal
        When I click on close button for modal 2
        And I click on close for first modal
        Then I should return to Bootstrap Modal sample page
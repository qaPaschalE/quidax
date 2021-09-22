/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { alertModals } from '../page_objects/alert_models';
const alertModal = new alertModals();
Given('That I visit seleniumeasy test website', () => {
  alertModal.baseUrl();
});
When('I click on alert & modals', () => {
  alertModal.alertModalsDpdwn().click();
});
And('I click on Bootstrap modals', () => {
  alertModal.bootstrapModalLink().click();
});
Then('I should see Bootstrap Modal Example for Automation', () => {
  expect(alertModal.assertPage());
});

When('I click launch modal button for single modal Example', () => {
  alertModal.launchModBtn1().click();
});
Then('I should see Modal Title modal', () => {
  expect(alertModal.modalTitle().should('be.visible'));
});

When('I click on Save changes for single modal', () => {
  alertModal.saveChanges().click();
});
Then('I should return to Bootstrap Modal sample page', () => {
  expect(alertModal.assertPage());
  cy.wait(1000);
});

When('I click on close button', () => {
  alertModal.launchModBtn1().click().wait(1000);
  alertModal.closeModal().click();
});
Then('I should return to Bootstrap Modal sample page', () => {
  expect(alertModal.assertPage());
});

When('I click launch modal button for multiple modal Example', () => {
  cy.wait(1000);
  alertModal.launchModBtn2().click();
});
Then('I should see First modal', () => {
  expect(alertModal.launchModBtnFirst().should('be.visible'));
});

When('I click on Save changes for multiple modal', () => {
  alertModal.saveChanges().click({ force: true });
});
Then('I should return to Bootstrap Modal sample page', () => {
  expect(alertModal.assertPage());
});

When('I click on close button', () => {
  alertModal.closeModal().click();
});
Then('I should return to Bootstrap Modal sample page', () => {
  expect(alertModal.assertPage());
});

When('I click on Launch modal from first Modal', () => {
  alertModal.launchModBtn2().click();
  alertModal.launchModBtnFirst().click();
});
Then('I should see modal 2 displayed', () => {
  expect(alertModal.modal2Title().should('be.visible'));
});

When('I click on Save changes for modal 2', () => {
  alertModal.saveChanges().click({ force: true });
});
Then('I should return to Bootstrap Modal sample page', () => {
  expect(alertModal.assertPage());
});

When('I click on close button for modal 2', () => {
  alertModal.launchModBtn2().click();
  alertModal.launchModBtnFirst().click();
  alertModal.closeModal2().click({ force: true });
});
And('I click on close for first modal', () => {
  alertModal.closeModal1().click({ force: true });
});
Then('I should return to Bootstrap Modal sample page', () => {
  expect(alertModal.assertPage());
});

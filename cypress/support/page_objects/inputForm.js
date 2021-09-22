export class inputForms {
  baseUrl() {
    cy.visit('https://www.seleniumeasy.com/test/').wait(500);
    cy.get('#at-cv-lightbox-close').click();
    return this;
  }
  inputFormSubnit() {
    return cy.contains('Input Form Submit');
  }
  inputFormMenu() {
    return cy.contains('Input Forms');
  }
  assertCurrentPage() {
    return cy.url().should('contains', '/input-form-demo.html');
  }
  firstName() {
    return cy.get('[name="first_name"]');
  }
  lastName() {
    return cy.get('[name="last_name"]');
  }
  email() {
    return cy.get('[name="email"]');
  }
  phone() {
    return cy.get('[name="phone"]');
  }
  address() {
    return cy.get('[name="address"]');
  }
  city() {
    return cy.get('[name="city"]');
  }
  state() {
    return cy.get('[name="state"]');
  }
  zipCode() {
    return cy.get('[name="zip"]');
  }
  website() {
    return cy.get('[name="website"]');
  }
  hosting() {
    return cy.get('[value=no]');
  }
  description() {
    return cy.get('[name="comment"]');
  }
  sendBtn() {
    return cy.contains('Send');
  }
}

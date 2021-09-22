import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { inputForms } from '../page_objects/inputForm';
const forms = new inputForms();
Given('I visit the website', () => {
  forms.baseUrl();
});
When('I click on input forms', () => {
  forms.inputFormMenu().click();
});
And('I click on input form submit', () => {
  forms.inputFormSubnit().click();
});
Then('I see Input form with validations page', () => {
  forms.assertCurrentPage();
});

When('I input First name', () => {
  forms.firstName().type('paschal');
});
And('I input last name', () => {
  forms.lastName().type('enyimiri');
});
And('I input valid email address', () => {
  forms.email().type('paschal@gmail.com');
});
And('I input valid phone number', () => {
  forms.phone().type('8080488939');
});
And('I input valid address', () => {
  forms.address().type('39 shilo');
});
And('I input a valid city', () => {
  forms.city().type('Lagos');
});
And('I select a preferred state from dropdown', () => {
  forms.state().select('New Jersey');
});
And('I input zip code', () => {
  forms.zipCode().type('1000');
});
And('I put a website or domain name', () => {
  forms.website().type('faceboo.com');
});
And('I select no for hosting', () => {
  forms.hosting().click();
});

And('I input description', () => {
  forms.description().type('This is an assessment ');
});
Then('I click on send button', () => {
  forms.sendBtn().click();
  expect(forms.firstName().should('be.empty'));
});

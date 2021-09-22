import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { listBoxes } from '../page_objects/list_boxes';
const listBox = new listBoxes();
Given('That I visit seleniumeasy test website', () => {
  listBox.baseUrl();
});
When('I click on List Box dropdown', () => {
  listBox.listBoxDropdown().click();
});
And('I click on Data list filter', () => {
  listBox.dataFilter().should('be.visible').click({ force: true });
});
Then('I should see Data list filter page displayed', () => {
  expect(listBox.assertCurrentPage());
});
Then('I should see a search field', () => {
  expect(listBox.search().should('be.visible'));
});
When('I search Attendees by name', () => {
  listBox.search().type('Arman Cheyia');
});
Then('I should get my result as first on the list', () => {
  expect(listBox.Name().should('contain', 'Arman Cheyia'));
});

When('I search Attendees by phone', () => {
  listBox.search().clear().type('234-555-6666');
});
Then('I should get my first result phone number', () => {
  expect(listBox.Phone().should('contain', '234-555-6666'));
});

When('I search Attendees by email', () => {
  listBox.search().clear().type('test1@company.com');
});
Then('I should get my first result email', () => {
  expect(listBox.Email().should('contain', 'test1@company.com'));
});

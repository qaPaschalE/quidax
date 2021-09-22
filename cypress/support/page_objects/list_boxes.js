export class listBoxes {
  baseUrl() {
    cy.visit('https://www.seleniumeasy.com/test/').wait(500);
    cy.get('#at-cv-lightbox-close').click();
    return this;
  }
  search() {
    return cy.get('#input-search');
  }
  listBoxDropdown() {
    return cy.contains('List Box');
  }
  dataFilter() {
    return cy.contains('Data List Filter');
  }
  assertCurrentPage() {
    return cy
      .url()
      .should(
        'contains',
        'https://www.seleniumeasy.com/test/data-list-filter-demo.html'
      );
  }
  Name() {
    return cy.xpath('//h4[contains(text(),"Name: Arman Cheyia")]');
  }
  Phone() {
    return cy.contains('234-555-6666');
  }
  Email() {
    return cy.contains('test1@company.com');
  }
}

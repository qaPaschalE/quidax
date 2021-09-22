export class alertModals {
  baseUrl() {
    cy.visit('https://www.seleniumeasy.com/test/').wait(500);
    cy.get('#at-cv-lightbox-close').click();
    return this;
  }
  alertModalsDpdwn() {
    return cy.get('.navbar-right > .dropdown:nth-child(2) > .dropdown-toggle');
  }
  bootstrapModalLink() {
    return cy.get('.open li:nth-child(2) > a');
  }

  launchModBtn1() {
    return cy.get('.row:nth-child(2) .panel-body > .btn');
  }
  launchModBtn2() {
    return cy.get('.row:nth-child(3) .panel-body > .btn');
  }
  launchModBtnFirst() {
    return cy.get('.btn:nth-child(7)');
  }
  closeModal() {
    return cy.contains('Close');
  }
  closeModal1() {
    return cy.get(
      '#myModal > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]'
    );
  }
  closeModal2() {
    return cy.get(
      '#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]'
    );
  }
  modal2Title() {
    return cy.get('#myModal2 .modal-title');
  }
  firstModal() {
    return;
  }
  saveChanges() {
    return cy.contains('Save changes');
  }
  xBtn() {
    return cy.contains('#myModal .close');
  }
  modalTitle() {
    return cy.get('#myModal0 .modal-title');
  }
  assertPage() {
    return cy
      .url()
      .should(
        'contains',
        'https://www.seleniumeasy.com/test/bootstrap-modal-demo.html'
      );
  }
}

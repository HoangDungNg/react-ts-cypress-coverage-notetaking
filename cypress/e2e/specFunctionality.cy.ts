describe('Testing functionalities', () => {
  it('Create button works properly', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Create').click();
    cy.url().should('contain', 'new');
  });

  it('Edit Tags button works properly', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Edit Tags').click();
    cy.get('.modal-dialog').should('be.visible');
  });

  it('Popup modal is closable', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Edit Tags').click();
    cy.get('.modal-dialog').should('be.visible');
    cy.get('.btn-close').click();
    cy.get('.modal-dialog').should('not.exist');
  });
});

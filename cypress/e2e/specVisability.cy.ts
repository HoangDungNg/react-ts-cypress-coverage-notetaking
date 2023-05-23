describe('testing visability of all the elements', () => {
  it('contains all the required elements', () => {
    cy.visit('http://localhost:3000/');
    /** Main title to be visible */
    cy.get('h1').should('contain', 'Notes');
    /** Buttons to be visible */
    cy.contains('Create').should('be.visible');
    cy.contains('Edit Tags').should('be.visible');
    /** Inputs to be visible */
    cy.get('label[for="title"]').should('contain', 'Title');
    cy.get('label[for="tags"]').should('contain', 'Tags');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('.css-13cymwt-control')
      .should('be.visible')
      .should('contain', 'Select...');
  });
});

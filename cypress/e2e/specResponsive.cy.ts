describe('testing responsiveness of elements', () => {
  it('Inputs are divided into two equal columns on tablet and under', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport('ipad-2');

    cy.get('label[for="tags"]')
      .parent()
      .closest('.col')
      .invoke('outerWidth')
      .then((outerWidth) => {
        cy.get('label[for="title"]')
          .parent()
          .closest('.col')
          .invoke('outerWidth')
          .should('eq', outerWidth);
      });
  });
});

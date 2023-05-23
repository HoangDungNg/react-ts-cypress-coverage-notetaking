describe('testing responsiveness of elements', () => {
  it('Is able to create new notes', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Create').click();
    cy.get('#title').type('My first note');
    cy.get('.css-w9q2zk-Input2 > input').type('RandomNote').type('{enter}');
    cy.get('textarea').type(
      `It really didnt matter what they did to him. He is already made up his mind. Whatever came his way, he was prepared for the consequences. He knew in his heart that the sacrifice he made was done with love and not hate no matter how others decided to spin it.
She needed glasses. It wasn't that she couldn't see without them, but what she could see with them. When she wore glasses, her eyes focused so deeply that she could see not only the physical but also beyond. It was like a superpower. But she needed glasses.
      `
    );
    cy.contains('Save').click();
    cy.contains('My first note').closest('.card').should('be.visible');
  });
});

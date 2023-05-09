
// End-to-end testing
describe('Navigation', () => {
  it('should create a new list item', () => {
    cy.visit('http://localhost:3000/');

    // The command below is to simulate a user clicking
    // several times. 
    cy.get('[data-testid="new-item"]').click().click().click();

    cy.get('[data-testid="edit-button"]').first().click();
    cy.get('[data-testid="list-item-text"]').first().clear().type('I am editing this text').type('{enter}');


    cy.get('[data-testid="remove-button"]').first().click();
  });
});
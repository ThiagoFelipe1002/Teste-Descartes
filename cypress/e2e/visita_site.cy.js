describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://codepen.io/choskim/pen/RLYebl', {failOnStatusCode: false});
  })
})
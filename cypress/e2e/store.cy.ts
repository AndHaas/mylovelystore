describe('Store', () => {
  beforeEach(() => {
    cy.visit('stackblitz.com/edit/angular-94zcbt-wu6h5k');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'My Lovely Store');
  });
});
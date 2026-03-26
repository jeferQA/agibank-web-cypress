Cypress.Commands.add('searchBlog', (keywordInput) => {
    const encoded = encodeURIComponent(keywordInput).replace(/%20/g, '+');

    cy.wait(6000);
    cy.get('a.slide-search.astra-search-icon').click();
    cy.get('#search-field').type(keywordInput+'{enter}');
    cy.url().should('include', `?s=${encoded}`);
    cy.get('h1.page-title.ast-archive-title').should('contain.text', keywordInput);
});

Cypress.Commands.add('validateNoResultsItens', () => {
    cy.get('.no-results.not-found').should('be.visible');
})

Cypress.Commands.add('validateResultsItens', () => {
    cy.get('.ast-row > article').should('have.length.greaterThan', 0);
})
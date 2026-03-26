describe("Valição cenário de busca - Blog AgiBank", () => {
    let searchData;

    before(() => {
        cy.fixture('searchData.json').then((data) => {
            searchData = data;
        });
    })
    
    beforeEach(() => {
        cy.visit('/');
    });

    it("Busca com resultado encontrado - Header", () => {
        cy.searchBlog(searchData.produtos[1]);
        cy.validateResultsItens();
    });

    it("Busca com resultado não encontrado - Header", () => {
        cy.searchBlog('uahsdjkashdkashdkjdhskj');
        cy.validateNoResultsItens();
    })

});
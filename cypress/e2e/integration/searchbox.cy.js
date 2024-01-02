/// <reference types="cypress" />

describe('Searchbox Test', function () {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    });

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online{enter}');
        // Check if the <h1> element is visible
        cy.get('h2').should('be.visible');
        cy.get('h2').should('have.text', 'Search Results:');

        cy.get(':nth-child(4) > :nth-child(1) > a').should('be.visible');
        cy.get(':nth-child(2) > a').should('be.visible');

    });

    // it('should show search result page', () => {
    //     cy.get('h2').should('have.text', 'Search Results:');
    // });
});

//http://zero.webappsecurity.com/search.html?searchTerm=online
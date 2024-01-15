///  <reference types="cypress"/>

const { multiply } = require("lodash");

describe('navbar test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')
    });

    it('should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('sholud display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible')
    });

    it('shlould display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });

    it('should change display home when click the button', () => {
        cy.get('.active > img').should('be.visible')
        cy.get('.right').click({ force: true })
        cy.get('.next > img')
    });
});

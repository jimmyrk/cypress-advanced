/// <reference types="cypress"/>

describe('Login/Logout Test', () => {
    beforeEach(() => {
        cy.visit('https://kasirdemo.belajarqa.com/')
        cy.url().should('include', 'login')
        // cy.get('#signin_button').click()
    });

    it('should try to login with invalid data', () => {
        cy.get('.css-1w7v3tn').should('be.visible')
        cy.get('#email').type('invalid username')
        cy.get('#password').type('invalid password')
        cy.get('.chakra-button').click()
        // should display error message for invalid login
        cy.get('.chakra-alert').should('be.visible')
        cy.get('.chakra-alert').should('contain.text', '"email" must be a valid email')
    });

    // it('should display error message for invalid login', () => {
    //     cy.get('.chakra-alert').should('be.visible')
    //     cy.get('.chakra-alert').should('contain.text', '"email" must be a valid email')
    // });???

    it('should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const email = user.email
            const password = user.password

            cy.get('#email').clear()
            cy.get('#email').type(email)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('.chakra-button').click()
            // Verify if the URL go to'dashboard'
            cy.url().should('include', '/dashboard')

            // should logout from the application
            cy.get('#menu-button-14').should('be.visible').click()
            cy.get('#menu-list-14').should('be.visible')
            cy.get('#menu-list-14-menuitem-12').click()
            cy.visit('https://kasirdemo.belajarqa.com/')

        });
    });

    it('should logout from the application', () => {

        // cy.get('.chakra-heading').should('contains.text', 'hai, kasirAja')???
    });
});

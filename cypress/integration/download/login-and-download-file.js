/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/user/login');
    });
  
    describe('Download embedded file', () => {

      it('should get a CSV', () => {

        cy.get('h5#login-title').should('have.text', 'Welcome to the Nomad Admin UI');

       cy.get('#email').type('kloose@gmail.com');
       cy.get('#password').type('password');
       cy.get('#login').click();
       cy.visit('http://localhost:4200/cera/fake/download');

       cy.get('#fake-download').click();
      });

    });
});
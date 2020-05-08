/// <reference types="cypress" />

function userID_Alpha_Numeric() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


export const clickCancelInPopup = () => {
  cy.get('.swal2-cancel').click()
}

export const clickConfirmInPopup = () => {
  cy.get('.swal2-confirm').click()
}

export const click = selector => {
  cy.get(selector).click()
}


context('Assertions', () => {
    beforeEach(() => {
        cy.login();
        cy.visit('http://localhost:4200/admin/roles')
    });

    describe('Role Tests', () => {

      it('should create a new role', () => {

          const testRoleName = `some-new-role-${userID_Alpha_Numeric()}`;

          cy.get(".card-title").should('have.text', 'Roles');
          cy.get(".card-sub-title").should('have.text', 'Application Roles & Permissions');

          cy
            .get('#list-results')
            .find('.datatable-row-wrapper')
            .then(table => {

              const rowCount = table.length;
              cy.get('.page-count')
                .should('have.text', ` ${rowCount} total `);

              cy.get('#create').click();
              cy.get('#name').type(testRoleName);
              cy.get('#create').click();
              cy.get(".card-title").should('have.text', 'Roles');
              // cy.get("#list-results")
              //       .find('.datatable-body-cell')
              //       .contains('span', /testRoleName/i)
              //       .should('be.visible');

              cy.get(".page-count").should('have.text', ` ${rowCount + 1} total `);

            });
      });

      it('should cancel without creating a new role', () => {

          cy.get(".card-title").should('have.text', 'Roles');
          cy
            .get('#list-results')
            .find('.datatable-row-wrapper')
            .then(table => {

              const rowCount = table.length;
              console.log('RowCount :::: ', rowCount);
              cy.get('.page-count')
                    .should('have.text', ` ${rowCount} total `);

              cy.get('#create').click();
              cy.get('#cancel').click();

              cy.get(".card-title").should('have.text', 'Roles');

              cy.get('.page-count')
                    .should('have.text', ` ${rowCount} total `);

            });

      });

      it('should delete a role', () => {

        cy.get(".card-title").should('have.text', 'Roles');
          cy
            .get('#list-results')
            .find('.datatable-row-wrapper')
            .then(table => {
              const rowCount = table.length;
              cy.get('.page-count')
                    .should('have.text', ` ${rowCount} total `);

              table
                .find('.list-delete-btn')
                .first()
                .click();

              clickConfirmInPopup();

              cy.get(".card-title").should('have.text', 'Roles');

              cy.get('.page-count')
                    .should('have.text', ` ${rowCount - 1} total `);

            });



      });

      it('should cancel without deleting a role', () => {

        cy
        .get('#list-results')
        .find('.list-delete-btn')
        .first()
        .click();

        clickCancelInPopup();

      });

    });
});

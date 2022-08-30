///<reference types="cypress"/>

/*global Then, When, Given */

Then('o sistema informara que o cadastro foi realizado com sucesso', () => {
    cy.get('#swal2-title').should('have.text','Aí Sim...')
    cy.get('.swal2-confirm').click()

})

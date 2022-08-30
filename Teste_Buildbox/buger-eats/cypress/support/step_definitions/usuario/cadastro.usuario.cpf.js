///<reference types="cypress"/>

/*global Then, When, Given */

And('incluo um CPF invalido', () => {
    cy.get('input[name="cpf"]').type('03104503278')
})

Then('o sistema informara que o cadastro nao foi realizado CPF invalido', () => {
    cy.get('.alert-error').should('have.text','Oops! CPF inválido')
})

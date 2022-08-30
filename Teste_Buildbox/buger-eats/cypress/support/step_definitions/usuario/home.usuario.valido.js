///<reference types="cypress"/>

/*global Then, When, Given */

Given('que estou no navegador padrao', () => {

})

When('insiro o link do site', () => {
    cy.visit('/')
})

Then('o site sera acessado e validado', () => {
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    cy.url().should('be.equal','https://buger-eats.vercel.app/')
})

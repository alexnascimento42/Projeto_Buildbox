///<reference types="cypress"/>


/*global Then, When, Given */

var imagens = {
    cnh: 'Nova-CNH_2.jpg'
  }

Given('que estou no home do site Buger-Eats', () => {
    cy.visit('/')
})

When('clico no botão para cadastro de prestador de serviços e valido a pagina', () => {
    cy.get('a[href="/deliver').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
})

And('preencho todos os dados com as informaçoes validas', () => {
    cy.get('input[placeholder="Nome completo"]').type('Alex Nascimento')
    cy.get('input[name="cpf"]').type('63570273830')
    cy.get('input[name="email"]').type('alexnascimento42@yahoo.com.br')
    cy.get('input[name="whatsapp"]').type('982100023')
    cy.get('input[name="postalcode"]').type('60310410')
    cy.get('input[type=button][value="Buscar CEP"]').click()
    cy.get('input[name="address-number"]').type('819')
    cy.get('input[name="address-details"]').type('casa')
    cy.get('.delivery-method > :nth-child(1)').click()
    cy.get('input[accept^="image"]').attachFile('/fotos/' + imagens.cnh)

})

And('clico no botao para salvar o cadastro', () => {
    cy.get('form button[type="submit"]').click()
})
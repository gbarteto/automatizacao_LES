describe('Consulta Cliente com Filtro', () => {
    beforeEach('Acessar a tela de cliente', () => {
        cy.visit("/")
        cy.get('[href="src/consulta.html"]').click()
        cy.contains('CPF').should('be.visible')
    })
    it('Deve preencher campo de filtro e consultar cliente filtrado', () => {
        cy.get('#nome').type('Joao Silva')
        cy.get('#submit-filter').click()
        cy.contains('Joao Silva').should('be.visible')
    })
})
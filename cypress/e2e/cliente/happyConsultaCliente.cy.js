describe('Consulta Cliente', () => {
    it('Acessar a tela de cliente', () => {
        cy.visit("/")
        cy.get('[href="src/consulta.html"]').click()
        cy.contains('CPF').should('be.visible')
    })
})
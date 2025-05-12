describe('Acessando Pedido e Avançando Situação', () => {
    beforeEach("Acessar a tela de vendas", () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="adm/admVendas.html"]').click()
    })
    it('Deve avançar a situação da troca', () => {
        cy.get('#trocas-title').click()
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('contain', 'TROCA_SOLICITADA')
        cy.get(':nth-child(2) > :nth-child(6) > .btn-warning').click()
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('contain', 'TROCA_AUTORIZADA')
        cy.get(':nth-child(2) > :nth-child(6) > .btn-warning').click()
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('contain', 'TROCADO')
    })
})
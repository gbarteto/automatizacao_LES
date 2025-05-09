describe('Acessando Pedido e Avançando Situação', () => {
    beforeEach("Acessar a tela de vendas", () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="adm/admVendas.html"]').click()
    })
    it('Deve avançar a situação do pedido', () => {
        cy.get('tbody > tr > :nth-child(4)').should('contain', 'APROVADA')
        cy.get(':nth-child(7) > .btn-warning').click()
        cy.get('tbody > tr > :nth-child(4)').should('contain', 'EM_PROCESSAMENTO')
        cy.get(':nth-child(7) > .btn-warning').click()
        cy.get('tbody > tr > :nth-child(4)').should('contain', 'EM_TRANSITO')
        cy.get(':nth-child(7) > .btn-warning').click()
        cy.get('tbody > tr > :nth-child(4)').should('contain', 'ENTREGUE')
    })
})
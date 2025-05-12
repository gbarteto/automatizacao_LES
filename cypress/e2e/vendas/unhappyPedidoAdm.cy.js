describe('Acessando Pedido e Avançando Situação', () => {
    beforeEach("Acessar a tela de vendas", () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="adm/admVendas.html"]').click()
    })
    it('Deve avançar a situação do pedido', () => {
        cy.get('tbody > tr > :nth-child(4)').should('contain', 'ENTREGUE')

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Erro: Não há próximo status disponível - já está no status final');
        })
        cy.get(':nth-child(1) > :nth-child(7) > .btn-warning').click()
    })
})
describe('Acessando Pedido e Avançando Situação', () => {
    beforeEach("Acessar a tela de vendas", () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="adm/admVendas.html"]').click()
    })
    it('Deve avançar a situação da troca', () => {
        cy.get('#trocas-title').click()
        cy.get('#table-trocas > tbody > :nth-child(1) > :nth-child(4)').should('contain', 'TROCADO')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Erro: Não há próximo status disponível - já está no status final');
        })
        cy.get(':nth-child(1) > :nth-child(6) > .btn-warning').click()
    })
})
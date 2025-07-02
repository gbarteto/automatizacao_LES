describe('Acessando Aba de Análise de Pedidos', () => {
    beforeEach("Acessar a tela de vendas", () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="adm/admVendas.html"]').click()
    })
    it('Navegando até o dashboard', () => {
        cy.get('#dashboard-title').click()
        cy.get('#dashboard').should('be.visible')
    })
    it('Navegando até o dashboard e aplicando filtro', () => {
        cy.get('#dashboard-title').click()
        cy.get('#dashboard').should('be.visible')
        cy.get('#dataInicial').type('2025-04-01')
        cy.get('#dataFinal').type('2025-06-30')
        cy.get('.btn-primary').click()
    })
})
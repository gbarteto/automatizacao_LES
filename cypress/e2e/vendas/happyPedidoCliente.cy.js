describe('Acessando Pedido e Detalhes', () => {
    it('Acessar pedidos do cliente', () => {
        cy.visit("/")

        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="cliente/clienteCompras.html"]').click()
        cy.get('[href="clienteIdentPedidos.html"] > .texto-gradient').click()
        cy.contains('IDENTIFICAÇÃO').should('be.visible')
        cy.get('#cpf-ident').type('71301412040')
        cy.get('#btn-prosseguir').click()
        cy.contains('Meus Pedidos').should('be.visible')
        cy.get('[data-id="11"] > tbody > tr > :nth-child(4) > .btn-detalhes').click()
        cy.contains('Detalhes Pedido').should('be.visible')

        
    })
})
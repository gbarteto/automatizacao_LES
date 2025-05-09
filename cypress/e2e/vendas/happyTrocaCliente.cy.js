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
        cy.get('tbody > tr').first().find(':nth-child(4) .btn-detalhes').click();
        cy.contains('Detalhes Pedido').should('be.visible')

        cy.get('#quantidade0').type('1')
        let alertCount = 0;

        cy.on('window:alert', (str) => {
        alertCount++;

        if (alertCount === 1) {
            expect(str).to.equal('Produto "Nike Air Max 90" adicionado para troca.');
        } else if (alertCount === 2) {
            expect(str).to.equal('Solicitação de troca enviada com sucesso!');
        } else {
            throw new Error('Alerta inesperado: ' + str);
        }
        });

        

        cy.get('.solicitar-troca > button').click()
        cy.get('#finalizarTroca').click()

        
    })
})
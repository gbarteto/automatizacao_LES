describe('Teste de Condução completo do ecommerce de tênis', () => {
    it('Realizar uma compra', () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="cliente/clienteCompras.html"]').click()
        cy.get(':nth-child(1) > a > button').click()
        cy.get('.tamanhos-container > :nth-child(2)').click()
        cy.get('#add-carrinho').click()
        cy.get('[href="clienteCarrinho.html"] > img').click()
        cy.get('.info-carrinho > button').click()
        cy.get('#cpf-ident').type('71301412040')
        cy.get('button').click()
        cy.get('.endereco-container').click({force:true})
        cy.get('.tipo-entrega > [data-id="1"]').click()
        cy.get('#btnProsseguir').click()
        cy.get('.cartao-container').click()
        cy.get('#btnFinalizar').click()
    })

    it('Admin avança situação',()=>{
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="adm/admVendas.html"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain', 'APROVADA')
        cy.get(':nth-child(1) > :nth-child(7) > .btn-warning').click()
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain', 'EM_PROCESSAMENTO')
        cy.get(':nth-child(1) > :nth-child(7) > .btn-warning').click()
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain', 'EM_TRANSITO')
        cy.get(':nth-child(1) > :nth-child(7) > .btn-warning').click()
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain', 'ENTREGUE')
    })

    it('Cliente solicita troca', () => {
        cy.visit("/")

        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="cliente/clienteCompras.html"]').click()

        cy.get('[href="clienteIdentPedidos.html"] > .texto-gradient').click()
        cy.contains('IDENTIFICAÇÃO').should('be.visible')
        cy.get('#cpf-ident').type('71301412040')
        cy.get('#btn-prosseguir').click()

        cy.contains('Meus Pedidos').should('be.visible')
        cy.get('[data-id="8"] > tbody > tr > :nth-child(4) > a > .btn-detalhes').click();
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

    it('Admin aprova troca', () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="adm/admVendas.html"]').click()
        cy.get('#trocas-title').click()
        cy.get('tbody > :nth-child(5) > :nth-child(4)').should('contain', 'TROCA_SOLICITADA')
        cy.get(':nth-child(5) > :nth-child(6) > .btn-warning').click()
        cy.get('tbody > :nth-child(5) > :nth-child(4)').should('contain', 'TROCA_AUTORIZADA')
        cy.get(':nth-child(5) > :nth-child(6) > .btn-warning').click()
        cy.get('tbody > :nth-child(5) > :nth-child(4)').should('contain', 'TROCADO')
    })

    it('Cliente usa IA', () => {
        cy.intercept("POST", "/ecommerce_tenis_war_exploded/chatbot").as("chat")
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="cliente/clienteCompras.html"]').click()
        cy.get('#chat-bot').click()
        cy.get('#cpf-ident').type('71301412040')
        cy.get('#btn-prosseguir').click()
        cy.get('#message-input').type('Qual tênis você me recomenda baseado no meu histórico de compras?')
        cy.get('#btn-submit').click()

        cy.wait("@chat").then(({response}) => {
            expect(response.statusCode).to.eq(200)
        })
    })

    it('Admin verifica analise de vendas', () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="adm/admVendas.html"]').click()
        cy.get('#dashboard-title').click()
        cy.get('#dashboard').should('be.visible')
        cy.get('#dataInicial').type('2025-04-01')
        cy.get('#dataFinal').type('2025-06-30')
        cy.get('.btn-primary').click()

    })
})
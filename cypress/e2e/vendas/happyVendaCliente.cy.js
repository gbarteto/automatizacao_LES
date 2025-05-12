describe('Venda Cliente - Sucesso', () => {
    it('Acessar a tela de venda do cliente', () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="cliente/clienteCompras.html"]').click()
        cy.get(':nth-child(1) > a > button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Produto adicionado ao carrinho!');
          });
        cy.get('#add-carrinho').click()
        cy.saveSessionStorage()
    });

    it('Deve finalizar uma venda', () => {
        cy.visit("/src/vendas/cliente/clienteCompras.html")
        cy.restoreSessionStorage()
        cy.reload()
        cy.get('[href="clienteCarrinho.html"] > img').click()
        cy.get('.info-carrinho > button').click()
        cy.get('#cpf-ident').type('71301412040')
        cy.get('button').click()
        cy.get('.endereco-container').click({force:true})
        cy.get('.tipo-entrega > [data-id="1"]').click()
        cy.get('#btnProsseguir').click()
        cy.get('.cartao-container').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('pedido salvo com sucesso!');
          });
        cy.get('#btnFinalizar').click()
    })
    })
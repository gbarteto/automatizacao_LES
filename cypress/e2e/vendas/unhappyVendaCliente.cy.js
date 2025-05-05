describe('Venda Cliente - Erros', () => {
    before('Adicionar produto ao carrinho', () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="cliente/clienteCompras.html"]').click()
        cy.get(':nth-child(1) > a > button').click()
        cy.get('#add-carrinho').click()
        cy.saveSessionStorage()
    });
    beforeEach('Visitar pagina de Compras', () => {
        cy.visit("/src/vendas/cliente/clienteCompras.html")
        cy.restoreSessionStorage()
        cy.reload()
    })

    it('Erro CPF invalido', () => {
        cy.get('[href="clienteCarrinho.html"] > img').click()
        cy.get('.info-carrinho > button').click()
        cy.get('#cpf-ident').type('123456789')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Erro ao buscar cliente. Verifique o CPF.');
          });
        cy.get('button').click()
    })

    it('Erro endereco', () => {
        cy.get('[href="clienteCarrinho.html"] > img').click()
        cy.get('.info-carrinho > button').click()
        cy.get('#cpf-ident').type('71301412040')
        cy.get('button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Selecione um endereço e uma transportadora antes de continuar.');
        })
        cy.get('#btnProsseguir').click()
    })
    it('Erro cartao', ()=>{
        cy.get('[href="clienteCarrinho.html"] > img').click()
        cy.get('.info-carrinho > button').click()
        cy.get('#cpf-ident').type('71301412040')
        cy.get('button').click()
        cy.get('.endereco-container').click({force:true})
        cy.get('[data-id="1"]').click()
        cy.get('#btnProsseguir').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Erro ao montar o pedido: Erro interno na aplicação');
        })
        cy.get('#btnFinalizar').click()
    })
})
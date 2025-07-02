describe('Acessando IA', () => {
    beforeEach("Acessar a tela de vendas", () => {
        cy.visit("/")
        cy.get('[href="src/vendas/vendasHome.html"]').click()
        cy.contains('SELECIONAR USUÁRIO').should('be.visible')
        cy.get('[href="cliente/clienteCompras.html"]').click()
        cy.intercept("POST", "/ecommerce_tenis_war_exploded/chatbot").as("chat")
    })
    it('Acessando IA', () => {
        cy.get('#chat-bot').click()
        cy.get('#cpf-ident').type('71301412040')
        cy.get('#btn-prosseguir').click()
        cy.get('#message-input').type('Qual tênis você me recomenda baseado no meu histórico de compras?')
        cy.get('#btn-submit').click()

        cy.wait("@chat").then(({response}) => {
            expect(response.statusCode).to.eq(200)
        })
    })
})
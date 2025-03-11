describe('Acessando Homepage', () => {
    it('Acessando Homepage', () => {
        cy.visit('http://localhost:8080/ecommerce_tenis_war_exploded/');
        cy.contains('Bem-Vindo!').should('be.visible');
    })
})
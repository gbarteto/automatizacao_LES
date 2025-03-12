describe('Acessando Homepage', () => {
    it('Acessando Homepage', () => {
        cy.visit('/');
        cy.contains('Bem-vindo!').should('be.visible');
    })
})
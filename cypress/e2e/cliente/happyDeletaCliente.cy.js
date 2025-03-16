describe('Deletar Cliente', () => {
    beforeEach('Acessar a tela de cliente', () => {
        cy.visit("/")
        cy.get('[href="src/consulta.html"]').click()
    })
    it('Deve deletar um cliente cadastrado', () => {
        cy.get(':nth-child(1) > :nth-child(7) > .btn-danger').click()
    
        cy.on("window:confirm", (text) => {
            expect(text).to.contain("Tem certeza que deseja excluir o cliente com ID 1?")
            return true;
        });
    
        cy.intercept("DELETE", "/ecommerce_tenis_war_exploded/controlecliente?id=1").as("deleteRequest");
    
        // Aguarda a requisição DELETE ser enviada
        cy.wait("@deleteRequest").then(({ response }) => {
            expect(response.statusCode).to.eq(200);
        });
    });
    
})
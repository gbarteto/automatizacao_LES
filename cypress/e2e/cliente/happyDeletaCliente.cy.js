describe('Deletar Cliente', () => {
    beforeEach('Acessar a tela de cliente', () => {
        cy.visit("/")
        cy.get('[href="src/consulta.html"]').click()
    })
    it('Deve deletar um cliente cadastrado', () => {      
        cy.intercept("DELETE", "/ecommerce_tenis_war_exploded/controlecliente?id=*").as("deleteRequest");


        
        cy.get(':nth-child(1) > :nth-child(7) > .btn-danger').click()
        cy.wait("@deleteRequest").then(({ response }) => {
            
                    cy.on("window:confirm", (text) => {
                        return true;
                        
                    });
            expect(response.statusCode).to.eq(200);
        });
    
        
        
    });
    
})
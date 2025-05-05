describe("Alterar Cliente", () => {
  beforeEach("Acessar a tela de cliente", () => {
    cy.visit("/")
    cy.get('[href="src/consulta.html"]').click()
    cy.get("tr").contains("Joao Santos").parent().find(".btn-warning").click()
  });
  it("Deve alterar o formulário de cliente e endereço", () => {
    

    cy.intercept(
      "PUT",
      "/ecommerce_tenis_war_exploded/controlecliente?id=*"
    ).as("alterar")

    cy.get("#nome-altera").clear().type("Joao Santos")
    cy.get("#dataNascimento-altera").clear().type("1997-11-20")
    cy.get('#senha-altera').type('Teste@123')
    cy.get('#submit-button-altera').click()

      cy.on("window:alert", () => {
        cy.contains("Cliente alterado com sucesso!").should("be.visible");
        return true;
    });
      
  });
    
});

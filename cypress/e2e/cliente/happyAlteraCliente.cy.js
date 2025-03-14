describe("Alterar Cliente", () => {
  beforeEach("Acessar a tela de cliente", () => {
    cy.visit("/")
    cy.get('[href="src/consulta.html"]').click()
    cy.get(":nth-child(14) > :nth-child(7) > a > .btn-warning").click()
  });
  it("Deve alterar o formulário de cliente e endereço", () => {
    cy.url().then((url) => {
      const urlParams = new URLSearchParams(new URL(url).search)
      const id = urlParams.get("id")
      cy.log("ID capturado:", id)

      cy.intercept(
        "PUT",
        "/ecommerce_tenis_war_exploded/controlecliente?id=" + id + ""
      ).as("alterar")
    });
    //Cadastro Cliente
    cy.get("#nome-altera").clear().type("Joao Santos")
    cy.get("#dataNascimento-altera").clear().type("1997-08-20")
    cy.get('#submit-button-altera').click()
    cy.get('#senha-altera').type('Teste@123')

    cy.wait("@alterar").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.eq("Cliente alterado com sucesso!")
      });
    });
  });
});

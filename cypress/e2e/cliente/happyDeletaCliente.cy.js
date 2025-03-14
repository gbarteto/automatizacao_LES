describe('Deletar Cliente', () => {
    beforeEach('Acessar a tela de cliente', () => {
        cy.visit("/")
        cy.get('[href="src/consulta.html"]').click()
        cy.get(":nth-child(14) > :nth-child(7) > a > .btn-danger").click()
    })
    it('Deve deletar o cliente cadastrado', () => {
        cy.
        cy.url().then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search)
            const id = urlParams.get("id")
            cy.log("ID capturado:", id)
      
            cy.intercept(
              "PUT",
              "/ecommerce_tenis_war_exploded/controlecliente?id=" + id + ""
            ).as("alterar")
          });
    })
})   
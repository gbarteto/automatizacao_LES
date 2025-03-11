const { describe } = require("mocha");

describe('Cadastro de cliente', () => {
    it('Acessar a tela de cliente', () => {
        cy.visit('http://localhost:8080/ecommerce_tenis_war_exploded/');
        cy.get('#btn-consultar').click();
    })
    it('Deve preencher o formulário de cliente e endereço', () => {
        //Cadastro Cliente
        cy.get('#nome').type('Joao Silva');
        cy.get('#cpf').type('71301412040');
        cy.get('#masc').check();
        cy.get('#telefone').type('11999999999');
        cy.get('#residencial').check();
        cy.get('#dataNascimento').type('2000-01-01');
        cy.get('#email').type('joao@email.com');
        cy.get('#senha').type('Teste@123');
        cy.get('#confirmaSenha').type('Teste@123');

        //Cadastro Endereco
        cy.get('#endereco-title').click(); 
        cy.get('#ent_cep').type('08773600{tab}');
        cy.get('#ent_tipoResidencia').select('casa');
        cy.get('#ent_numero').type('123');
        cy.get('#sameAsDelivery').check();
        cy.get('#submit-button').click();

        cy.contains('Cadastro realizado com sucesso!').should('be.visible');
    });
})
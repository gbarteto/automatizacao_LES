// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('saveSessionStorage', () => {
    Object.keys(sessionStorage).forEach(key => {
      Cypress.env(`sessionStorage_${key}`, sessionStorage.getItem(key));
    });
  });
  
  Cypress.Commands.add('restoreSessionStorage', () => {
    Object.keys(Cypress.env())
      .filter(key => key.startsWith('sessionStorage_'))
      .forEach(key => {
        const value = Cypress.env(key);
        const realKey = key.replace('sessionStorage_', '');
        sessionStorage.setItem(realKey, value);
      });
  });
  
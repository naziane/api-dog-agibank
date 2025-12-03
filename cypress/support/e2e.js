Cypress.Commands.add('logResponse', (response) => {
    cy.log('Status: ' + response.status);
    cy.log('Tempo (ms): ' + response.duration);
    cy.log('Headers: ' + JSON.stringify(response.headers, null, 2));
    cy.log('Body: ' + JSON.stringify(response.body, null, 2));
});
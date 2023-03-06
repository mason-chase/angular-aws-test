import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('user navigate to {string}', function (url: string) {
  cy.visit(url);
});
Then('user can see the running app message', function () {
  cy.get('.highlight-card').should('be.visible');
});

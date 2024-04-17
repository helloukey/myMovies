const performLogin = (email, password) => {
  cy.getCypress("account-card-email-input").type(email);
  cy.getCypress("account-card-password-input").type(password);
  cy.getCypress("account-card-login-button").click();
};

export { performLogin };

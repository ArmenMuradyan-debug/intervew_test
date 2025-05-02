describe('Request A Quote Form - Happy Path', () => {
    it('Submits the form with valid data', () => {
      cy.visit('https://qatest.datasub.com/');
      cy.scrollTo('bottom');
  
      cy.get('#name').should('be.visible');
      cy.get('#email').should('be.visible');
      cy.get('#service').should('be.visible');
      cy.get('#message').should('be.visible');
  
      cy.get('#name').type('testname');
      cy.get('#email').type('test@example.com');
      cy.get('#service').select('Select B Service');
      cy.get('#message').type('testmessage.');
  
      cy.get('#subscriptionForm button[type="submit"]').click();
  
      cy.contains('Форма отправлена.', { timeout: 10000 }).should('be.visible');
    });
  });
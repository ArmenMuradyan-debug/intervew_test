describe('Request A Quote Form - Negative Case (Missing Email)', () => {
    it('Should not submit form when email is empty', () => {
      cy.visit('https://qatest.datasub.com/');
      cy.scrollTo('bottom');
  
      cy.get('#name').type('test');
      cy.get('#email').clear().blur(); // заставляем отработать валидацию
      cy.get('#service').select('Select B Service');
      cy.get('#message').type('Проверка ошибки без email');
  
      cy.get('#subscriptionForm button[type="submit"]').click();
  
      // Проверяем, что форма не отправлена ( сообщение не появилось)
      cy.contains('Форма отправлена.').should('not.exist');
  
      // Проверяем, что появилось визуальное указание ошибки
      cy.get('#email').should('have.class', 'is-invalid');
    });
  });
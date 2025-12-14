describe('Portfolio Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the main navigation', () => {
    cy.get('nav').should('be.visible');
    cy.contains('Dillon Cleaver').should('be.visible');
    cy.get('a[href="#about"]').should('contain', 'About');
    cy.get('a[href="#projects"]').should('contain', 'Projects');
    cy.get('a[href="#contact"]').should('contain', 'Contact');
  });

  it('should have all main sections visible', () => {
    // Check that all main components are rendered
    cy.get('main').should('contain', 'About');
    cy.get('main').should('contain', 'Projects');
    cy.get('main').should('contain', 'Contact');
  });

  it('should navigate to sections when clicking nav links', () => {
    // Test navigation to About section
    cy.get('a[href="#about"]').click();
    cy.location('hash').should('eq', '#about');

    // Test navigation to Projects section
    cy.get('a[href="#projects"]').click();
    cy.location('hash').should('eq', '#projects');

    // Test navigation to Contact section
    cy.get('a[href="#contact"]').click();
    cy.location('hash').should('eq', '#contact');
  });

  it('should have a responsive mobile menu', () => {
    // Set viewport to mobile size
    cy.viewport('iphone-6');

    // Mobile menu button should be visible
    cy.get('button[aria-label="Toggle menu"]').should('be.visible');

    // Nav links should be hidden initially on mobile (check with CSS visibility)
    cy.get('nav ul').should('have.css', 'visibility', 'hidden');

    // Click menu button to open
    cy.get('button[aria-label="Toggle menu"]').click();
    cy.get('nav ul').should('have.css', 'visibility', 'visible');

    // Click a nav link should close the menu
    cy.get('a[href="#about"]').click();
    cy.get('nav ul').should('have.css', 'visibility', 'hidden');
  });
});

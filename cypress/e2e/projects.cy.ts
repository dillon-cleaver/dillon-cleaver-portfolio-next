describe('Projects Section', () => {
  beforeEach(() => {
    cy.visit('/');
    // Navigate to projects section
    cy.get('#projects').scrollIntoView();
  });

  it('should display the projects section', () => {
    cy.get('#projects').should('be.visible');
    cy.contains('Projects').should('be.visible');
  });

  it('should display project cards', () => {
    // Carousel renders at least one slide
    cy.get('#projects').within(() => {
      cy.get('[class*="slide"]').should('have.length.at.least', 1);
    });
  });

  it('should display project titles and content', () => {
    cy.get('#projects').within(() => {
      // Active slide has a project title (h3)
      cy.get('h3').should('have.length.at.least', 1);

      // Collapsible section triggers (formerly h4 headings)
      cy.get('button[aria-expanded]').should('have.length.at.least', 1);

      // Check for project content (paragraphs)
      cy.get('p').should('have.length.at.least', 1);
    });
  });

  it('should have external links that open in new tabs', () => {
    cy.get('#projects').within(() => {
      cy.get('a[href^="http"]').should('have.attr', 'target', '_blank');
      cy.get('a[href^="http"]').should(
        'have.attr',
        'rel',
        'noopener noreferrer'
      );
    });
  });

  it('should display project links with icons', () => {
    cy.get('#projects').within(() => {
      // Check that links exist
      cy.get('a[href^="http"]').should('have.length.at.least', 1);

      // Check that links have icons (SVG elements)
      cy.get('a[href^="http"] svg').should('have.length.at.least', 1);
    });
  });

  it('should be responsive and display properly on mobile', () => {
    // Test mobile viewport
    cy.viewport('iphone-6');

    cy.get('#projects').should('be.visible');
    cy.get('#projects h2').should('be.visible');

    // Active slide should be visible and readable on mobile
    cy.get('#projects').within(() => {
      cy.get('h3').should('be.visible');
      cy.get('p').should('be.visible');
    });
  });

  it('should display the NerdWord project', () => {
    // NerdWord is the third project — navigate to it via the next arrow
    cy.get('button[aria-label="Next project"]').click();
    cy.get('button[aria-label="Next project"]').click();
    cy.get('#projects').within(() => {
      cy.contains('h3', 'NerdWord').should('be.visible');
    });
  });

  it('should have proper heading hierarchy', () => {
    cy.get('#projects').within(() => {
      // Main section heading should be h2
      cy.get('h2').should('contain', 'Projects');

      // Active slide project title should be h3
      cy.get('h3').should('have.length.at.least', 1);

      // Section headings are collapsible triggers (replaced h4 in new carousel)
      cy.get('button[aria-expanded]').should('have.length.at.least', 1);
    });
  });
});

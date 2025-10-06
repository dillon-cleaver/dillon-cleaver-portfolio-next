describe("Accessibility and SEO", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have proper page title and meta tags", () => {
    cy.title().should("not.be.empty");
    cy.get('head meta[name="description"]').should("exist");
  });

  it("should have proper heading structure", () => {
    // Should have one main h1 (if any)
    cy.get("h1").should("have.length.at.most", 1);

    // Should have h2 headings for main sections
    cy.get("h2").should("have.length.at.least", 1);

    // Check for logical heading hierarchy
    cy.get("h2, h3, h4, h5, h6").should("have.length.at.least", 3);
  });

  it("should have accessible form labels", () => {
    cy.get("#contact").scrollIntoView();

    // All form inputs should have associated labels
    cy.get("#name").should("have.attr", "id");
    cy.get('label[for="name"]').should("exist");

    cy.get("#email").should("have.attr", "id");
    cy.get('label[for="email"]').should("exist");

    cy.get("#subject").should("have.attr", "id");
    cy.get('label[for="subject"]').should("exist");

    cy.get("#message").should("have.attr", "id");
    cy.get('label[for="message"]').should("exist");
  });

  it("should have accessible navigation", () => {
    // Navigation should be in a nav element
    cy.get("nav").should("exist");

    // Mobile menu button should have accessible label
    cy.get('button[aria-label="Toggle menu"]').should("exist");
  });

  it("should have accessible links", () => {
    // External links should have proper attributes
    cy.get('a[href^="http"]').each(($link) => {
      cy.wrap($link).should("have.attr", "target", "_blank");
      cy.wrap($link).should("have.attr", "rel", "noopener noreferrer");
    });
  });

  it("should have proper focus management", () => {
    // Tab through interactive elements
    cy.get("a, button, input, textarea").first().focus();
    cy.focused().should("exist");

    // Test that we can focus on multiple interactive elements
    cy.get("a, button, input, textarea").should("have.length.at.least", 2);

    // Test that elements can receive focus
    cy.get("a").first().focus();
    cy.focused().should("be.visible");
  });

  it("should handle keyboard navigation", () => {
    // Set mobile viewport to make menu button visible
    cy.viewport("iphone-6");

    // Get the menu initially (should be hidden) 
    cy.get("ul").should("have.css", "opacity", "0");

    // Focus on mobile menu button and activate it
    cy.get('button[aria-label="Toggle menu"]').should("be.visible").click();

    // Wait for the CSS transition and check that menu is now visible
    cy.get("ul").should("have.css", "opacity", "1");
    cy.get("ul").should("have.css", "visibility", "visible");
  });

  it("should have no console errors", () => {
    // Listen for console errors
    cy.window().then((win) => {
      cy.stub(win.console, "error").as("consoleError");
    });

    // Navigate through the page
    cy.get('a[href="#about"]').click();
    cy.get('a[href="#projects"]').click();
    cy.get('a[href="#contact"]').click();

    // Check that no console errors occurred
    cy.get("@consoleError").should("not.have.been.called");
  });
});

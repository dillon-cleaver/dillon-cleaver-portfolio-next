describe("Projects Section", () => {
  beforeEach(() => {
    cy.visit("/");
    // Navigate to projects section
    cy.get("#projects").scrollIntoView();
  });

  it("should display the projects section", () => {
    cy.get("#projects").should("be.visible");
    cy.contains("Projects").should("be.visible");
  });

  it("should display project cards", () => {
    // Check that at least one project is displayed
    cy.get("#projects").within(() => {
      cy.get('[class*="project"]').should("have.length.at.least", 1);
    });
  });

  it("should display project titles and content", () => {
    cy.get("#projects").within(() => {
      // Check for project titles (h3 elements)
      cy.get("h3").should("have.length.at.least", 1);

      // Check for section headings (h4 elements)
      cy.get("h4").should("have.length.at.least", 1);

      // Check for subsection headings (h5 elements)
      cy.get("h5").should("have.length.at.least", 1);

      // Check for project content (paragraphs and lists)
      cy.get("p, ul").should("have.length.at.least", 1);
    });
  });

  it("should have external links that open in new tabs", () => {
    cy.get("#projects").within(() => {
      cy.get('a[href^="http"]').should("have.attr", "target", "_blank");
      cy.get('a[href^="http"]').should(
        "have.attr",
        "rel",
        "noopener noreferrer"
      );
    });
  });

  it("should display project links with icons", () => {
    cy.get("#projects").within(() => {
      // Check that links exist
      cy.get('a[href^="http"]').should("have.length.at.least", 1);

      // Check that links have icons (SVG elements)
      cy.get('a[href^="http"] svg').should("have.length.at.least", 1);
    });
  });

  it("should be responsive and display properly on mobile", () => {
    // Test mobile viewport
    cy.viewport("iphone-6");

    cy.get("#projects").should("be.visible");
    cy.get("#projects h2").should("be.visible");

    // Projects should still be visible and readable on mobile
    cy.get("#projects").within(() => {
      cy.get("h3").should("be.visible");
      cy.get("p, ul").should("be.visible");
    });
  });

  it("should display the NerdWord project", () => {
    // Look for the specific NerdWord project
    cy.get("#projects").within(() => {
      cy.contains("NerdWord").should("be.visible");
    });
  });

  it("should have proper heading hierarchy", () => {
    cy.get("#projects").within(() => {
      // Main section heading should be h2
      cy.get("h2").should("contain", "Projects");

      // Project titles should be h3
      cy.get("h3").should("have.length.at.least", 1);

      // Section headings should be h4
      cy.get("h4").should("have.length.at.least", 1);

      // Subsection headings should be h5
      cy.get("h5").should("have.length.at.least", 1);
    });
  });
});

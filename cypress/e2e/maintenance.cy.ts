describe("Maintenance Mode", () => {
  it("should display maintenance page when maintenance mode is enabled", () => {
    // This test would require setting NEXT_PUBLIC_MAINTENANCE_MODE=true
    // We can test this by directly visiting the maintenance page
    cy.visit("/maintenance");

    cy.contains("Under Maintenance").should("be.visible");
    cy.contains("Please check back soon!").should("be.visible");
  });

  it("should have proper styling on maintenance page", () => {
    cy.visit("/maintenance");

    // Check that the main elements are present
    cy.get("h1").should("contain", "Under Maintenance");
    cy.get("p").should("contain", "performing some maintenance");

    // Check that the page is styled (has CSS classes)
    cy.get('div[class*="container"]').should("exist");
    cy.get('div[class*="content"]').should("exist");
    cy.get('h1[class*="title"]').should("exist");
    cy.get('p[class*="description"]').should("exist");
  });

  it("should be responsive on mobile devices", () => {
    cy.viewport("iphone-6");
    cy.visit("/maintenance");

    cy.get("h1").should("be.visible");
    cy.get("p").should("be.visible");
  });
});

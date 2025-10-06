describe("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/");
    // Scroll to contact section or navigate there
    cy.get("#contact").scrollIntoView();
    // Wait for the form to be fully loaded
    cy.get('button[type="submit"]').should("contain", "Send message");
  });

  it("should display the contact form", () => {
    cy.get("#contact").should("be.visible");
    cy.contains("Contact Me").should("be.visible");

    // Check all form fields are present
    cy.get("#name").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get("#subject").should("be.visible");
    cy.get("#message").should("be.visible");
    cy.get('button[type="submit"]')
      .should("be.visible")
      .should("contain", "Send message");
  });

  it("should show validation errors for empty fields", () => {
    cy.get('button[type="submit"]').click();

    // Wait a moment for validation to process
    cy.wait(1000);

    cy.get("#contact").should("contain", "Name is required");
  });

  it("should show validation error for invalid email", () => {
    cy.get("#name").type("John Doe");
    cy.get("#email").type("invalid-email");
    cy.get("#subject").type("Test Subject");
    cy.get("#message").type("This is a test message with enough characters");

    cy.get("form").submit();

    cy.contains("Invalid email address").should("be.visible");
  });

  it("should show validation error for short message", () => {
    cy.get("#name").type("John Doe");
    cy.get("#email").type("john@example.com");
    cy.get("#subject").type("Test Subject");
    cy.get("#message").type("Short");

    cy.get('button[type="submit"]').click();

    cy.contains("Message must be at least 10 characters").should("be.visible");
  });

  it("should fill out the form successfully", () => {
    // Fill out all fields with valid data
    cy.get("#name").type("John Doe");
    cy.get("#email").type("john@example.com");
    cy.get("#subject").type("Test Subject");
    cy.get("#message").type(
      "This is a test message with enough characters to pass validation"
    );

    // Intercept the API call to prevent actual email sending during tests
    cy.intercept("POST", "/api/contact", { statusCode: 200 }).as("sendMessage");

    cy.get('button[type="submit"]').click();

    // Wait for the API call
    cy.wait("@sendMessage");

    // Check for success message
    cy.contains("Your message was sent successfully!").should("be.visible");

    // Check that form fields are cleared
    cy.get("#name").should("have.value", "");
    cy.get("#email").should("have.value", "");
    cy.get("#subject").should("have.value", "");
    cy.get("#message").should("have.value", "");
  });

  it("should handle API error gracefully", () => {
    // Fill out all fields with valid data
    cy.get("#name").type("John Doe");
    cy.get("#email").type("john@example.com");
    cy.get("#subject").type("Test Subject");
    cy.get("#message").type(
      "This is a test message with enough characters to pass validation"
    );

    // Intercept the API call to simulate an error
    cy.intercept("POST", "/api/contact", { statusCode: 500 }).as(
      "sendMessageError"
    );

    cy.get('button[type="submit"]').click();

    // Wait for the API call
    cy.wait("@sendMessageError");

    // Check for error message
    cy.contains("Error sending message. Please try again!").should(
      "be.visible"
    );
  });

  it("should show loading state when submitting", () => {
    // Fill out all fields with valid data
    cy.get("#name").type("John Doe");
    cy.get("#email").type("john@example.com");
    cy.get("#subject").type("Test Subject");
    cy.get("#message").type(
      "This is a test message with enough characters to pass validation"
    );

    // Intercept the API call with a delay to see loading state
    cy.intercept("POST", "/api/contact", {
      statusCode: 200,
      delay: 1000,
    }).as("sendMessageSlow");

    cy.get('button[type="submit"]').click();

    // Check loading state
    cy.get('button[type="submit"]')
      .should("be.disabled")
      .should("contain", "Sending...");

    // Wait for the API call to complete
    cy.wait("@sendMessageSlow");

    // Check success state
    cy.contains("Your message was sent successfully!").should("be.visible");
  });
});

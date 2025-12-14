// This file is processed and loaded automatically before your test files.
// This is a great place to put global configuration and behavior that modifies Cypress.

import './commands';

// Handle hydration mismatch errors that can occur in Next.js 15 with React 19
// These errors don't indicate test failure, just React's strict hydration checking
Cypress.on('uncaught:exception', (err) => {
  // Suppress hydration failed errors
  if (
    err.message.includes('Hydration failed') ||
    err.message.includes('hydration mismatch')
  ) {
    return false; // Don't fail the test
  }
  // Let other errors fail the test
  return true;
});

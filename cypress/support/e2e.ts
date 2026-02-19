// This file is processed and loaded automatically before your test files.
// This is a great place to put global configuration and behavior that modifies Cypress.

import './commands';

// Handle hydration mismatch errors that can occur in Next.js 15 with React 19
// These errors don't indicate test failure, just React's strict hydration checking
Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('Hydration failed') ||
    err.message.includes('hydration mismatch') ||
    err.message.includes('hydrated but some attributes')
  ) {
    return false; // Don't fail the test
  }
  return true;
});

// Helper: returns true if the message is a known React/Next.js framework warning
// rather than an application-level error.
export function isFrameworkNoise(msg: string): boolean {
  return (
    msg.includes('hydrated but some attributes') ||
    msg.includes('Hydration failed') ||
    msg.includes('hydration mismatch')
  );
}

// Jest DOM types
import "@testing-library/jest-dom";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toHaveClass(className: string): R;
      toHaveAttribute(attribute: string, value?: string): R;
      toHaveValue(value: string | number): R;
      toBeVisible(): R;
      toHaveTextContent(text: string | RegExp): R;
    }
  }
}

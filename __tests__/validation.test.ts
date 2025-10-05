import {
  validateEmail,
  validateRequired,
  validateMinLength,
  formatContactSubject,
} from "@/utils/validation";

describe("Validation Utils", () => {
  describe("validateEmail", () => {
    it("should return true for valid email addresses", () => {
      expect(validateEmail("test@example.com")).toBe(true);
      expect(validateEmail("user.name@domain.co.uk")).toBe(true);
      expect(validateEmail("test+tag@example.org")).toBe(true);
    });

    it("should return false for invalid email addresses", () => {
      expect(validateEmail("")).toBe(false);
      expect(validateEmail("invalid")).toBe(false);
      expect(validateEmail("invalid@")).toBe(false);
      expect(validateEmail("@example.com")).toBe(false);
      expect(validateEmail("test@")).toBe(false);
      expect(validateEmail("test@.com")).toBe(false);
      expect(validateEmail("test@example")).toBe(false);
    });
  });

  describe("validateRequired", () => {
    it("should return true for non-empty strings", () => {
      expect(validateRequired("hello")).toBe(true);
      expect(validateRequired("a")).toBe(true);
      expect(validateRequired("  text  ")).toBe(true);
    });

    it("should return false for empty or whitespace-only strings", () => {
      expect(validateRequired("")).toBe(false);
      expect(validateRequired("   ")).toBe(false);
      expect(validateRequired("\t")).toBe(false);
      expect(validateRequired("\n")).toBe(false);
    });
  });

  describe("validateMinLength", () => {
    it("should return true when string meets minimum length", () => {
      expect(validateMinLength("hello", 5)).toBe(true);
      expect(validateMinLength("hello world", 5)).toBe(true);
      expect(validateMinLength("a", 1)).toBe(true);
    });

    it("should return false when string is shorter than minimum length", () => {
      expect(validateMinLength("hi", 5)).toBe(false);
      expect(validateMinLength("", 1)).toBe(false);
      expect(validateMinLength("abc", 10)).toBe(false);
    });
  });

  describe("formatContactSubject", () => {
    it("should format subject with prefix", () => {
      expect(formatContactSubject("Hello")).toBe(
        "New Contact Form Submission: Hello"
      );
      expect(formatContactSubject("Bug Report")).toBe(
        "New Contact Form Submission: Bug Report"
      );
      expect(formatContactSubject("")).toBe("New Contact Form Submission: ");
    });
  });
});

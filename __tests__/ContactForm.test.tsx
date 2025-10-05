import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

// Mock fetch for these tests
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("ContactForm", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders all form fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("shows validation errors for empty required fields", async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.submit(submitButton.closest("form")!);

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
      expect(screen.getByText("Invalid email address")).toBeInTheDocument(); // Empty email shows invalid message
      expect(screen.getByText("Subject is required")).toBeInTheDocument();
      expect(
        screen.getByText("Message must be at least 10 characters")
      ).toBeInTheDocument();
    });
  });

  it("shows validation error for invalid email", async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message with enough characters" },
    });

    fireEvent.submit(submitButton.closest("form")!);

    await waitFor(() => {
      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    });
  });

  it("submits form successfully with valid data", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "Email sent successfully" }),
    });

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message with enough characters" },
    });

    fireEvent.submit(submitButton.closest("form")!);

    await waitFor(() => {
      expect(
        screen.getByText("Your message was sent successfully!")
      ).toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledWith("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        subject: "Test Subject",
        message: "This is a test message with enough characters",
      }),
    });
  });

  it("shows error message when API call fails", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message with enough characters" },
    });

    fireEvent.submit(submitButton.closest("form")!);

    await waitFor(() => {
      expect(
        screen.getByText("Error sending message. Please try again!")
      ).toBeInTheDocument();
    });
  });

  it("shows loading state during submission", async () => {
    // Create a promise that we can control
    let resolvePromise: (value: Response) => void;
    const promise = new Promise<Response>((resolve) => {
      resolvePromise = resolve;
    });

    mockFetch.mockReturnValueOnce(promise);

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message with enough characters" },
    });

    fireEvent.submit(submitButton.closest("form")!);

    // Check loading state
    await waitFor(() => {
      expect(screen.getByText("Sending...")).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });

    // Resolve the promise
    resolvePromise!({
      ok: true,
      json: async () => ({ message: "Email sent successfully" }),
    } as Response);

    await waitFor(() => {
      expect(
        screen.getByText("Your message was sent successfully!")
      ).toBeInTheDocument();
    });
  });
});

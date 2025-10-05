import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

// Mock next/link
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("Navbar", () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, "scrollY", {
      writable: true,
      value: 0,
    });
  });

  it("renders navigation links", () => {
    render(<Navbar />);

    expect(screen.getByText("Dillon Cleaver")).toBeInTheDocument();
    expect(screen.getByText("👋")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders menu toggle button", () => {
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it("toggles mobile menu when button is clicked", () => {
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    const navLinks = screen.getByRole("list");

    // Initially menu should not be active
    expect(navLinks).not.toHaveClass("active");

    // Click to open menu
    fireEvent.click(menuButton);
    expect(navLinks).toHaveClass("active");

    // Click to close menu
    fireEvent.click(menuButton);
    expect(navLinks).not.toHaveClass("active");
  });

  it("closes mobile menu when nav link is clicked", () => {
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    const aboutLink = screen.getByText("About");
    const navLinks = screen.getByRole("list");

    // Open menu
    fireEvent.click(menuButton);
    expect(navLinks).toHaveClass("active");

    // Click nav link should close menu
    fireEvent.click(aboutLink);
    expect(navLinks).not.toHaveClass("active");
  });

  it("adds scrolled class when scrolled", () => {
    render(<Navbar />);

    const navbar = screen.getByRole("navigation");

    // Initially should not have scrolled class
    expect(navbar).not.toHaveClass("scrolled");

    // Simulate scroll
    Object.defineProperty(window, "scrollY", {
      writable: true,
      value: 100,
    });

    fireEvent.scroll(window);

    expect(navbar).toHaveClass("scrolled");
  });

  it("removes scrolled class when scroll position is less than 50", () => {
    render(<Navbar />);

    const navbar = screen.getByRole("navigation");

    // Simulate scroll down
    Object.defineProperty(window, "scrollY", {
      writable: true,
      value: 100,
    });
    fireEvent.scroll(window);
    expect(navbar).toHaveClass("scrolled");

    // Simulate scroll back to top
    Object.defineProperty(window, "scrollY", {
      writable: true,
      value: 0,
    });
    fireEvent.scroll(window);
    expect(navbar).not.toHaveClass("scrolled");
  });

  it("has correct navigation links with href attributes", () => {
    render(<Navbar />);

    const aboutLink = screen.getByText("About").closest("a");
    const projectsLink = screen.getByText("Projects").closest("a");
    const contactLink = screen.getByText("Contact").closest("a");

    expect(aboutLink).toHaveAttribute("href", "#about");
    expect(projectsLink).toHaveAttribute("href", "#projects");
    expect(contactLink).toHaveAttribute("href", "#contact");
  });
});

import {
  projects,
  type Project,
  type Section,
  type ContentItem,
  type Link,
} from "@/data/projects";

describe("Projects Data", () => {
  it("should have valid structure", () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it("should have projects with required fields", () => {
    projects.forEach((project: Project) => {
      expect(typeof project.title).toBe("string");
      expect(project.title.length).toBeGreaterThan(0);
      expect(Array.isArray(project.sections)).toBe(true);
      expect(project.sections.length).toBeGreaterThan(0);
    });
  });

  it("should have sections with valid structure", () => {
    projects.forEach((project: Project) => {
      project.sections.forEach((section: Section) => {
        expect(typeof section.heading).toBe("string");
        expect(section.heading.length).toBeGreaterThan(0);
        expect(Array.isArray(section.content)).toBe(true);
        expect(section.content.length).toBeGreaterThan(0);
      });
    });
  });

  it("should have content items with valid structure", () => {
    projects.forEach((project: Project) => {
      project.sections.forEach((section: Section) => {
        section.content.forEach((item: ContentItem) => {
          expect(typeof item.subheading).toBe("string");
          expect(item.subheading.length).toBeGreaterThan(0);

          // Content is optional but if present should be string
          if (item.content) {
            expect(typeof item.content).toBe("string");
          }

          // List is optional but if present should be array
          if (item.list) {
            expect(Array.isArray(item.list)).toBe(true);
            item.list.forEach((listItem) => {
              expect(typeof listItem).toBe("string");
            });
          }

          // Links are optional but if present should be valid
          if (item.links) {
            expect(Array.isArray(item.links)).toBe(true);
            item.links.forEach((link: Link) => {
              expect(typeof link.text).toBe("string");
              expect(typeof link.url).toBe("string");
              expect(link.url).toMatch(/^https?:\/\//);

              if (link.icon) {
                expect(["project", "design", "code", "github"]).toContain(
                  link.icon
                );
              }
            });
          }
        });
      });
    });
  });

  it("should have NerdWord project with expected content", () => {
    const nerdWordProject = projects.find((p) => p.title === "NerdWord");
    expect(nerdWordProject).toBeDefined();

    if (nerdWordProject) {
      expect(nerdWordProject.sections.length).toBeGreaterThan(2);

      // Check for expected sections
      const sectionTitles = nerdWordProject.sections.map((s) => s.heading);
      expect(sectionTitles).toContain("Introduction");
      expect(sectionTitles).toContain("Purpose and Goal");
      expect(sectionTitles).toContain("Spotlight");
      expect(sectionTitles).toContain("Lessons Learned");
    }
  });

  it("should have Portfolio Website project with expected content", () => {
    const portfolioProject = projects.find(
      (p) => p.title === "Portfolio Website"
    );
    expect(portfolioProject).toBeDefined();

    if (portfolioProject) {
      expect(portfolioProject.sections.length).toBeGreaterThan(1);

      // Check for expected sections
      const sectionTitles = portfolioProject.sections.map((s) => s.heading);
      expect(sectionTitles).toContain("Introduction");
      expect(sectionTitles).toContain("Spotlight");
      expect(sectionTitles).toContain("Lessons Learned");
    }
  });
});

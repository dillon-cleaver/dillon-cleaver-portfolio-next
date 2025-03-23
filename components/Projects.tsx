import styles from "./Projects.module.css";

interface Link {
  text: string;
  url: string;
}

interface ContentItem {
  subheading: string;
  content?: string;
  list?: string[];
  links?: Link[];
}

interface Section {
  heading: string;
  content: ContentItem[];
}

interface Project {
  title: string;
  sections: Section[];
}

// Define your actual projects here
const projects: Project[] = [
  {
    title: "Project 1",
    sections: [
      {
        heading: "Introduction",
        content: [
          {
            subheading: "Overview",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
          },
          {
            subheading: "Core Functionalities",
            list: [
              "Feature one with detailed explanation",
              "Feature two with implementation details",
              "Feature three showcasing technical skills",
            ],
          },
          {
            subheading: "My Role",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
          },
          {
            subheading: "Technologies Used",
            list: ["React.js", "Node.js", "Express", "MongoDB", "TypeScript"],
          },
          {
            subheading: "Links",
            links: [
              { text: "Live Demo", url: "#" },
              { text: "Source Code", url: "#" },
            ],
          },
        ],
      },
      {
        heading: "Purpose and Goal",
        content: [
          {
            subheading: "Overview",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
          },
          {
            subheading: "Background",
            content:
              "Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
          },
          {
            subheading: "Initial Designs",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
          },
          {
            subheading: "Planning Process",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
          },
        ],
      },
      {
        heading: "Spotlight",
        content: [
          {
            subheading: "Overview",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
          },
          {
            subheading: "Killer Feature",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
            list: [
              "Technical detail one",
              "Technical detail two",
              "Technical detail three",
            ],
          },
          {
            subheading: "Technical Hurdles",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
          },
          {
            subheading: "Solutions",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
          },
        ],
      },
      {
        heading: "Lessons Learned",
        content: [
          {
            subheading: "Overview",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
          },
          {
            subheading: "Technical Takeaways",
            list: [
              "Lesson one with detailed explanation",
              "Lesson two with implementation insights",
              "Lesson three showcasing growth",
            ],
          },
          {
            subheading: "Framework Evaluation",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
          },
          {
            subheading: "Accessibility Considerations",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
          },
          {
            subheading: "Impact on Future Work",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
          },
        ],
      },
    ],
  },
  // Add more projects here as needed
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>Projects</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <h3>{project.title}</h3>

              {project.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className={styles.section}>
                  <h4>{section.heading}</h4>

                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.subsection}>
                      <h5>{item.subheading}</h5>

                      {item.content && <p>{item.content}</p>}

                      {item.list && (
                        <ul>
                          {item.list.map((listItem, listIndex) => (
                            <li key={listIndex}>{listItem}</li>
                          ))}
                        </ul>
                      )}

                      {item.links && (
                        <div className={styles.links}>
                          {item.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.link}
                            >
                              {link.text}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

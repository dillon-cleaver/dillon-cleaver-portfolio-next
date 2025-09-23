"use client";

import styles from "./Projects.module.css";
import ProjectsIcon from "./icons/ProjectsIcon";
import DesignIcon from "./icons/DesignIcon";
import CodeIcon from "./icons/CodeIcon";
import GitHubIcon from "./icons/GitHubIcon";
import { projects } from "../data/projects";

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
                          {item.links.map((link, linkIndex) => {
                            const IconComponent =
                              link.icon === "project"
                                ? ProjectsIcon
                                : link.icon === "design"
                                ? DesignIcon
                                : link.icon === "code"
                                ? CodeIcon
                                : link.icon === "github"
                                ? GitHubIcon
                                : null;

                            // TODO: Refactor IconComponent by creating a dedicated, reusable, and polymorphic component for icon rendering, props, accessibility, and styling. Consider centralizing icon logic, supporting dynamic icon selection, sizing, ARIA attributes, and polymorphic rendering.

                            return (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                              >
                                {IconComponent && (
                                  <IconComponent
                                    className={styles.icon}
                                    width={16}
                                    height={16}
                                  />
                                )}
                                {link.text}
                              </a>
                            );
                          })}
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

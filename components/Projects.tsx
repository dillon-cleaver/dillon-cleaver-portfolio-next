"use client";

import styles from "./Projects.module.css";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import DesignIcon from "./icons/DesignIcon";
import CodeIcon from "./icons/CodeIcon";

interface Link {
  text: string;
  url: string;
  icon?: "external" | "design" | "code";
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
    title: "NerdWord",
    sections: [
      {
        heading: "Introduction",
        content: [
          {
            subheading: "Overview",
            content:
              "NerdWord is a Wordle-style word guessing game focused on nerdy topics including movies, science, video games, literature, superheroes, board games, anime & manga, fantasy & sci-fi, and tech & internet culture. It's built with React Native and Expo for cross-platform compatibility.",
          },
          {
            subheading: "Core Functionalities",
            list: [
              "Daily Themed Puzzles - New word puzzles each day from different nerdy categories",
              "Collectable WordCards - Each solved word becomes a digital flash card with detailed information, hints, and Wikipedia links for learning",
              "Progressive Hint System - Daily hints available when stuck, with Wikipedia links for deeper learning",
              "CDN-First Word Loading - Optimized word dictionary system with instant updates via CDN without app redeployment",
              "3,800+ Word Database - Curated mix of common words (98%) and nerdy terms to create engaging gameplay progression",
              "Offline Support - Full gameplay available without internet connection",
            ],
          },
          {
            subheading: "My Role",
            content:
              "As the developer of NerdWord, I architected and implemented the entire application including:",
            list: [
              "Frontend React Native/Expo development with TypeScript",
              "Backend Firebase Functions API development",
              "CDN-optimized word management system with auto-versioning",
              "Cross-platform deployment pipeline using Expo EAS",
              "Performance optimizations reducing bundle size by 243KB through CDN-first architecture",
              "Curated 3,800+ word database with strategic mix of common and nerdy terms for optimal gameplay",
            ],
          },
          {
            subheading: "Technologies Used",
            list: [
              "React Native ✓ (Cross-platform mobile and web)",
              "Node.js ✓ (Firebase Functions backend)",
              "Express ✓ (Backend API routing)",
              "Firestore ✓ (NoSQL database)",
              "TypeScript ✓",
            ],
          },
          {
            subheading: "Additional Technologies",
            list: [
              "React Native & Expo - Cross-platform mobile development with Expo Router",
              "Firebase - Backend services (Functions, Firestore, Auth, Hosting)",
              "CDN Architecture - Auto-versioned word dictionary with aggressive browser caching",
              "EAS Build/Update - Deployment and over-the-air updates",
              "Jest - Testing framework for component and logic validation",
            ],
          },
          {
            subheading: "Links",
            links: [
              {
                text: "Live Demo",
                url: "https://nerd-word.expo.app/",
                icon: "external",
              },
              {
                text: "Source Code",
                url: "https://github.com/dillon-cleaver/nerd-wordle",
                icon: "code",
              },
              {
                text: "Design System",
                url: "https://www.figma.com/design/Sxjpz6GMvd2UjRzfQteCCY/nerd-words-design?node-id=0-1&t=3lBAlGNNTBJtHIsy-1",
                icon: "design",
              },
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
              "NerdWord was created to combine the addictive gameplay of Wordle with educational content focused on nerd culture. The goal was to create a learning tool disguised as entertainment, where players discover new concepts from science, technology, gaming, and pop culture through gameplay.",
          },
          {
            subheading: "Background",
            content:
              "Inspired by the original Wordle's viral success, I wanted to create a variant that would appeal to tech enthusiasts, gamers, and pop culture fans while providing educational value. The challenge was balancing familiar gameplay with curated content that would introduce players to new concepts and vocabulary from nerdy domains.",
          },
          {
            subheading: "Initial Designs",
            content:
              "The initial design focused on replicating Wordle's core mechanics while adding category-based theming and educational features. Key design decisions included implementing a hint system, Wikipedia integration for learning, and a collectable card system to encourage exploration of the full word database.",
          },
          {
            subheading: "Planning Process",
            content:
              "Development was planned around three core pillars: engaging gameplay (daily puzzles with hints), educational value (detailed word information and Wikipedia links), and technical innovation (CDN-first architecture for instant content updates). The architecture was designed to support rapid content expansion without requiring app store updates.",
          },
        ],
      },
      {
        heading: "Spotlight",
        content: [
          {
            subheading: "Overview",
            content:
              "The standout feature of NerdWord is its innovative CDN-first word loading architecture, which eliminated 243KB from the app bundle while enabling instant word updates without app redeployment. This technical innovation solved the fundamental problem of content management in word games.",
          },
          {
            subheading: "Killer Feature",
            content:
              "The CDN-first architecture with auto-versioning represents a paradigm shift from traditional app bundle approaches:",
            list: [
              "99.96% reduction in localStorage usage (from 243KB to ~100 bytes metadata)",
              "Auto-versioning system detects content changes via SHA-256 hash and increments versions automatically",
              "Aggressive browser caching with immutable HTTP headers and URL-based cache busting",
              "Zero Firestore reads for word data, eliminating database costs and latency",
              "Instant word updates delivered via CDN without requiring app store approval",
            ],
          },
          {
            subheading: "Technical Hurdles",
            content:
              "The main challenge was balancing performance, reliability, and developer experience. Initial approaches using Firestore generated 101,000+ reads and significant costs. The localStorage-heavy approach caused memory issues on mobile devices. Finding the optimal architecture required iterating through multiple solutions while maintaining backwards compatibility.",
          },
          {
            subheading: "Solutions",
            content:
              "The final CDN-first solution leverages browser cache efficiency, HTTP headers, and URL versioning for cache busting. Metro bundler configuration excludes word data from the app bundle, while the auto-versioning system ensures users get new content on their next session. Fallback mechanisms ensure reliability even when CDN requests fail.",
          },
        ],
      },
      {
        heading: "Lessons Learned",
        content: [
          {
            subheading: "Overview",
            content:
              "Building NerdWord reinforced core architectural principles I've applied across multiple React Native projects over the past four years. The CDN-first approach validates my experience that infrastructure decisions drive performance more than code-level optimizations - a lesson learned from shipping apps at scale for portfolio companies at SecretLab.",
          },
          {
            subheading: "Technical Takeaways",
            list: [
              "Validated my approach of treating static data as infrastructure, not application state - CDN delivery eliminated operational costs while improving UX",
              "Confirmed browser cache strategies I've used in production apps - immutable URLs with proper HTTP headers consistently outperform application-level caching",
              "Applied proven React Context optimization patterns to prevent render cascades - techniques I've refined across multiple large-scale apps",
              "Leveraged Expo's strengths while working around platform limitations - knowledge gained from shipping both bare React Native and Expo apps to production",
              "Implemented accessibility-first development practices I've established as standard - WCAG compliance built into component architecture from day one",
            ],
          },
          {
            subheading: "Framework Evaluation",
            content:
              "This project confirmed my framework selection criteria developed over 4+ years shipping React Native apps professionally. I chose this specific stack - React Native/Expo with Firebase - because it's the same technology combination I've used extensively in my professional work, from early-stage portfolio companies to production apps serving thousands of users. Expo's developer experience and EAS deployment pipeline align with rapid iteration needs, while still providing escape hatches for native optimization when required. The serverless Firebase architecture scales predictably - important for portfolio company work where growth trajectories vary dramatically. Building NerdWord with this proven professional stack allowed me to focus on product features rather than learning new technologies, while also demonstrating my deep expertise with tools I use daily in client work.",
          },
          {
            subheading: "Accessibility Considerations",
            content:
              "Applied my established accessibility implementation strategy - keyboard navigation, focus management, and ARIA labels designed into the component architecture rather than added later. This approach, refined across multiple production apps, ensures compliance without retrofitting costs and provides consistent UX patterns that users can rely on.",
          },
          {
            subheading: "Impact on Future Work",
            content:
              "This project validates architectural patterns I'll continue applying to client work - particularly the CDN-first content strategy for apps requiring frequent updates without app store dependency. While this React Native/Firebase stack has proven highly effective for rapid development and scaling, I'm planning to explore SQL backends in future projects to broaden my skillset and leverage the benefits of relational databases: ACID compliance for complex transactions, mature query optimization, better data integrity constraints, and more predictable performance characteristics for data-heavy applications. The detailed analytics and user behavior tracking demonstrate the type of data-driven approach I bring to product development decisions.",
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
                          {item.links.map((link, linkIndex) => {
                            const IconComponent =
                              link.icon === "external"
                                ? ExternalLinkIcon
                                : link.icon === "design"
                                ? DesignIcon
                                : link.icon === "code"
                                ? CodeIcon
                                : null;

                            return (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                              >
                                {IconComponent && (
                                  <IconComponent width={16} height={16} />
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

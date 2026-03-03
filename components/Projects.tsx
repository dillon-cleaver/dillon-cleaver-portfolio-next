'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Projects.module.css';
import ProjectsIcon from './icons/ProjectsIcon';
import DesignIcon from './icons/DesignIcon';
import CodeIcon from './icons/CodeIcon';
import GitHubIcon from './icons/GitHubIcon';
import { projects, type Section } from '../data/projects';

function renderIcon(icon: string | undefined) {
  switch (icon) {
    case 'project':
      return ProjectsIcon;
    case 'design':
      return DesignIcon;
    case 'code':
      return CodeIcon;
    case 'github':
      return GitHubIcon;
    default:
      return null;
  }
}

function CollapsibleSection({ section }: { section: Section }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.collapsibleRoot}>
      <button
        className={styles.sectionTrigger}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {section.heading}
        <svg
          className={`${styles.chevron}${open ? ` ${styles.chevronOpen}` : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      <div
        className={`${styles.sectionPanel}${open ? ` ${styles.sectionPanelOpen}` : ''}`}
        aria-hidden={open ? undefined : true}
      >
        <div className={styles.sectionPanelInner}>
          {section.content.map((item, i) => (
            <div key={i} className={styles.subsection}>
              {item.subheading && (
                <h5 className={styles.subsectionHeading}>{item.subheading}</h5>
              )}
              {item.content && <p>{item.content}</p>}
              {item.list && (
                <ul>
                  {item.list.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [trackHeight, setTrackHeight] = useState<number | undefined>(undefined);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const slide = slideRefs.current[index];
    if (slide) {
      setTrackHeight(slide.scrollHeight);
    }
  }, [index]);

  useEffect(() => {
    const slide = slideRefs.current[index];
    if (!slide) return;

    const observer = new ResizeObserver(() => {
      setTrackHeight(slide.scrollHeight);
    });
    observer.observe(slide);
    return () => observer.disconnect();
  }, [index]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(projects.length - 1, i + 1));

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
    touchStartX.current = null;
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>Projects</h2>

        <div
          className={styles.carouselWrapper}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
          aria-label="Projects carousel"
        >
          {/* Slides track */}
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${index * 100}%)`,
              height: trackHeight ? `${trackHeight}px` : undefined,
            }}
          >
            {projects.map((project, slideIndex) => {
              // Collect all links from all sections
              const allLinks = project.sections.flatMap((s) =>
                s.content.flatMap((c) => c.links ?? [])
              );

              const primaryLink =
                allLinks.find((link) => link.icon === 'code') ?? allLinks[0];

              // Find the first Overview content item
              const overviewItem = project.sections
                .flatMap((s) => s.content)
                .find((c) => c.subheading === 'Overview');

              // Sections to show as collapsibles: filter out link-only and
              // the introduction overview item (shown inline above)
              const collapsibleSections: Section[] = project.sections
                .map((section) => ({
                  ...section,
                  content: section.content.filter(
                    (item) =>
                      !item.links &&
                      !(
                        item.subheading === 'Overview' &&
                        section.heading === 'Introduction'
                      )
                  ),
                }))
                .filter((section) => section.content.length > 0);

              const imageContent = (
                <>
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.projectImage}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          'none';
                        (
                          e.currentTarget.nextElementSibling as HTMLElement
                        ).style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className={styles.imagePlaceholder}
                    style={{ display: project.image ? 'none' : 'flex' }}
                    aria-hidden="true"
                  >
                    {project.title}
                  </div>
                </>
              );

              return (
                <div
                  key={slideIndex}
                  ref={(el) => {
                    slideRefs.current[slideIndex] = el;
                  }}
                  className={styles.slide}
                >
                  {/* Full-width header */}
                  <div className={styles.slideHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>

                    {/* Links row */}
                    {allLinks.length > 0 && (
                      <div className={styles.links}>
                        {allLinks.map((link, li) => {
                          const IconComponent = renderIcon(link.icon);
                          return (
                            <a
                              key={li}
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

                  {/* Left: image pane */}
                  <div className={styles.imagePane}>
                    {primaryLink ? (
                      <a
                        href={primaryLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.imageLink}
                        aria-label={`Open ${project.title}`}
                      >
                        {imageContent}
                      </a>
                    ) : (
                      imageContent
                    )}
                  </div>

                  {/* Right: text pane */}
                  <div className={styles.textPane}>
                    {/* Overview */}
                    {overviewItem?.content && (
                      <p className={styles.overview}>{overviewItem.content}</p>
                    )}

                    {/* Collapsible sections */}
                    <div className={styles.collapsibles}>
                      {collapsibleSections.map((section, si) => (
                        <CollapsibleSection key={si} section={section} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls: arrows + dots */}
        <div className={styles.controls}>
          <button
            className={styles.arrowBtn}
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.dots} role="tablist" aria-label="Projects">
            {projects.map((project, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to project: ${project.title}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>

          <button
            className={styles.arrowBtn}
            onClick={next}
            disabled={index === projects.length - 1}
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

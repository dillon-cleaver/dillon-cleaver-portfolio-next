'use client';

import Image from 'next/image';
import styles from './AboutMe.module.css';
import profilePic from '@/assets/dillon-sept-23.jpg';
import profilePic2 from '@/assets/dillon-sept-23-2.jpg';
import { useState } from 'react';

export default function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Full Stack Engineer</h1>
            <p>
              Hi, I&apos;m Dillon! I&apos;m a Full Stack Engineer with over four
              years of experience building high-performing, cross-platform apps
              for iOS, Android, and web. Frontend-focused and grounded in strong
              UX/UI principles, I specialize in React, React Native, TypeScript,
              JavaScript (ES6+), Expo, and Next.js. Skilled with SQL, Supabase,
              NoSQL, Firebase, and Google Cloud Platform.
            </p>

            {/* Paragraphs 2–4: collapsed on mobile, always visible on desktop */}
            <div
              id="about-extra"
              className={`${styles.extraText}${expanded ? ` ${styles.extraTextOpen}` : ''}`}
            >
              <div className={styles.extraTextInner}>
                <p>
                  I&apos;ve contributed to successful App Store and Google Play
                  launches in health-tech and e-commerce, including products
                  featuring AI-powered capabilities through the OpenAI API.
                  Proficient in modern state management with Context API, Redux,
                  and Jotai, and experienced in developing and integrating
                  component libraries such as shadcn/ui. Comfortable across the
                  stack with Node.js, Express, RESTful and GraphQL APIs, and
                  experienced in building CI/CD pipelines and test suites using
                  Jest, React Testing Library, Cypress, and GitHub Actions.
                </p>
                <p>
                  Design-minded and user-experience-focused, I serve as a strong
                  design and product collaborator — proficient in Figma,
                  translating wireframes into high-fidelity interfaces, and
                  turning polished designs into pixel-perfect, performant code
                  that aligns seamlessly with the intended user experience.
                </p>
                <p>
                  I bring over fifteen years of diverse experience spanning
                  software engineering, retail, food service, content creation
                  (writing, video, design), and volunteer work in education and
                  activism. Passionate about travel, reading, film, gaming,
                  sports, and lifelong learning ✨
                </p>
              </div>
            </div>

            {/* Toggle button — always at the bottom, hidden on desktop via CSS */}
            <button
              className={styles.readMoreBtn}
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              aria-controls="about-extra"
            >
              <svg
                className={`${styles.readMoreChevron}${expanded ? ` ${styles.readMoreChevronOpen}` : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.decorTopRight}></div>
            <div className={styles.decorTopLeft}></div>
            <div className={styles.decorBottomRight}></div>
            <div className={styles.decorBottomLeft}></div>
            <div className={styles.decorLeft}></div>
            <div className={styles.decorRight}></div>
            <div
              className={styles.imageFrame}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={profilePic}
                alt="Dillon Cleaver profile picture"
                width={500}
                height={300}
                className={`${styles.image} ${isHovered ? styles.fadeOut : ''}`}
              />
              <Image
                src={profilePic2}
                alt="Dillon Cleaver profile picture alternate"
                width={500}
                height={300}
                className={`${styles.image} ${styles.secondImage} ${
                  isHovered ? styles.fadeIn : ''
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

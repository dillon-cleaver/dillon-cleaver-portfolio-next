'use client';

import Image from 'next/image';
import styles from './AboutMe.module.css';
import profilePic from '@/assets/dillon-sept-23.jpg';
import profilePic2 from '@/assets/dillon-sept-23-2.jpg';
import { useState } from 'react';

export default function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Frontend Engineer</h1>
            <p>
              Hi, I&apos;m Dillon! I&apos;m a frontend-focused software engineer
              with over three years of experience building engaging, intuitive,
              and accessible cross-platform applications for iOS, Android, and
              the web
            </p>
            <p>
              I specialize in crafting high-performance user experiences using
              React Native, React, TypeScript, JavaScript (ES6+), Node.js,
              Redux, RESTful APIs, Firebase, and the Expo framework. With a
              strong foundation in UI/UX principles and experience with tools
              like Figma, I excel at collaborating with designers and project
              managers within agile environments (using GitHub and CI/CD
              practices) to bring ideas to life.
            </p>
            <p>
              My technical expertise is enriched by a diverse background
              spanning 15+ years in retail, food service, freelance writing,
              content creation, and IT support, providing a unique perspective
              on user needs. Volunteer roles as a counselor, educator,
              treasurer, and activist further shape my collaborative approach.
            </p>
            <p>
              I&apos;m a native English speaker with conversational German
              (B2.2), an avid traveler, reader, cinema lover, gamer, sports
              enthusiast, and a dedicated lifelong learner, always seeking new
              challenges and opportunities for growth ✨
            </p>
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

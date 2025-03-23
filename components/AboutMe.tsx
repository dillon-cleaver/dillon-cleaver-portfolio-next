"use client";

import Image from "next/image";
import styles from "./AboutMe.module.css";
import profilePic from "@/assets/dillon-sept-23.jpg";
import profilePic2 from "@/assets/dillon-sept-23-2.jpg";
import { useState } from "react";

export default function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Frontend Developer</h1>
            <p>
              Hi, I&apos;m Dillon! I&apos;m a frontend developer with a strong
              UI/UX sense, focused on building engaging web and mobile
              applications. With years of experience developing cross-platform
              apps for iOS, Android, and the web using React Native and the Expo
              framework, I thrive on crafting intuitive, high-performance user
              experiences.
            </p>
            <p>
              I&apos;m proficient in React Native, React, TypeScript, JavaScript
              (ES6+), Node.js, Redux, RESTful APIs, Firebase, and Expo. I also
              have a solid foundation in UX/UI design, Figma, and wireframing,
              collaborating seamlessly with designers and project managers to
              bring ideas to life.
            </p>
            <p>
              Beyond tech, my background spans 15+ years in retail, food
              service, freelance writing, and content creation, along with
              volunteer roles as a counselor, educator, treasurer, and activist.
              I&apos;m a native English speaker with conversational German
              (B2.2) and an avid traveler, reader, cinema lover, gamer, sports
              enthusiast, and lifelong learner.
            </p>
            <p>
              Currently, I&apos;m a full-stack software engineer at SecretLab in
              Minneapolis, Minnesota. Even with a full-time role, I make time
              for personal projects and continuous learning—always seeking new
              challenges and opportunities to grow.
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
                className={`${styles.image} ${isHovered ? styles.fadeOut : ""}`}
              />
              <Image
                src={profilePic2}
                alt="Dillon Cleaver profile picture alternate"
                width={500}
                height={300}
                className={`${styles.image} ${styles.secondImage} ${
                  isHovered ? styles.fadeIn : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

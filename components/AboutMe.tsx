"use client";

import Image from "next/image";
import styles from "./AboutMe.module.css";
import profilePic from "@/assets/dillon-sept-23.jpg";

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Frontend Developer</h1>
            <p>
              Frontend Developer with a strong focus on creating engaging,
              cross-platform mobile applications for iOS, Android, and web.
              Proficient in React Native, React, TypeScript, JavaScript (ES6+),
              Node.js, Redux, RESTful APIs, Firebase, and the Expo framework.
              Experienced in UX/UI design, Figma, and wire-framing, with a
              proven track record of collaborating effectively with designers
              and project managers to deliver high-quality digital products.
            </p>
            <p>
              Dynamic and diverse background also includes over 15 years
              additional experience in retail, food service, freelance writing,
              and content creation, alongside volunteer roles as a counselor,
              educator, treasurer, and activist. Native English speaker with
              conversational proficiency in German (B2.2). Passionate traveler,
              reader, cinema lover, gamer, sports enthusiast, and committed
              lifelong learner.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <Image
                src={profilePic}
                alt="Dillon Cleaver profile picture"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Frontend Developer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget
              aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies
              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet
              nisl.
            </p>
            <p>
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
              eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
              ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl
              sit amet nisl.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Dillon Cleaver"
                width={400}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

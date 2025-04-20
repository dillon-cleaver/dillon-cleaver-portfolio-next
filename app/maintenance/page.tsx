import styles from "./maintenance.module.css";

export default function MaintenancePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Under Maintenance</h1>
        <p className={styles.description}>
          I&apos;m currently performing some maintenance while finishing up an
          exciting new project. Please check back soon! ✨
        </p>
      </div>
    </div>
  );
}

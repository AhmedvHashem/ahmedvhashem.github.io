import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/" rel="noopener noreferrer">
          <p>Ahmed Hashem | أحمد هاشم</p>
        </a>
        <a
          href="https://adplist.org/mentors/ahmed-hashem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Book a free mentor session </p>
        </a>
      </div>

      <div className={styles.center}>
        <Image
          src="/hashem.jpeg"
          alt="Avatar"
          width={256}
          height={256}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.facebook.com/AhmedvHashem"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.svg"
            alt="Facebook Logo"
            className={styles.sociallogo}
            width={48}
            height={48}
            priority
          />
        </a>

        <a
          href="https://www.twitter.com/AhmedvHashem"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/twitter.svg"
            alt="Twitter Logo"
            className={styles.sociallogo}
            width={48}
            height={48}
            priority
          />
        </a>

        <a
          href="https://www.linkedin.com/in/AhmedvHashem"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.svg"
            alt="Linkedin Logo"
            className={styles.sociallogo}
            width={48}
            height={48}
            priority
          />
        </a>

        <a
          href="https://www.github.com/AhmedvHashem"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.svg"
            alt="Github Logo"
            className={styles.sociallogo}
            width={48}
            height={48}
            priority
          />
        </a>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ReviewsModal from "@/app/reviews";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <a href="/" rel="noopener noreferrer">
            Ahmed Hashem | أحمد هاشم
          </a>
          <br />
          <strong>Lead Software Engineer</strong>
        </p>

        <p>
          <a
            href="https://adplist.org/mentors/ahmed-hashem"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a free mentor session
          </a>
          <br />
          <ReviewsModal />
        </p>
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
        {/* <a
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
        </a> */}

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
          href="https://www.medium.com/@AhmedvHashem"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/medium.svg"
            alt="Medium Logo"
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

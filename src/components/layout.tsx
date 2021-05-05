import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const name = "Rodentman87";
export const siteTitle = "Dinos are kinda cool";

const item = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { opacity: 0, y: -50 },
};

export default function Layout({
  children,
  home,
}: {
  children: any;
  home?: any;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Maisy's personal website." />
        <meta property="og:image" content={`/craig.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={home ? styles.header : styles.headerPost}>
        {home ? (
          <>
            <motion.img
              layoutId="headersvg"
              src="/craig.svg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
              width={144}
              height={144}
            />
            <motion.h1 layoutId="headername" className={utilStyles.heading2Xl}>
              {name}
            </motion.h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <motion.img
                  layoutId="headersvg"
                  src="/craig.svg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                  width={108}
                  height={108}
                />
              </a>
            </Link>
            <motion.h2 layoutId="headername" className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </motion.h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
        <motion.div
          className={styles.footer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} custom={0}>
            <SocialIcon url="https://twitter.com/rodentman87" />
          </motion.div>
          <motion.div variants={item} custom={1}>
            <SocialIcon url="https://github.com/Rodentman87" />
          </motion.div>
          <motion.div variants={item} custom={2}>
            <SocialIcon url="mailto:maisy@likesdinosaurs.com" />
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { name } from "./layout";

const item = {
	visible: ({ i, shouldReduceMotion }) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
		},
	}),
	hidden: ({ i, shouldReduceMotion }) =>
		shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -50 },
};

export default function LessonLayout({
	children,
	course,
}: {
	children: any;
	course: string;
}) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="og:color" content="#FDF6E3" />
			</Head>
			<header className={styles.headerPost}>
				<Link href="/">
					<motion.img
						layoutId="headersvg"
						src="/maisy-mask.jpg"
						className={`${styles.headerImage} ${utilStyles.borderCircle}`}
						alt={name}
						width={108}
						height={108}
					/>
				</Link>
				<motion.h2 layoutId="headername" className={utilStyles.headingLg}>
					<Link href="/" className={utilStyles.colorInherit}>
						{name}
					</Link>
				</motion.h2>
			</header>
			<main>{children}</main>
			<div className={styles.backToHome}>
				<Link href={`/lessons/${course}`}>← Back to course</Link>
			</div>

			<footer>
				<motion.div
					className={styles.footer}
					initial="hidden"
					animate="visible"
				>
					<motion.div variants={item} custom={{ i: 0, shouldReduceMotion }}>
						<SocialIcon url="https://twitter.com/rodentman87" />
					</motion.div>
					<motion.div variants={item} custom={{ i: 1, shouldReduceMotion }}>
						<SocialIcon url="https://github.com/Rodentman87" />
					</motion.div>
					<motion.div variants={item} custom={{ i: 2, shouldReduceMotion }}>
						<SocialIcon url="mailto:maisy@likesdinosaurs.com" />
					</motion.div>
					<motion.div variants={item} custom={{ i: 3, shouldReduceMotion }}>
						<SocialIcon
							network="discord"
							bgColor="#5865F2"
							url="https://discord.likesdinosaurs.com"
						/>
					</motion.div>
				</motion.div>
			</footer>
		</div>
	);
}
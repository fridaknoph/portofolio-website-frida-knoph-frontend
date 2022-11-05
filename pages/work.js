import Head from "next/head";
import Nav from "../componments/Nav";
import Image from "next/image";
import Footer from "../componments/Footer";
import styles from "../styles/Work.module.css";
import Link from "next/link";
import Socials from "../componments/Socials";

export default function Work() {
  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <Nav></Nav>

      <div className={styles.main_container}>
        <h1>My earlier work</h1>

        <div>Here are some of my earlier projects.</div>

        <h1>Project Exam</h1>
        <div>..</div>
      </div>
      <Socials />
      <Footer></Footer>
    </div>
  );
}

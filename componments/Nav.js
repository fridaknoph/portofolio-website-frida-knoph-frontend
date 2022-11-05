import Link from "next/link";
import styles from "../styles/Nav.module.css";
import HamburgerMenu, { Links } from "../pages/utils/hamburgerMenu";

export default function Nav() {
  return (
    <div className={styles.header}>
      <h1 className={styles.home}>
        <Link href="/">
          <a className={styles.a}>Frida Knoph</a>
        </Link>
      </h1>
      <div className="nav__links__row">
        <div className={styles.menu_container}>
          <Link href="/work">
            <a className="a_nav">work</a>
          </Link>
          <Link href="/about">
            <a className="a_nav">about</a>
          </Link>
        </div>
      </div>
      <div className="max-w-full h-12 flex justify-start items-center bg-black mb-4 text-white rounded-md ">
        <div className="hamburger_hidden">
          <HamburgerMenu />
          <div className="links_hidden">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}

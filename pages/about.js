import Head from "next/head";
import Nav from "../componments/Nav";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../componments/Footer";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { server } from "../config/index";

export default function About({ abouts }) {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Nav></Nav>

      <div className="main_container_about">
        <img
          src="https://www.frontstudent.com/portofolio/aboutimg.png"
          className="about_img"
        ></img>
        <div>
          <h1 className="h1">About Me.</h1>
          {abouts.data.map((about) => (
            <>
              <h2>{about.attributes.name}</h2>
              <div>{about.attributes.bio}</div>
              <div className="img__wrapper"></div>
            </>
          ))}
        </div>
      </div>
      <div className="links">
        <Link href="/CV.pdf" target="_blank">
          <a className="a_cv">download my cv here (pdf)</a>
        </Link>

        <Link href="mailto: fridaknoph@gmail.com">
          <a className="social_link">
            <MailOutlineIcon />
          </a>
        </Link>
        <Link href="https://www.instagram.com/midtsommar/">
          <a className="social_link">
            <InstagramIcon className="social_link" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/frida-knoph-ellefsen-658446200/">
          <a className="social_link">
            <LinkedInIcon className="social_link" />
          </a>
        </Link>
        <Link href="https://github.com/fridaknoph">
          <a className="social_link">
            <GitHubIcon className="social_link" />
          </a>
        </Link>
        <Link href="https://www.behance.net/fridaellefsen">
          <a className="social_link">
            <svg
              className="social_link"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#6f72c7"
                d="M8.84 10.835h-1.965v-1.859h1.783c1.878 0 1.646 1.859.182 1.859zm5.789 1.058h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.9.396h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm15.271-.289c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-13.357-.733c1.668-.853 1.607-3.981-1.587-4.028h-4.056v8.73h3.771c3.958 0 3.891-3.967 1.872-4.702zm3.357-3.166h4v-.875h-4v.875zm4.943 3.693c-.545-3.505-6.053-3.711-6.053.872 0 4.526 5.18 3.818 5.949 1.56h-1.848c-.645.748-2.508.531-2.404-1.184h4.41c.009-.555-.009-.953-.054-1.248z"
              />
            </svg>
          </a>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const about_res = await fetch(`${server}/api/abouts?populate=image`);
  const abouts = await about_res.json();

  return {
    props: {
      abouts: abouts,
    },
  };
}

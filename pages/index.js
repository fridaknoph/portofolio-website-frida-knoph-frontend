import Head from "next/head";
import Nav from "../componments/Nav";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../componments/Footer";
import Socials from "../componments/Socials";
import { server } from "../config/index";

export default function Home({ infos }) {
  console.log(infos);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav></Nav>
      <div className="main_container_index">
        <img
          src="https://www.frontstudent.com/portofolio/indeximg.png"
          className="index_img"
        ></img>
        <div className="text_wrapper">
          {infos.data.map((info) => (
            <>
              <h2>{info.attributes.name}</h2>
              <div>{info.attributes.description}</div>
              <div className="img__wrapper"></div>
            </>
          ))}
        </div>
      </div>
      <Socials />
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const info_res = await fetch(`${server}/api/infos?populate=image`);
  const infos = await info_res.json();

  return {
    props: {
      infos: infos,
    },
  };
}

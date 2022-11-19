import styles from "../styles/home.module.css";
import Layout from "../components/layout/layout.js";
import Image from "next/image";
import banner from "../public/pexels-andrea-piacquadio-3768124.jpg";
import nextLogo from "../public/next_logo.svg";
import reactLogo from "../public/react_logo.png";
import cssLogo from "../public/css_logo.svg";
import materialLogo from "../public/material_ui_logo.png";
import ProductSearch from "../components/product-search/product-search";
import { getData } from "./api/products";

export default function Home({ data }) {
  return (
    <Layout>
      <div className={styles["banner-wrapper"]}>
        <Image src={banner} objectFit="cover" layout="fill" />
      </div>
      <div className={styles["home-card-container"]}>
        <ProductSearch data={data} />
        <div className={styles["break"]}></div>
        <div className={styles["section-title"]}>Top deals right now...</div>

        <div className={styles["break"]}></div>

        <div className={styles["card"]}>
          <div className={styles["logo-container"]}>
            <Image src={reactLogo} layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["logo-container"]}>
            <Image src={nextLogo} />
          </div>
        </div>

        <div className={styles["break"]}></div>

        <div className={styles["card"]}>
          <div className={styles["logo-container"]}>
            <Image src={cssLogo} height={200} width={150} />
          </div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["logo-container"]}>
            <Image src={materialLogo} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getData();
  return { props: { data } };
}

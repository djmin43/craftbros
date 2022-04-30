import React from "react";
import KakaoMap from "./KakaoMap";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <section className={styles.main}>
      <header className={styles.header}>
        <p>CRAFTBROS</p>
        <p>BEER MAP</p>
      </header>

      <div className={styles.mapContainer}>
        <KakaoMap />
      </div>
    </section>
  );
};

export default Main;

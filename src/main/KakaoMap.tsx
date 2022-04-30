import React from "react";
import styles from "./Main.module.css";
import { useRef, useEffect } from "react";

const KakaoMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const { kakao }: any = window;
    kakao.maps.load(function () {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      new kakao.maps.Map(mapContainer.current, options);

    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className={styles.map}></div>
    </div>
  );
};

export default KakaoMap;

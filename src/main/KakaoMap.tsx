import React from "react";
import styles from "./Main.module.css";
import { useRef, useEffect } from "react";

const KakaoMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const { kakao }: any = window;
    kakao.maps.load(function () {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      new kakao.maps.Map(mapContainer.current, options); //지도 생성 및 객체 리턴
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className={styles.map}></div>
    </div>
  );
};

export default KakaoMap;

import React from "react";
import styles from "./Main.module.css";
import { useRef, useEffect } from "react";
import ReactDomServer from "react-dom/server";
import Link from "next/link";
import { storeList, StoreInfo } from "./storeList";

const KakaoMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const { kakao }: any = window;
    kakao.maps.load(function () {
      const options = {
        center: new kakao.maps.LatLng(37.5559, 126.9723),
        level: 10,
      };
      const map = new kakao.maps.Map(mapContainer.current, options);

      const storePosition = storeList.map((store: StoreInfo) => {
        return {
          title: store.title,
          latlng: new kakao.maps.LatLng(store.lat, store.lng),
          description: store.description,
          link: `https://map.kakao.com/link/map/${store.storeId}`,
        };
      });

      storePosition.forEach((store: any) => {
        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        const imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: store.latlng, // 마커를 표시할 위치
          title: store.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
          clickable: true,
        });

        var infowindow = new kakao.maps.InfoWindow({
          content: ReactDomServer.renderToString(
            <InfoWindow
              storeName={store.title}
              storeDescription={store.description}
              storeLink={store.link}
            />
          ),
          removable: true,
        });

        kakao.maps.event.addListener(marker, "click", function () {
          infowindow.open(map, marker);
        });
      });
    });
  }, []);

  return <div ref={mapContainer} className={styles.map}></div>;
};

interface InfoWindowProps {
  storeName: string;
  storeDescription: string;
  storeLink: string;
}

const InfoWindow = ({
  storeName,
  storeDescription,
  storeLink,
}: InfoWindowProps) => {
  return (
    <section style={{ padding: "0.5rem 0.5rem 2rem 0.5rem", fontSize: "12px" }}>
      <Link href={storeLink} passHref>
        <a>
          <button>카카오맵열기</button>
        </a>
      </Link>
      <p>{storeName}</p>
      <p>{storeDescription} </p>
    </section>
  );
};

export default KakaoMap;

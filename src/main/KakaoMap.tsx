import React from "react";
import styles from "./Main.module.css";
import { useRef, useEffect } from "react";
import ReactDomServer from "react-dom/server";
import Link from "next/link";

const KakaoMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const { kakao }: any = window;
    kakao.maps.load(function () {
      const options = {
        center: new kakao.maps.LatLng(37.5559, 126.9723),
        level: 9,
      };
      const map = new kakao.maps.Map(mapContainer.current, options);
      const positions = [
        {
          title: "업장1",
          latlng: new kakao.maps.LatLng(37.6559, 126.9723),
          description: "this is store 1",
          link: "https://google.ca",
        },
        {
          title: "업장2",
          latlng: new kakao.maps.LatLng(37.4559, 126.9723),
          description: "this is store 2",
          link: "https://google.ca",
        },
      ];

      positions.forEach((position: any) => {
        var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: position.latlng, // 마커를 표시할 위치
          title: position.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
          clickable: true,
        });

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: ReactDomServer.renderToString(
            <InfoWindow
              storeName={position.title}
              storeDescription={position.description}
              storeLink={position.link}
            />
          ),
          removable: true,
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커 위에 인포윈도우를 표시합니다
          console.log(marker.Gb);
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
    <div className={styles.sample}>
      <Link href={storeLink} passHref>
        <a>
          <h1>{storeName} </h1>
          <p>{storeDescription}</p>
        </a>
      </Link>
    </div>
  );
};

export default KakaoMap;

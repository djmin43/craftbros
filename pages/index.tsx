import type { NextPage } from "next";
import Main from "@src/main";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>크래프트브로스 맥주찾기</title>
        <meta property="og:title" content="크래프트브로스 맥주찾기" />
        <meta
          property="og:description"
          content="내 근처 크래프트브로스 맥주를 찾아보세요!"
        />
        <meta
          property="og:image"
          content="https://img.insight.co.kr/static/2021/09/16/700/img_20210916102528_3fcp35q5.webp"
        />
      </Head>
      <Main />
    </>
  );
};

export default Home;

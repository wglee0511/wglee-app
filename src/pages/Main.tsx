import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

const S = {
  Container: styled.div`
    flex: 1;
    width: 100vw;
    height: 100vh;
    position: relative;
    font-size: 30px;
    font-weight: 700;
  `,
};

const Main = () => {
  const TopNavigation = dynamic(() => import("@/components/TopNavigation"), {
    ssr: false,
  });

  return (
    <S.Container>
      <TopNavigation />
      Main
    </S.Container>
  );
};

export default Main;

import useDeviceSize from "@/hooks/useDeviceSize";
import { COLORS } from "@/style/colors";
import { getColorWithOpacity } from "@/style/utils";
import React from "react";
import styled from "styled-components";

const S = {
  Container: styled.div`
    flex: 1;
    height: 100px;
    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    padding: 16px 10px;
  `,
  Wrapper: styled.div`
    width: 100vw;
  `,
  SmallWrapper: styled.div`
    width: 70vw;
  `,
  CommonStyle: styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 16px 10px;
    background-color: ${getColorWithOpacity(COLORS.gray100, 0.1)};
    border: 2px solid ${COLORS.gray100};
    border-radius: 15px;
    font-size: 30px;
    font-weight: 700;

    cursor: pointer;

    &:hover {
      border: 2px solid ${COLORS.gray700};
      color: ${COLORS.gray700};
    }

    @media (hover: hover) {
      /* when supported */
      a:hover {
        color: white;
        border: 2px solid ${COLORS.gray100};
      }
    }
  `,
};

const TopNavigation = () => {
  const { isDesktop, isMobile } = useDeviceSize();
  console.log("isMobile: ", isMobile);
  console.log("isDesktop: ", isDesktop);
  return (
    <S.Container>
      {isMobile ? (
        <S.Wrapper>
          <S.CommonStyle>
            <div />
            <div>TopNavigation</div>
            <div>Contact</div>
          </S.CommonStyle>
        </S.Wrapper>
      ) : (
        <S.SmallWrapper>
          <S.CommonStyle>
            <div />
            <div>TopNavigation</div>
            <div>Contact</div>
          </S.CommonStyle>
        </S.SmallWrapper>
      )}
    </S.Container>
  );
};

export default TopNavigation;

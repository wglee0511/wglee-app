import useDeviceSize from "@/hooks/useDeviceSize";
import Icon from "@/resource/icons/Icon";
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
    width: 60vw;
  `,
  CommonStyle: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 16px 30px;
    background-color: ${getColorWithOpacity(COLORS.gray600, 0.5)};
    border-radius: 30px;
    font-weight: 700;
  `,

  ContactButton: styled.button`
    background-color: transparent;
    border: none;
    padding: 3px;
    border-radius: 3px;
    cursor: pointer;

    @media (hover: hover) and (pointer: fine) {
      /* when supported */
      &:hover {
        background-color: ${COLORS.gray700};
      }
    }
  `,
};

const TopNavigation = () => {
  const { isMobile } = useDeviceSize();

  return (
    <S.Container>
      {isMobile ? (
        <S.Wrapper>
          <S.CommonStyle
            style={{
              fontSize: "21px",
            }}
          >
            <div>TopNavigation</div>
            <S.ContactButton>
              <Icon icon="HamburgerIcon" size={20} />
            </S.ContactButton>
          </S.CommonStyle>
        </S.Wrapper>
      ) : (
        <S.SmallWrapper>
          <S.CommonStyle
            style={{
              fontSize: "30px",
            }}
          >
            <div>TopNavigation</div>
            <S.ContactButton>
              <Icon icon="HamburgerIcon" size={20} />
            </S.ContactButton>
          </S.CommonStyle>
        </S.SmallWrapper>
      )}
    </S.Container>
  );
};

export default TopNavigation;

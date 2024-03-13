import styled, { css, keyframes } from 'styled-components';

interface FlyingManProps {
  $isEnter: boolean;
  $isLeave: boolean;
}

const leafFall = keyframes`
  0% {
    transform: translate(-120%, 0) rotate(5deg);
  } 20% {
    transform: translate(-118%, 60%) scale(0.9) rotate(-5deg);
  } 40% {
    transform: translate(-123%, 120%) scale(0.8) rotate(5deg);
  } 60% {
    transform: translate(-118%, 180%) scale(0.7) rotate(-5deg);
  } 80% {
    transform: translate(-120%, 240%) scale(0.6) rotate(0deg);
  } 100% {
    transform: translate(-120%, 500%) scale(0.6) rotate(0deg);
  }
`;

const UpperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
`;

const Mountain = styled.img`
  position: absolute;
  top: 0;
`;

const UpperGround = styled.img`
  position: absolute;
  top: 35px;
`;

const UpperGroundHalf1 = styled.img`
  position: absolute;
  top: 34px;
`;

const UpperGroundHalf2 = styled.img`
  position: absolute;
  top: 33px;
`;

const FlyingMan = styled.img<FlyingManProps>`
  position: absolute;
  top: 50px;
  right: -500px;
  transform: translate(0, 0) scale(1);
  transition: all 2s ease;
  ${({ $isEnter }) =>
    $isEnter &&
    css`
      transform: translate(-120%, 0);
      transition: transform 2s ease;
    `}
  ${({ $isLeave }) =>
    $isLeave &&
    css`
      transform: translate(-120%, 500%) scale(0.6);
      animation: ${leafFall} 3.5s ease-out;
    `}
`;

const UnderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const UnderGround = styled.img`
  /* position: absolute; */
  top: 30px;
`;

const Style = {
  UpperWrapper,
  Mountain,
  UpperGround,
  UpperGroundHalf1,
  UpperGroundHalf2,
  FlyingMan,
  UnderWrapper,
  UnderGround,
};

export default Style;

import styled from 'styled-components';

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
  top: 34px;
`;

const FlyingMan = styled.img`
  position: absolute;
  top: 50px;
  right: -500px;
  transform: translate(-900px, 900px) scale(0.7);
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

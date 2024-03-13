import styled, { keyframes } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 800px;
  background-color: #B88F63;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 1200px;
  height: 600px;
`;

const JobTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

const Divider = styled.div`
  width: 30px;
`;

const AvatarAnimation = keyframes`
  0% {
    transform: rotate(0turn);
  }
  100% {
    transform: rotate(5turn);
  }
`;
const Avatar = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  object-fit: cover; 
  animation: ${AvatarAnimation} 0.2s linear;
`;
const CommonAccordionWrapper = styled.div`
  width: 700px;
`;
export default {
  MainContainer,
  ContentWrapper,
  JobTitle,
  Divider,
  Avatar,
  CommonAccordionWrapper
}

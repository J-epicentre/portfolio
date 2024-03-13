import styled from "styled-components";

interface MainContainerProps {
  $active: boolean;
}
const MainContainer = styled.div<MainContainerProps>`
  width: 800px;
  width: ${({ $active }) => $active ? "800px" : "100px"};
  height: 480px;
  transition-duration: 0.3s;
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 100%;
    transition-duration: 0.3s;
    transform: ${({ $active }) => $active ? "translateX(0)" : "translateX(-100px)"};
  }
  & strong {
    color: #E8BD27;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 50px;
  font-weight: 600;
  width: 500px;
  height: 100%;
`;
const CardText = styled.p`
  font-size: 50px;
  font-weight: 600;
  text-transform: uppercase;
`;
const Avatar = styled.img`
  width: 385px;
  height: 480px;
  object-fit: cover;
`;

export default {
  MainContainer,
  Avatar,
  CardText,
  InfoContainer,
}

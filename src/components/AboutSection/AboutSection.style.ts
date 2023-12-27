import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 700px;
`;

const AboutH1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

const AnnounceText = styled.p`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin-top: 30px;
  & > strong {
    color: #E8BD27;
  }
`;


export default {
  MainContainer,
  AboutH1,
  AnnounceText,
}

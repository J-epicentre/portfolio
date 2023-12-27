import styled from "styled-components";

interface MainContainerProps {
  $color: string;
}
const MainContainer = styled.a<MainContainerProps>`
  width: fit-content;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ $color }) => $color};
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  color: white;

  &:hover {
    background-color: #E8BD27;
    color: black;
  }
`;

export default {
  MainContainer,
}


import styled from "styled-components";

interface MeatBallsProps {
  $isActive: boolean;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: fit-content;
  height: fit-content;
`;

const MeatBall = styled.button<MeatBallsProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${({ $isActive }) => $isActive ? "white" : "#d9d9d9" };
`;

export default {
  MainContainer,
  MeatBall
}

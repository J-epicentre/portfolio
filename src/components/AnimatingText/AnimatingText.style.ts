import styled, { keyframes } from "styled-components";

interface SpanProps {
  $color: string;
  $size: string;
  $weight: string;
}
interface ViewContainerProps {
  $isClear: boolean;
}
const Animation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 50px;
  overflow: hidden;
`;
const ViewContainer = styled.div<ViewContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  animation: ${Animation} 0.5s linear ${({ $isClear }) => $isClear ? '' : "infinite"};
`;

const Span = styled.span<SpanProps>`
  line-height: 50px;
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => $size};
  font-weight: ${({ $weight }) => $weight};
`;

export default {
  MainContainer,
  ViewContainer,
  Span,
}

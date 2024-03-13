import styled from "styled-components";

interface ImageProps {
  $width: number;
}
const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const PortfolioImageWrapper = styled.div<ImageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => `${$width}px`};
`;

const PortfolioImage = styled.img`
`;
export default {
  Container,
  PortfolioImageWrapper,
  PortfolioImage
}


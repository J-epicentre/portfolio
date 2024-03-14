import styled, { keyframes, css } from 'styled-components';

interface TeamProjectsSectionWrapperProps {
  $wave: boolean;
}

const stepingUp = keyframes`
  0% {
    transform: translate(0);
  } 10% {
    transform: translate(-5px, -1px);
  } 20% {
    transform: translate(0, -1px);
  } 30% {
    transform: translate(-5px, -1px);
  } 40% {
    transform: translate(0, -2px);
  } 50% {
    transform: translate(-5px, -2px);
  } 60% {
    transform: translate(0, -3px);
  } 70% {
    transform: translate(-5px, -3px);
  } 80% {
    transform: translate(0, -4px);
  } 90% {
    transform: translate(-5px, -4px);
  } 100% {
    transform: translate(0, -5px);
  }
`;

const TeamProjectsSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px 0 0;
  @media (max-width: 990px) {
    padding: 80px 0 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 0;
  }
`;

const TeamProjectsSectionTitle = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & > h2 {
    top: 100px;
    font-size: 36px;
    font-weight: 800;
    margin: 0;
    @media (max-width: 990px) {
      font-size: 30px;
    }
    @media (max-width: 575px) {
      font-size: 24px;
    }
  }
`;

const TeamProjectsWrapper = styled.div<TeamProjectsSectionWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px;
  margin-bottom: -5px;
  background-color: #a67c52;
  ${({ $wave }) =>
    $wave &&
    css`
      transform: translateY(-5px);
      transition: all 1s ease;
      animation: ${stepingUp} 1s ease;
    `}
`;

const TeamProjectCardWrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 34px 14px;
  width: 100%;
`;

const TeamProjectCard = styled.div`
  position: relative;
  width: 282px;
  height: 445px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    width: 250px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
    filter: blur(10px);
  }
`;

const Style = {
  TeamProjectsSectionWrapper,
  TeamProjectsSectionTitle,
  TeamProjectsWrapper,
  TeamProjectCardWrapper,
  TeamProjectCard,
};

export default Style;

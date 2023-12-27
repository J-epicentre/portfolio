import styled from 'styled-components';

const TeamProjectsSectionWrapper = styled.section`
  padding: 100px 0;
  @media (max-width: 990px) {
    padding: 80px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0;
  }
`;

const TeamProjectsSectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & > h2 {
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

const TeamProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #a67c52;
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
  width: 282px;
  height: 445px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
`;

const Style = {
  TeamProjectsSectionWrapper,
  TeamProjectsSectionTitle,
  TeamProjectsWrapper,
  TeamProjectCardWrapper,
  TeamProjectCard,
};

export default Style;

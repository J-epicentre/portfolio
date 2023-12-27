import Style from './TeamProjects.style';
import ScrollAnimateSection from '../ScrollAnimateSection/ScrollAnimateSection';

const TeamProjects: React.FC = () => {
  return (
    <Style.TeamProjectsSectionWrapper>
      <Style.TeamProjectsSectionTitle>
        <h2>TEAM PORTFOLIO</h2>
      </Style.TeamProjectsSectionTitle>
      <ScrollAnimateSection />
      <Style.TeamProjectsWrapper>
        <Style.TeamProjectCardWrapper>
          <Style.TeamProjectCard>포폴 1</Style.TeamProjectCard>
          <Style.TeamProjectCard>포폴 2</Style.TeamProjectCard>
          <Style.TeamProjectCard>포폴 3</Style.TeamProjectCard>
          <Style.TeamProjectCard>포폴 4</Style.TeamProjectCard>
        </Style.TeamProjectCardWrapper>
      </Style.TeamProjectsWrapper>
    </Style.TeamProjectsSectionWrapper>
  );
};

export default TeamProjects;

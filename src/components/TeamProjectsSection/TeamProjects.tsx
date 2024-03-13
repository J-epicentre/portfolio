import { useState, useEffect, useRef } from 'react';
import Style from './TeamProjects.style';
import ScrollAnimateSection from '../ScrollAnimateSection/ScrollAnimateSection';

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
}

const TeamProjects: React.FC = () => {
  const [earthquake, setEarthquake] = useState<boolean>(false);
  const earthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wavingEarth = earthRef.current;

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            setEarthquake(true);
          } else {
            setEarthquake(false);
          }
        },
        { root: null, rootMargin: '500px 0 0 0', threshold: 0.5 }
      );
    });

    if (wavingEarth) observer.observe(wavingEarth);

    return () => {
      if (wavingEarth) observer.unobserve(wavingEarth);
    };
  }, []);

  return (
    <Style.TeamProjectsSectionWrapper>
      <Style.TeamProjectsSectionTitle>
        <h2>TEAM PORTFOLIO</h2>
      </Style.TeamProjectsSectionTitle>
      <ScrollAnimateSection />
      <Style.TeamProjectsWrapper ref={earthRef} $wave={earthquake}>
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

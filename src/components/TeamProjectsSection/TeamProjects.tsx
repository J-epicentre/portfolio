import { useState, useEffect, useRef } from 'react';
import Style from './TeamProjects.style';
import ScrollAnimateSection from '../ScrollAnimateSection/ScrollAnimateSection';

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
}

const TeamProjects: React.FC = () => {
  const [earthquake, setEarthquake] = useState<boolean>(false);
  const [mousehover, setMousehover] = useState<boolean>(false);
  const earthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wavingEarth = earthRef.current;

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            setEarthquake(true);
          }
        },
        { root: null, rootMargin: '500px 0 0 0', threshold: 0.5 }
      );
    });

    if (wavingEarth) observer.observe(wavingEarth);

    return () => {
      if (wavingEarth) {
        observer.unobserve(wavingEarth);
      }
    };
  }, []);

  return (
    <Style.TeamProjectsSectionWrapper>
      <Style.TeamProjectsSectionTitle>
        <h2>TEAM PORTFOLIO</h2>
      </Style.TeamProjectsSectionTitle>
      <ScrollAnimateSection />
      <Style.TeamProjectsWrapper ref={earthRef} $wave={earthquake}>
        <Style.TeamProjectCardRow>
          <Style.CardWrapper
            onMouseEnter={() => setMousehover(true)}
            onMouseLeave={() => setMousehover(false)}
            $hovered={mousehover}
          >
            <Style.TeamProjectCard>포폴 1</Style.TeamProjectCard>
            <Style.CardShadow></Style.CardShadow>
          </Style.CardWrapper>
        </Style.TeamProjectCardRow>
      </Style.TeamProjectsWrapper>
    </Style.TeamProjectsSectionWrapper>
  );
};

export default TeamProjects;

import { useEffect, useRef, useState } from 'react';
import Style from './ScrollAnimateStyle';
import mountain from '../../assets/images/ground-01.png';
import upperGround from '../../assets/images/ground-02.png';
import upperGroundHalf1 from '../../assets/images/ground-03.png';
import upperGroundHalf2 from '../../assets/images/ground-04.png';
import underGround from '../../assets/images/ground-05 1.png';
import flyingMan from '../../assets/images/person.svg';

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
}

const ScrollAnimateSection: React.FC = () => {
  const [isEntering, setEntering] = useState<boolean>(false);
  const [isLeaving, setLeaving] = useState<boolean>(false);
  const ref1 = useRef<HTMLImageElement>(null);
  const ref2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const enteringCurrent = ref1.current;
    const leavingCurrent = ref2.current;

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(
        (entry) => {
          if (entry.target === enteringCurrent) {
            setEntering(entry.isIntersecting);
          } else if (entry.target === leavingCurrent) {
            setLeaving(entry.isIntersecting);
          }
        },
        { root: null, rootMargin: '600px 0 600px 0', threshold: 0.5 }
      );
    });

    if (enteringCurrent) observer.observe(enteringCurrent);
    if (leavingCurrent) observer.observe(leavingCurrent);

    return () => {
      if (enteringCurrent) observer.unobserve(enteringCurrent);
      if (leavingCurrent) observer.unobserve(leavingCurrent);
    };
  }, []);

  return (
    <>
      <Style.UpperWrapper ref={ref1}>
        <Style.Mountain src={mountain} alt='mountain' />
        <Style.UpperGround src={upperGround} alt='upperGround' />
        <Style.FlyingMan
          $isEnter={isEntering}
          $isLeave={isLeaving}
          src={flyingMan}
          alt='flyingMan'
        />
        <Style.UpperGroundHalf1 src={upperGroundHalf1} alt='upperGroundHalf1' />
        <Style.UpperGroundHalf2 src={upperGroundHalf2} alt='uppperGoundHalf2' />
      </Style.UpperWrapper>
      <Style.UnderWrapper ref={ref2}>
        <Style.UnderGround src={underGround} alt='underGround' />
      </Style.UnderWrapper>
    </>
  );
};

export default ScrollAnimateSection;

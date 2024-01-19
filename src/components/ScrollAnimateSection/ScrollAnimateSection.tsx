import { useEffect } from 'react';
import Style from './ScrollAnimateStyle';
import mountain from '../../assets/images/ground-01.png';
import upperGround from '../../assets/images/ground-02.png';
import upperGroundHalf1 from '../../assets/images/ground-03.png';
import uppperGoundHalf2 from '../../assets/images/ground-04.png';
import underGround from '../../assets/images/ground-05 1.png';
import flyingMan from '../../assets/images/flying_man.svg';

const ScrollAnimateSection: React.FC = () => {
  const handleScroll = () => {
    console.log('scroll');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Style.UpperWrapper>
        <Style.Mountain src={mountain} alt='mountain' />
        <Style.UpperGround src={upperGround} alt='upperGround' />
        <Style.FlyingMan src={flyingMan} alt='flyingMan' />
        <Style.UpperGroundHalf1 src={upperGroundHalf1} alt='upperGroundHalf1' />
        <Style.UpperGroundHalf2 src={uppperGoundHalf2} alt='uppperGoundHalf2' />
      </Style.UpperWrapper>
      <Style.UnderWrapper>
        <Style.UnderGround src={underGround} alt='underGround' />
      </Style.UnderWrapper>
    </>
  );
};

export default ScrollAnimateSection;

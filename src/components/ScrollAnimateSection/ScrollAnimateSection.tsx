import { useEffect } from 'react';
import mountain from '../../assets/images/ground-01.png';
import upperGround from '../../assets/images/ground-02.png';
import upperGroundHalf1 from '../../assets/images/ground-03.png';
import uppperGoundHalf2 from '../../assets/images/ground-04.png';
import underGround from '../../assets/images/ground-05 1.png';

const ScrollAnimateSection: React.FC = () => {
  const handleScroll = () => {
    console.log('scroll');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1>ScrollAnimateSection</h1>
      <img src={mountain} alt='mountain' />
      <img src={upperGround} alt='upperGround' />
      <img src={upperGroundHalf1} alt='upperGroundHalf1' />
      <img src={uppperGoundHalf2} alt='uppperGoundHalf2' />
      <img src={underGround} alt='underGround' />
    </div>
  );
};

export default ScrollAnimateSection;

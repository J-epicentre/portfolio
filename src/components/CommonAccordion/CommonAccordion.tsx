import { useEffect, useRef, useState } from "react";
import CommonAccordionStyle from "./CommonAccordion.style";
import simplePortfolioImage from "../../assets/images/simple-portfolio.png";

const CommonAccordion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ containerWidth, setContainerWidth ] = useState<number>(0);
  const [ selectedIndex, setSelectedIndex ] = useState<number>(0);

  const accordionData = [
    {
      img: null,
      width: 0
    }, 
    {
      img: null,
      width: 0
    }, 
    {
      img: null,
      width: 0
    }, 
    {
      img: null,
      width: 0
    }
  ];
  const dataLength = accordionData.length;
  const gapLangth = dataLength - 1;
  const gapWidth = 10;
  const normalWidth = 60;

  useEffect(() => {
  }, [selectedIndex]);

  return (
    <CommonAccordionStyle.Container ref={containerRef}>
      {
        accordionData.map(({ width }, index) => {
          return(
            <CommonAccordionStyle.PortfolioImageWrapper
              key={index}
              $width={containerWidth}
              onClick={() => setSelectedIndex(index)}
            >
              <CommonAccordionStyle.PortfolioImage
              src={simplePortfolioImage}
              key={index}
              />
            </CommonAccordionStyle.PortfolioImageWrapper>
          )
        })
      }
    </CommonAccordionStyle.Container>
  );
}

export default CommonAccordion;

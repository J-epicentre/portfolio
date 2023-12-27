import { useEffect, useState } from "react";
import AccordionCardStyle from "./AccordionCard.style";
import LinkButton from "../../common/LinkButton/LinkButton";

const AccordionCard = ({ 
  avatarImg, 
  job,
  link, 
  index, 
  activeIndex, 
  setActiveIndex, 
  children 
}: {
  avatarImg: string,
  job: string,
  link: string,
  index: number,
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  children: React.ReactNode,
}) => {
  const [ isActive, setIsActive ] = useState(false);

  const activeCard = () => {
    setActiveIndex(index);
  }

  useEffect(() => {
    if (index === activeIndex) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeIndex]);

  return (
    <AccordionCardStyle.MainContainer 
      $active={isActive}
      onMouseOver={() => activeCard()}
    >
      <div>
        <AccordionCardStyle.Avatar src={avatarImg} />
        <AccordionCardStyle.InfoContainer>
          <AccordionCardStyle.CardText>
            {job}
          </AccordionCardStyle.CardText>
          {children}
          <LinkButton link={link} color={'#714C37'}>
            개인 프로필 바로가기
          </LinkButton>
        </AccordionCardStyle.InfoContainer>
      </div>
    </AccordionCardStyle.MainContainer>
  )
}

export default AccordionCard;

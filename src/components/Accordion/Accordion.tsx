import { useEffect, useState, useRef } from "react";
import AccordionCard from "../AccordionCard/AccordionCard";
import AccordionStyle from "./Accordion.style";
import avatarImg from "../../assets/images/main-avatar.png";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideTimeOutRef = useRef<number | null>();

  const slideTime = 4000;
  const avatars = [
    {
      img: avatarImg,
      jop: "designer",
      name: <span>오<strong>주</strong>연</span>,
      link: "",
    },
    {
      img: avatarImg,
      jop: "front-end",
      name: <span><strong>진</strong>승현</span>,
      link: "",
    },
    {
      img: avatarImg,
      jop: "front-end",
      name: <span><strong>원</strong>세종</span>,
      link: "",
    },
    {
      img: avatarImg,
      jop: "back-end",
      name: <span>강<strong>지</strong>용</span>,
      link: "",
    },
  ];

  useEffect(() => {
    if (slideTimeOutRef.current) {
      clearTimeout(slideTimeOutRef.current);
    }

    slideTimeOutRef.current = setTimeout(() => {
      if (activeIndex === avatars.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, slideTime);

    return () => {
      if (slideTimeOutRef.current) {
        clearTimeout(slideTimeOutRef.current);
      }
    };
  }, [activeIndex, avatars]);

  return (
    <AccordionStyle.MainContainer
      onMouseOver={() => {
        if (slideTimeOutRef.current) {
          clearTimeout(slideTimeOutRef.current);
        }
      }}
      onMouseLeave={() => {
        slideTimeOutRef.current = setTimeout(() => {
          if (activeIndex === avatars.length - 1) {
            setActiveIndex(0);
          } else {
            setActiveIndex(activeIndex + 1);
          }
        }, slideTime);
      }}
    >
      {avatars.map((avatar, index) => (
        <AccordionCard
          key={index}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          avatarImg={avatar.img}
          job={avatar.jop}
          link={avatar.link}
        >
          {avatar.name}
        </AccordionCard>
      ))}
    </AccordionStyle.MainContainer>
  );
};

export default Accordion;

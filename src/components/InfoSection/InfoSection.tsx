import { useState } from "react";
import H2Title from "../../common/Title/SectionTitle";
import MeatBall from "../MeatBall/MeatBall";
import InfoSectionStyle from "./InfoSection.style";
import AnimatingText from "../AnimatingText/AnimatingText";
import avatarImg from "../../assets/images/main-avatar.png";
import subAvatarImg from "../../assets/images/sub-avatar.jpeg";

const InfoSection = () => {
  const [ selectedIndex, setSelectedIndex ] = useState<number>(0);
  const jobText = ['F', 'R', 'O', 'N', 'T', '-', 'E', 'N', 'D'];
  const nameText = [ '진', '승', '현'];
  const juJinWonJi = [
    {
      jobText: ['D', 'E', 'S', 'I', 'G', 'N', 'E', 'R'],
      nameText: ['오', '주', '연'],
      avatar: avatarImg
    },
    {
      jobText: ['F', 'R', 'O', 'N', 'T', '-', 'E', 'N', 'D'],
      nameText: ['진', '승', '현'],
      avatar: subAvatarImg
    },
    {
      jobText: ['F', 'R', 'O', 'N', 'T', '-', 'E', 'N', 'D'],
      nameText: ['원', '세', '종'],
      avatar: avatarImg
    },
    {
      jobText: ['B', 'A', 'C', 'K', '-', 'E', 'N', 'D'],
      nameText: ['강', '지', '용'],
      avatar: subAvatarImg
    }
  ]
  return (
    <InfoSectionStyle.MainContainer>
      <H2Title title='Member'/>
      <MeatBall 
        maxIndex={4}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <InfoSectionStyle.ContentWrapper>
        <InfoSectionStyle.Avatar 
          key={juJinWonJi[selectedIndex].avatar}
          src={juJinWonJi[selectedIndex].avatar}
        />
        <InfoSectionStyle.JobTitle>
          {
            juJinWonJi[selectedIndex].jobText.map((text, index) => {
              return (
                <AnimatingText 
                  key={`${index}${text}${Math.random()}`}
                  font={{
                    text,
                    color: '#000000',
                    size: '3rem',
                    weight: 'bold'
                  }}
                  duration={300 + index * 100}
                />
              )
            })
          }
          <InfoSectionStyle.Divider />
          {
            juJinWonJi[selectedIndex].nameText.map((text, index) => {
              return (
                <AnimatingText 
                  key={`${index}${text}${Math.random()}`}
                  font={{
                    text,
                    color: text === '진' || text === '주' || text === '원' || text ==='지' ? "#E8BD27" : "#000000",
                    size: '3rem',
                    weight: 'bold'
                  }}
                  duration={400 + index * 100}
                />
              )
            })
          }
        </InfoSectionStyle.JobTitle>
      </InfoSectionStyle.ContentWrapper>
    </InfoSectionStyle.MainContainer>
  )
}

export default InfoSection;

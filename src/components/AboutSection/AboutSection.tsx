import Accordion from "../Accordion/Accordion";
import AboutSectionStyle from "./AboutSection.style";

const AboutSection = () => {
  return (
    <AboutSectionStyle.MainContainer>
      <AboutSectionStyle.AboutH1>
        About
      </AboutSectionStyle.AboutH1>
      <AboutSectionStyle.AnnounceText>
        지각변동의 중심, <strong>주</strong>진원지에 오신 걸 환영합니다.
      </AboutSectionStyle.AnnounceText>
      <Accordion />
    </AboutSectionStyle.MainContainer>
  )
}

export default AboutSection;

import H2Title from "../../common/Title/SectionTitle";
import Accordion from "../Accordion/Accordion";
import AboutSectionStyle from "./AboutSection.style";

const AboutSection = () => {
  return (
    <AboutSectionStyle.MainContainer>
      <H2Title title="About" />
      <AboutSectionStyle.AnnounceText>
        지각변동의 중심, <strong>주</strong>진원지에 오신 걸 환영합니다.
      </AboutSectionStyle.AnnounceText>
      <AboutSectionStyle.ContentWrapper>
        <Accordion />
      </AboutSectionStyle.ContentWrapper>
    </AboutSectionStyle.MainContainer>
  )
}

export default AboutSection;

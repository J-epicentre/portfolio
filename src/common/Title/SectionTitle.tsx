import SectionTitleStyle from "./SectionTitle.style";

const H2Title = ({ title }: { title: string }) => {
  return (
      <SectionTitleStyle.H2>
        {title}
      </SectionTitleStyle.H2>
  )
}

export default H2Title;

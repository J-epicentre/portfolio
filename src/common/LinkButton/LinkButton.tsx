import LinkButtonStyle from "./LinkButton.style"

const LinkButton = ({ 
  link, 
  color, 
  children
}: {
  link: string,
  color: string,
  children: React.ReactNode,
}) => {
  return (
    <LinkButtonStyle.MainContainer href={link} $color={color}>
      {children}
    </LinkButtonStyle.MainContainer>
  )
}

export default LinkButton;

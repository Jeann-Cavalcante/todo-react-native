import { Container, Image } from "./styles";

const Header = () => {
  return (
    <Container>
      <Image source={require('../../../assets/Logo.png')} />
    </Container>
  );
}

export default Header;
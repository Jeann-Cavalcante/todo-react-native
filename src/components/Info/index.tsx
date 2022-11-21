import { Text } from "react-native";
import { Container, InfoCreate, InfoScore, Score } from "./styles";

const Info = () => {
  return (
    <Container>
      <Score>
        <InfoCreate>Criadas</InfoCreate>
        <InfoScore style={{ borderRadius: 400 / 2 }}>
          20
        </InfoScore>
      </Score>

      <Score>
        <InfoCreate>Concluídas</InfoCreate>
        <InfoScore style={{ borderRadius: 400 / 2 }}>5</InfoScore>
      </Score>
    </Container>
  );
};

export default Info;

import { Container, SubTitle, Title } from "./styles";

const ListEmpty = () => {
  return (
    <Container>
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <SubTitle>Crie tarefas e organize seus itens a fazer</SubTitle>
    </Container>
  );
};

export default ListEmpty;
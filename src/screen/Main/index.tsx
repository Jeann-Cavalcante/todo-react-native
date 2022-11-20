import { Text } from "react-native";

import Header from "../../components/Header";
import InputTodo from "../../components/InputTodo";
import ListEmpty from "../../components/ListEmpty";
import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <Header />
      <InputTodo />
      <ListEmpty />
    </Container>
  );
}

export default Main;
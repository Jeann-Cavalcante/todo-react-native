import { Text } from "react-native";

import Header from "../../components/Header";
import InputTodo from "../../components/InputTodo";
import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <Header />
      <InputTodo />
    </Container>
  );
}

export default Main;
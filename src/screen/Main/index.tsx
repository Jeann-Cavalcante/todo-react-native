import { Text } from "react-native";

import Header from "../../components/Header";
import Info from "../../components/Info";
import InputTodo from "../../components/InputTodo";
import ListEmpty from "../../components/ListEmpty";
import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <Header />
      <InputTodo />
      <Info />
      <ListEmpty />
    </Container>
  );
}

export default Main;
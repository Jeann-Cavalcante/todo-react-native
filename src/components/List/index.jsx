import { Container } from "./styles";
import { Checkbox } from "native-base";
import { useState } from "react";

const List = () => {
  const [groupValues, setGroupValues] = useState([]);
  console.log(groupValues);
  return (
    <Container>
      <Checkbox.Group
        onChange={text => setGroupValues(text)}
        value={groupValues}
        accessibilityLabel="choose numbers"
      >
        <Checkbox value="one" my={2}>
          UX Research
        </Checkbox>
        <Checkbox value="two">Software Development</Checkbox>
      </Checkbox.Group>
    </Container>
  );
};

export default List;

import Item from "components/styled-comp/Item";
import styled from "styled-components";

export default function Main() {
  return (
    <Container>
      <ul>
        <Item />
        <Item />
      </ul>
    </Container>
  );
}

const Container = styled.main`
  padding: 10px 0;
  overflow: auto;
  height: 90%;
`;

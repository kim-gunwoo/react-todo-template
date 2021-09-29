import styled from "styled-components";
import Header from "components/styled-comp/Header";
import Main from "components/styled-comp/Main";

export default function StyledTodo() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: none;
  border-radius: 15px;
`;

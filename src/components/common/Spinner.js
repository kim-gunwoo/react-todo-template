import styled from "styled-components";

export default function Spinner() {
  return <Container />;
}

const Container = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 auto 1rem;
  border: 3px solid #eaeaea;
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 1000ms infinite linear;
`;

import { useState } from "react";
import styled from "styled-components";
import Spinner from "components/common/Spinner";

export default function Header() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => setValue(e.target.value);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input autoFocus type="text" onChange={handleInput} value={value} />
        <button>ADD</button>
      </form>
    </Container>
  );
}

const Container = styled.header`
  form {
    display: flex;
    gap: 10px;
    padding: 20px;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }
  button {
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    cursor: pointer;
  }
`;

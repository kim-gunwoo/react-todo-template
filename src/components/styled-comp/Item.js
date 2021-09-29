import { useState } from "react";
import styled from "styled-components";
import Spinner from "components/common/Spinner";
import { ReactComponent as Check } from "assets/icons/check.svg";
import { ReactComponent as Delete } from "assets/icons/delete.svg";
import { ReactComponent as Save } from "assets/icons/save.svg";

export default function Item() {
  const [isModify, setIsModify] = useState(false);
  const [value, setValue] = useState("");

  const handleInput = (e) => setValue(e.target.value);

  const handleIsModify = () => {
    setIsModify(true);
    setValue("test");
  };

  const handleBlur = () => setIsModify(false);

  return (
    <Container>
      <CheckCircle>
        <Check />
      </CheckCircle>
      {isModify ? (
        <form>
          <input
            autoFocus
            type="text"
            onChange={handleInput}
            value={value}
            onBlur={handleBlur}
          />
          <Button>
            <Save />
          </Button>
        </form>
      ) : (
        <>
          <Text onClick={handleIsModify}>test</Text>
          <Button>
            <Delete />
          </Button>
        </>
      )}
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;

  form {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
    }
  }
`;

const CheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid gray;
  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  fill: gray;
  cursor: pointer;

  &:hover {
    fill: black;
  }
`;

const Text = styled.div`
  flex: 1;
`;

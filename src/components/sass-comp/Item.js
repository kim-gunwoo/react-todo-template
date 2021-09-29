import { useState } from "react";
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
    <li className="TodoItem">
      <div className="CheckCircle">
        <Check />
      </div>
      {isModify ? (
        <form>
          <input
            autoFocus
            type="text"
            onChange={handleInput}
            value={value}
            onBlur={handleBlur}
          />
          <button>
            <Save />
          </button>
        </form>
      ) : (
        <>
          <div className="Text" onClick={handleIsModify}>
            test
          </div>
          <button>
            <Delete />
          </button>
        </>
      )}
    </li>
  );
}

import { useState } from "react";

export default function Header() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => setValue(e.target.value);
  return (
    <header className="TodoHeader">
      <form onSubmit={handleSubmit}>
        <input autoFocus type="text" onChange={handleInput} value={value} />
        <button>ADD</button>
      </form>
    </header>
  );
}

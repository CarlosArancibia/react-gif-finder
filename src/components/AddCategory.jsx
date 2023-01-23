import { useState } from "react";

export const AddCategory = ({ newCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    newCategory(inputValue.trim());
    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Type something" value={inputValue} onChange={onInputChange} />
    </form>
  );
};

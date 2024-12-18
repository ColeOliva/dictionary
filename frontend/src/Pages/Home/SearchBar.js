import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";
import Color from "../../constant/Color";

// task 1: style search bar - design - done
// task 2: capture user input - functionality - done
// task 3: trigger search api call on user input - functionality

const SearchBar = ({
  setDefinition,
  searchWordServer,
  initialValue,
  definition,
}) => {
  const [text, setText] = useState(initialValue || "");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    // prevent default form submission, which refreshes page
    e.preventDefault();
    // call searchWordServer function
    const word = text.trim();
    if (word === "") return;
    const data = await searchWordServer(word);
    setDefinition(data);
  };

  return (
    <InputForm onSubmit={handleSubmit} definition={definition}>
      <Input
        value={text}
        type="text"
        onChange={handleChange}
        placeholder="Search for any word..."
      />
      <Button type="submit">
        <IoIosSearch size={20} color={Color.accent} />
      </Button>
    </InputForm>
  );
};

const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.secondaryBackground};
  padding: 1rem;
  border-radius: 8px;

  &:focus-within {
    box-shadow: 0 0 0 2px
      ${(props) => {
        if (!props.definition) return Color.error;
        else return Color.accent;
      }}; // props
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: inherit;
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
`;

export default SearchBar;

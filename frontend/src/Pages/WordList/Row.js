import { useState } from "react";
import { SlActionRedo } from "react-icons/sl";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Color from "../../constant/Color";
import useErrorContext from "../../hook/useErrorContext";
import useWordContext from "../../hook/useWordContext";

// task 1: direction button - done
// task 2: delete button - done
// task 3: input field on double click - done
// task 4: implement all form functions - done

const Row = ({ word, index }) => {
  const { deleteWord, updateWord } = useWordContext();
  const { reportErrors } = useErrorContext();

  // state var checking if in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // function that flips the isEditing state
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // state var that stores value of input field
  const [inputValue, setInputValue] = useState(word);

  // function that updates input val
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = async () => {
    try {
      await deleteWord(word);
    } catch (error) {
      // error is an obj, has few diff fields : message, name...
      reportErrors("word-list", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    // sanity check
    if (trimmedValue === "") {
      setIsEditing(false);
      return;
    }
    await updateWord(word, inputValue);
    setIsEditing(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "2rem",
        width: 500,
        borderBottom: `1px solid ${Color.borderColor}`,
        borderTop: index === 0 ? `1px solid ${Color.borderColor}` : "none",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              onBlur={handleSubmit}
              autoFocus
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.5rem",
                borderColor: Color.accent,
                borderRadius: 5,
                borderWidth: 1,
                outline: "none",
                padding: 5,
              }}
            />
          </form>
        ) : (
          <div
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.5rem",
            }}
            onDoubleClick={handleDoubleClick}
          >
            {word}
          </div>
        )}
        <div>
          <Link
            to={`/?word=${word}`}
            style={{
              textDecoration: "none",
              color: Color.primaryText,
            }}
          >
            <SlActionRedo />
          </Link>
        </div>
      </div>
      <div>
        <TiDeleteOutline
          size={25}
          color={Color.accent}
          onClick={handleDelete}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Row;

import Color from "../../constant/Color";
import useWordContext from "../../hook/useWordContext";
import Row from "./Row";

const List = () => {
  const { words } = useWordContext();

  if (!words || words.length === 0) {
    return (
      <div
        style={{
          marginTop: "4rem",
          fontSize: "1.2rem",
          lineHeight: "1.5rem",
          color: Color.secondaryText,
        }}
      >
        No words saved yet
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: "4rem",
      }}
    >
      {words.map((word, index) => (
        <Row key={word._id} word={word.word} index={index} />
      ))}
    </div>
  );
};

export default List;

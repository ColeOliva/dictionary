import List from "./List";

// task 1: structure word list page into multiple components - done
// task 2: style the list of words - done
// task 3: style each row in list - done
// task 4: style single input field form - done

const WordList = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "4rem",
          lineHeight: "4rem",
          fontWeight: "bold",
        }}
      >
        Saved words
      </div>
      <List />
    </div>
  );
};

export default WordList;

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useErrorContext from "../hook/useErrorContext";

// step 1: create a context instance - done
// step 2: create a provider component - done
// step 3: wrap up app with provider component
// step 4: access the context values in the components, create a custom hook

const WordContext = createContext({
  words: [], // represent all words in db
  addWord: () => {},
  removeWord: () => {}, // shared by both pages
  updateWord: () => {},
});

const WordProvider = ({ children }) => {
  // if you want changes to be real-time reflected, need to make things
  // reactive, so use state

  const [words, setWords] = useState([]); // [{id:"hello", word:"hello"}]
  const { reportErrors } = useErrorContext();

  // useEffect to fetch data from db and update whenever something changes
  useEffect(() => {
    // purpose 1: fetch data from db
    // purpose 2: update state
    const fetchWords = async () => {
      try {
        const response = await axios.get("http://localhost:3001/words");
        const data = response.data;
        setWords(data);
      } catch (error) {
        reportErrors("word-list", error.message);
        reportErrors("home", error.message);
      }
    };

    fetchWords();
  }, []);

  // purpose 1: add new word to db
  // purpose 2: update state
  // paramter: word - string (e.g. "hello")
  const addWord = async (word) => {
    const response = await axios.post("http://localhost:3001/words", {
      _id: word,
      word: word,
    });
    const data = response.data;
    setWords([...words, data]);
  };

  // purpose 1: update word in db
  // purpose 2: update state
  // params : oldWord - string, newWord - string
  const updateWord = async (oldWord, newWord) => {
    //make delete req to delete old word
    await axios.delete(`http://localhost:3001/words/${oldWord}`);

    // make post req to add new word
    const response = await axios.post("http://localhost:3001/words", {
      _id: newWord,
      word: newWord,
    });

    const data = response.data;
    const updatedWords = words.map((word) => {
      if (word._id === oldWord) {
        return data;
      }
      return word;
    });
    setWords(updatedWords);
  };

  // delete a word
  // purpose 1: delete word from db
  // purpose 2: update state
  // params: word - string
  const deleteWord = async (word) => {
    await axios.delete(`http://localhost:3001/words/${word}`);
    const filteredWords = words.filter((w) => w._id !== word);
    setWords(filteredWords);
  };

  return (
    <WordContext.Provider
      value={{
        // key in context instance : value you make reactive
        words: words,
        addWord: addWord,
        updateWord: updateWord,
        deleteWord: deleteWord,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export { WordContext, WordProvider }; // import { WordContext, WordProvider } from "./context/WordContext";
export default WordContext; // import WordContext from "./context/WordContext";

// <WordProvider> <App /> </WordProvider>

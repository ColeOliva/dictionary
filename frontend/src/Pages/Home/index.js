import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ErrorDisplay from "../../component/ErrorDisplay";
import useErrorContext from "../../hook/useErrorContext";
import DefinitionArea from "./DefinitionArea";
import SearchBar from "./SearchBar";

const Home = () => {
  const [definition, setDefinition] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { reportErrors } = useErrorContext();

  const word = searchParams.get("word") || "test";

  const searchWordServer = async (word) => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = response.data;
      return data[0];
    } catch (error) {
      reportErrors("home", error.message);
    }
  };

  // renders the initial definition for user to see when first loaded
  useEffect(() => {
    const renderInitialDefinition = async () => {
      const data = await searchWordServer(word);
      setDefinition(data);
    };

    renderInitialDefinition();
  }, []);

  return (
    <div>
      <ErrorDisplay pageKey="home" />
      <SearchBar
        setDefinition={setDefinition}
        searchWordServer={searchWordServer}
        initialValue={word}
        definition={definition}
      />
      <DefinitionArea definition={definition} />
    </div>
  );
};

export default Home;

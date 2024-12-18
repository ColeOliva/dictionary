import { useContext } from "react";
import { WordContext } from "../context/WordContext";

const useWordContext = () => {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error("useWordContext must be used within a WordProvider");
  }
  return context;
};

export default useWordContext;

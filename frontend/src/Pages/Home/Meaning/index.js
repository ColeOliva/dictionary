import { IoPlayCircleOutline } from "react-icons/io5";
import Color from "../../../constant/Color";
import Definition from "./Definition";
import PartOfSpeech from "./PartOfSpeech";
import Synonyms from "./Synonyms";

// task 1: render static word "Meaning" - design - done
// task 2: render all definitions of given meaning using bullet points - design
//         render usage examples whenever available for given def
// task 3: add the play button for audio pronunciation - design and functionality

const Meaning = ({ meaning, phonetics }) => {
  const playAudio = () => {
    // create audio object
    const audio = new Audio(phonetics[0].audio);
    // play audio
    audio.play();
  };

  return (
    <>
      <PartOfSpeech partOfSpeech={meaning.partOfSpeech} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "2rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.5rem",
              color: Color.secondaryText,
            }}
          >
            Meaning
          </div>
          <div
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            {meaning.definitions.map((definition, index) => (
              <Definition key={index} definitionObj={definition} />
            ))}
          </div>
        </div>
        <div>
          <IoPlayCircleOutline
            size={80}
            color={Color.accent}
            style={{ cursor: "pointer" }}
            onClick={playAudio}
          />
        </div>
      </div>
      <Synonyms synonyms={meaning.synonyms} />
    </>
  );
};

export default Meaning;

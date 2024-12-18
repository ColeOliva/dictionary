import Color from "../../../../constant/Color";
import Synonym from "./Synonym";

// task 1: link all subcomponents to main component - done
// task 2: design the synonyms section

const Synonyms = ({ synonyms }) => {
  if (!synonyms || synonyms.length === 0) return null;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "1rem",
        marginTop: '2rem',
        flexFlow: "wrap",
      }}
    >
      <div
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.2rem",
          color: Color.secondaryText,
          marginRight: "2rem",
        }}
      >
        Synonyms
      </div>
      {synonyms.map((synonym, index) => (
        <Synonym
          key={index}
          index={index}
          length={synonyms.length}
          synonym={synonym}
        />
      ))}
    </div>
  );
};

export default Synonyms;

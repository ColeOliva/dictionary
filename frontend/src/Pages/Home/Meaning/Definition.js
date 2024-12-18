import Color from "../../../constant/Color";

// def obj has 3 fields: definition, synonyms, antonyms
// may have extra field named example

const Definition = ({ definitionObj }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            backgroundColor: Color.accent,
            borderRadius: "50%",
            marginRight: 20,
          }}
        />
        <div
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.2rem",
          }}
        >
          {definitionObj.definition}
        </div>
      </div>
      {definitionObj.example && (
        <div
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.2rem",
            color: Color.secondaryText,
            marginBottom: 20,
            marginLeft: 26,
          }}
        >
          "{definitionObj.example}"
        </div>
      )}
    </>
  );
};

export default Definition;

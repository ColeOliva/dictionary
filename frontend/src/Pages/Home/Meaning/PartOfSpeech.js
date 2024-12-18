import Color from "../../../constant/Color";

const PartOfSpeech = ({ partOfSpeech }) => {
  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontStyle: "italic",
          fontSize: "1.5rem",
          lineHeight: "2.25rem",
          fontWeight: "bold",
          marginRight: "1rem",
        }}
      >
        {partOfSpeech}
      </div>
      <div
        style={{ backgroundColor: Color.borderColor, height: 1, flex: 1 }}
      ></div>
    </div>
  );
};

export default PartOfSpeech;

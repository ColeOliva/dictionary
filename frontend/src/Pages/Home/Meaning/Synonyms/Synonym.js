import Color from "../../../../constant/Color";

const Synonym = ({ synonym, index, length }) => {
  
  return (
    <>
      <div
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.2rem",
          color: Color.accent,
          marginRight: "1rem",
        }}
      >
        {synonym}
      </div>
      {index < length - 1 && (
        <div
          style={{
            width: 6,
            height: 6,
            backgroundColor: Color.borderColor,
            borderRadius: "50%",
            marginRight: 20,
          }}
        />
      )}
    </>
  );
};

export default Synonym;

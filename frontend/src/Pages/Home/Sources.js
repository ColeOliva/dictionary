import { TfiNewWindow } from "react-icons/tfi";
import Color from "../../constant/Color";

// task 1: link component to main component - done
// task 2: style component accordingly

const Sources = ({ sourceUrls }) => {
  if (!sourceUrls) return null;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: "5rem",
        marginTop: '2rem',
      }}
    >
      <div
        style={{
          color: Color.secondaryText,
          fontSize: "1rem",
          lineHeight: "1rem",
          marginRight: "1.5rem",
        }}
      >
        Source
      </div>
      {sourceUrls.map((sourceUrl, index) => (
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: Color.primaryText,
            fontSize: "1rem",
            gap: "0.5rem",
          }}
          key={index}
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {sourceUrl}
          <TfiNewWindow />
        </a>
      ))}
    </div>
  );
};

export default Sources;

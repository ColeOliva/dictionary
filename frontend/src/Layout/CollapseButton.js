import { CiMenuBurger } from "react-icons/ci";

const CollapseButton = ({ setIsCollapsed }) => {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => setIsCollapsed(false)}
    >
      <CiMenuBurger />
    </button>
  );
};

export default CollapseButton;

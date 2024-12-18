import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Color from "../constant/Color";

const navList = [
  { path: "/", name: "Home" },
  { path: "/word-list", name: "Word list" },
];

const Sidebar = () => {
  return (
    <div>
      <Header>
        <h1>My dictionary</h1>
      </Header>
      <Navigation>
        <ul>
          {navList.map((navItem) => (
            <li key={navItem.path}>
              <NavLink to={navItem.path}>{navItem.name}</NavLink>
            </li>
          ))}
        </ul>
      </Navigation>
    </div>
  );
};

const Header = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid ${Color.borderColor};

  h1 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1;
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }

  h1::before {
    // load component before loading the h1
    content: url("logo.svg");
    margin-right: 0.5rem;
  }
`;

const Navigation = styled.nav`
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;

  // padding: 1rem 2rem 0 2rem; // top, right, bottom, left

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
    display: flex;
    padding: 0.5rem;
    border-radius: 8px;
    color: inherit;
  }

  a.active {
    background-color: ${Color.accent};
    color: white;
  }
`;

export default Sidebar;

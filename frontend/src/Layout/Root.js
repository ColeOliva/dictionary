import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Color from "../constant/Color";
import CollapseButton from "./CollapseButton";
import Sidebar from "./Sidebar";
import SidebarHover from "./SidebarHover";

const Root = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <SidebarHoverWrapper style={isCollapsed ? {} : { display: "block" }}>
        <SidebarHover setIsCollapsed={setIsCollapsed} />
      </SidebarHoverWrapper>
      <CollapseWrapper>
        <CollapseButton setIsCollapsed={setIsCollapsed} />
      </CollapseWrapper>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </div>
  );
};

// width, background color, scrolling behavior.
const SidebarWrapper = styled.div`
  width: 20rem; // 1rem = 16px
  background-color: ${Color.secondaryBackground};
  border-right: 1px solid ${Color.borderColor};
  height: 100vh; // full height of viewport
  overflow-y: auto; // allow scrolling

  // common breakpoints: 320, 768, 1024, 1440
  @media (max-width: 992px) {
    display: none;
  }
`;

const PageWrapper = styled.div`
  width: calc(100% - 20rem); // space not taken by sidebar
  height: 100vh; // full height of viewport
  overflow-y: auto; // allow scrolling
  padding: 4rem;

  @media (max-width: 992px) {
    width: calc(100% - 2rem);
    padding: 2rem;
  }
`;

const CollapseWrapper = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
    width: 2rem;
    height: 2rem;
  }
`;

const SidebarHoverWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 20rem; // 1rem = 16px
  background-color: ${Color.secondaryBackground};
  border-right: 1px solid ${Color.borderColor};
  height: 100vh; // full height of viewport
  overflow-y: auto; // allow scrolling
`;

export default Root;

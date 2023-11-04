import React from "react";
import { Outlet } from "react-router-dom";
import ComponentsMenu from "../../components/ComponentsMenu";

function Documentation() {
  return (
    <div className="docs">
      <ComponentsMenu />
      <div className="docs-main">
        <Outlet />
      </div>
    </div>
  );
}

export default Documentation;

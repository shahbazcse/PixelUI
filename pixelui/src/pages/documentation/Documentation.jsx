import React from "react";
import { Outlet } from "react-router-dom";

function Documentation() {
  return (
    <div className="docs">
      <div className="docs-main">
        <Outlet />
      </div>
    </div>
  );
}

export default Documentation;

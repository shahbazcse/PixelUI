import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Documentation from "../pages/documentation/Documentation";

import Introduction from "../pages/documentation/gettingStarted/Introduction";
import Colors from "../pages/documentation/gettingStarted/Colors";
import Typography from "../pages/documentation/gettingStarted/Typography";

import Avatar from "../pages/documentation/components/Avatar/Avatar";
import Alert from "../pages/documentation/components/Alert/Alert";
import Badge from "../pages/documentation/components/Badge/Badge";
import Button from "../pages/documentation/components/Button/Button";
import Card from "../pages/documentation/components/Card/Card";
import Headings from "../pages/documentation/components/Headings/Headings";
import Image from "../pages/documentation/components/Image/Image";
import Text from "../pages/documentation/components/Text/Text";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="docs" element={<Documentation />}>
        <Route path="guide/introduction" element={<Introduction />} />
        <Route path="guide/colors" element={<Colors />} />
        <Route path="guide/typography" element={<Typography />} />

        <Route path="components/alert" element={<Alert />} />
        <Route path="components/avatar" element={<Avatar />} />
        <Route path="components/badge" element={<Badge />} />
        <Route path="components/button" element={<Button />} />
        <Route path="components/card" element={<Card />} />
        <Route path="components/headings" element={<Headings />} />
        <Route path="components/image" element={<Image />} />
        <Route path="components/text" element={<Text />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

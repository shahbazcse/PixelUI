import "./NavBarMobile.css";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const NavBarMobile = () => {
    const {
        state: { selectedLink, openLink, mobileNavbar },
        dispatch,
    } = useContext(AppContext);

    const navigate = useNavigate();

    const isActive = (navlink) => {
        const path = window.location.pathname;
        return { color: path === navlink ? "#0B76F1" : "" };
    };

    const handleSelectLink = (type) => {
        if (type !== selectedLink) {
            dispatch({ type: "TOGGLE_LINK", payload: false });
            dispatch({ type: "SET_LINK", payload: type });
            dispatch({ type: "TOGGLE_LINK", payload: true });
        } else {
            dispatch({ type: "TOGGLE_LINK", payload: !openLink });
        }
    };

    const setDefault = () => {
        const isPathActive = window.location.pathname.split("/").includes("guide")
            ? "guide"
            : window.location.pathname.split("/").includes("components")
                ? "components"
                : "";
        handleSelectLink(isPathActive);
    };

    useEffect(() => {
        setDefault();
    }, []);

    return (
        <nav className={mobileNavbar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
                <div className="docs-nav active-nav noselect">
                    <IoMdClose
                        style={{
                            height: "2rem",
                            width: "2rem",
                            padding: "0.25rem",
                            marginLeft: "auto",
                            borderRadius: "8px",
                            backgroundColor: "#eeedeb",
                        }}
                        onClick={() =>
                            dispatch({ type: "TOGGLE_MOBILE_NAVBAR", payload: !mobileNavbar })
                        }
                    />
                    <>
                        <p onClick={() => handleSelectLink("guide")}>
                            <span>Guide</span>
                            {openLink && selectedLink === "guide" ? (
                                <FaChevronUp />
                            ) : (
                                <FaChevronDown />
                            )}
                        </p>
                        {openLink && selectedLink === "guide" ? (
                            <ul className="list">
                                <li onClick={() => navigate("/docs/guide/introduction")}>
                                    <div style={isActive("/docs/guide/introduction")}>
                                        Introduction
                                    </div>
                                </li>
                                <li onClick={() => navigate("/docs/guide/colors")}>
                                    <div style={isActive("/docs/guide/colors")}>Colors</div>
                                </li>
                                <li onClick={() => navigate("/docs/guide/typography")}>
                                    <div style={isActive("/docs/guide/typography")}>
                                        Typography
                                    </div>
                                </li>
                            </ul>
                        ) : null}
                    </>
                    <>
                        <p onClick={() => handleSelectLink("components")}>
                            <span>Components</span>
                            {openLink && selectedLink === "components" ? (
                                <FaChevronUp />
                            ) : (
                                <FaChevronDown />
                            )}
                        </p>
                        {openLink && selectedLink === "components" ? (
                            <ul className="list">
                                <li onClick={() => navigate("/docs/components/alert")}>
                                    <div style={isActive("/docs/components/alert")}>Alert</div>
                                </li>
                                <li onClick={() => navigate("/docs/components/avatar")}>
                                    <div style={isActive("/docs/components/avatar")}>Avatar</div>
                                </li>
                                <li onClick={() => navigate("/docs/components/badge")}>
                                    <div style={isActive("/docs/components/badge")}>Badge</div>
                                </li>
                                <li onClick={() => navigate("/docs/components/button")}>
                                    <div style={isActive("/docs/components/button")}>Button</div>
                                </li>
                                <li onClick={() => navigate("/docs/components/card")}>
                                    <div style={isActive("/docs/components/card")}>Card</div>
                                </li>
                                <li onClick={() => navigate("/docs/components/headings")}>
                                    <div style={isActive("/docs/components/headings")}>
                                        Headings
                                    </div>
                                </li>
                                <li onClick={() => navigate("/docs/components/text")}>
                                    <div style={isActive("/docs/components/text")}>Text</div>
                                </li>
                                <li onClick={() => navigate("/docs/components/image")}>
                                    <div style={isActive("/docs/components/image")}>Image</div>
                                </li>
                            </ul>
                        ) : null}
                    </>
                </div>
            </ul>
        </nav>
    );
};

export default NavBarMobile;

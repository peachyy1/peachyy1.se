import React, { useState } from "react";
import { ReactComponent as HeaderLogo } from "../../assets/svgs/header-logo.svg";
// import HeaderNav from "./HeaderNav";
import "../../styles/App.scss";
import { useTranslation } from "react-i18next";
import Dropdown from "../Dropdown/Dropdown";

function Header() {
    const [t] = useTranslation("global");

    // const handleChangeLanguage = (lang) => {
    //     i18n.changeLanguage(lang);
    // }

    const [openDropdownMenu, setOpenDropdownMenu] = useState(false);

    return (
        <header className="header">
            <HeaderLogo className="header-logo" />
            {/* <HeaderNav className="header-nav" /> */}
            <button className="dropdown-button" onClick={() => setOpenDropdownMenu((prev) => !prev)}>Language</button>
            {openDropdownMenu && <Dropdown />}
            <div>{t("header.message")}</div>
        </header>
    );
}

export default Header;
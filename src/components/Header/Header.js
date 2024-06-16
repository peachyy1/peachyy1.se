import React from "react";
import { ReactComponent as HeaderLogo } from "../../assets/svgs/header-logo.svg";
import HeaderNav from "./HeaderNav";
import "../../styles/App.scss";
import { useTranslation } from "react-i18next";

function Header() {
    const [t, i18n] = useTranslation("global");
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <header className="header">
            <HeaderLogo className="header-logo" />
            {/* <HeaderNav className="header-nav" /> */}
            <button onClick={() => handleChangeLanguage("en")}>EN</button>
            <button onClick={() => handleChangeLanguage("swe")}>SWE</button>
            <div>{t("header.message")}</div>
        </header>
    );
}

export default Header;
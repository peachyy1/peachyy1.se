import React from "react";
import { useTranslation } from "react-i18next";


function Dropdown() {
    const { i18n } = useTranslation("global");

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="dropdown-menu">
            <ul className="dropdown-ul">
                <li className="en" onClick={() => handleChangeLanguage("en")}>EN</li>
                <li className="swe" onClick={() => handleChangeLanguage("swe")}>SWE</li>
            </ul>
        </div>
    )
}

export default Dropdown;
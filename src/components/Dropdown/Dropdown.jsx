import React from "react";
import { useTranslation } from "react-i18next";


function Dropdown({ closeDropdown }) {
    const { i18n } = useTranslation("global");

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        closeDropdown();
    }

    return (
        <div className="dropdown-menu">
            <ul className="dropdown-ul">
                <li className="en" onClick={() => handleChangeLanguage("en")}>EN</li>
                <li className="swe" onClick={() => handleChangeLanguage("swe")}>SV</li>
            </ul>
        </div>
    )
}

export default Dropdown;
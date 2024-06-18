import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeaderLogo } from "../../assets/svgs/peach-header.svg";
import "../../styles/App.scss";
import { useTranslation } from "react-i18next";
import Dropdown from "../Dropdown/Dropdown";

function Header() {
    const [t] = useTranslation("global");
    const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            buttonRef.current && !buttonRef.current.contains(event.target)
        ) {
            setOpenDropdownMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDropdownButtonClick = (event) => {
        event.stopPropagation();
        setOpenDropdownMenu((prev) => !prev);
    }

    return (
        <header>
            <HeaderLogo className="header-logo" />
            <div className="nav-container">
                <nav>
                    <Link to="/">{t("nav.home")}</Link>
                    <Link to="/about">{t("nav.about")}</Link>
                    <Link to="/gallery">{t("nav.gallery")}</Link>
                </nav>
            </div>
            <div className="dropdown-container">
                <button
                    className="dropdown-button"
                    onClick={handleDropdownButtonClick}
                    ref={buttonRef}
                >
                    {t("language.lang")}
                </button>
                {openDropdownMenu &&
                    <div ref={dropdownRef}><Dropdown closeDropdown={() => setOpenDropdownMenu(false)} />
                    </div>}
            </div>
        </header>
    );
}

export default Header;
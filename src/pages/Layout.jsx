import React from "react";
import { Outlet } from "react-router-dom";
// import { useTranslation } from "react-i18next";

const Layout = () => {
    // const [t] = useTranslation("global");

    return (
        <>
            {/* <nav>
                <div>
                    <Link to="/">{t("nav.home")}</Link>
                    <Link to="/about">{t("nav.about")}</Link>
                    <Link to="/gallery">{t("nav.gallery")}</Link>
                </div>
            </nav> */}
            <Outlet />
        </>
    );
}

export default Layout;
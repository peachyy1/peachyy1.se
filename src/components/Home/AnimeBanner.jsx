// import React from "react";
import { useTranslation } from "react-i18next";
import animeBanner from "../../assets/images/anime/anime-banners/wp12205285.jpg";

const AnimeBanner = () => {
    const [t] = useTranslation("global");

    return (
        <>
            <div className="anime-banner">
                <img src={animeBanner} className="anime-banner-main" alt="anime-banner" />
            </div>
            <div className="anime-header">
                <h1>{t("anime.header")}</h1>
            </div>
        </>
    )
};

export default AnimeBanner;
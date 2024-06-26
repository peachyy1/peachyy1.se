import React from "react";
import { useTranslation } from "react-i18next";
import AnimeBanner from "../components/Home/AnimeBanner.jsx";
import AnimeRow1 from "../components/Home/AnimeRow1.jsx";

const Home = () => {
    const [t] = useTranslation("global");

    return (
        <div>
            <h1>{t("heading.home")}</h1>
            <AnimeBanner />
                <AnimeRow1 />
        </div>
    );
}

export default Home;
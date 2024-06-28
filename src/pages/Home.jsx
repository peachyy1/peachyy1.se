import React from "react";
import { useTranslation } from "react-i18next";
import AnimeBanner from "../components/Home/AnimeBanner.jsx";
import AnimeRow1 from "../components/Home/AnimeRow1.jsx";
import AnimeRow2 from "../components/Home/AnimeRow2.jsx";
import AnimeRow3 from "../components/Home/AnimeRow3.jsx";

const Home = () => {
    const [t] = useTranslation("global");

    return (
        <div>
            <h1>{t("heading.home")}</h1>
            <AnimeBanner />
            <AnimeRow1 />
            <AnimeRow2 />
            <AnimeRow3 />
        </div>
    );
}

export default Home;
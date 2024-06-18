import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
    const [t] = useTranslation("global");

    return <h1>{t("heading.home")}</h1>;
}

export default Home;
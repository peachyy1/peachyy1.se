import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
    const [t] = useTranslation("global");

    return <h1>{t("heading.about")}</h1>;
}

export default About;
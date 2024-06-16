import React from "react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
    const [t] = useTranslation("global");

    return <h1>{t("heading.gallery")}</h1>;
}

export default Gallery;
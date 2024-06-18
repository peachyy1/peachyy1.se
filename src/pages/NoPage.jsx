import React from "react";
import { useTranslation } from "react-i18next";

const NoPage = () => {
    const [t] = useTranslation("global");

    return <h1>{t("heading.error")}</h1>;
}

export default NoPage;
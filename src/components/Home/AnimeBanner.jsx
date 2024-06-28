import { useTranslation } from "react-i18next";
import animeBanner from "../../assets/images/anime/anime-banners/anime-banner.jpg";

const AnimeBanner = () => {
    const [t] = useTranslation("global");

    return (
        <>
            <div className="anime-banner-home">
                <img src={animeBanner} className="anime-banner-home-main" alt="anime-banner" />
            </div>
            <div className="anime-header-main">
                <h1>{t("anime.header")}</h1>
            </div>
        </>
    )
};

export default AnimeBanner;
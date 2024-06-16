import { useTranslation } from "react-i18next";

const Home = () => {
    // return <div>Home</div>;
    const [t] = useTranslation("global");

    return (
        <div>
            {/* <h1>
                {t("headingHome.title")}
            </h1> */}
            <p>
                {t("home.body")}
            </p>
        </div>
    )
};

export default Home;
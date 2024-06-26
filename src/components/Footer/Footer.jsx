import React from "react";
import { ReactComponent as FooterLogo } from "../../assets/svgs/peach.svg"
import { ReactComponent as Discord } from "../../assets/svgs/discord.svg"
import { ReactComponent as Github } from "../../assets/svgs/github.svg"
import { ReactComponent as Snapchat } from "../../assets/svgs/snapchat.svg"
import { ReactComponent as Location } from "../../assets/svgs/location.svg"
import { ReactComponent as Mail } from "../../assets/svgs/mail.svg"
import { ReactComponent as Phone } from "../../assets/svgs/phone.svg"
import { useTranslation } from "react-i18next";
import "../../styles/App.scss";

function Footer() {
    const [t] = useTranslation("global");

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-info">
                    <div className="footer-info-vectors">
                        <Location className="location-vector" />
                        <Phone className="phone-vector" />
                        <Mail className="mail-vector" />
                    </div>
                    <div className="footer-info-text">
                        <div className="location-text">{t("footer.location")}</div>
                        <div className="phone-text">{t("footer.phone")}</div>
                        <div className="mail-text">{t("footer.mail")}</div>
                    </div>
                </div>
                <div className="footer-logo">
                    <FooterLogo className="footer-logo-svg" />
                </div>
                <div className="footer-socials">
                    <Github className="github" />
                    <Snapchat className="snapchat" />
                    <Discord className="discord" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import { Link } from "react-router-dom";
import r2C1 from "../../assets/images/anime/anime-posters/r2-c1.jpg";
import r2C2 from "../../assets/images/anime/anime-posters/r2-c2.jpg";
import r2C3 from "../../assets/images/anime/anime-posters/r2-c3.jpg";
import r2C4 from "../../assets/images/anime/anime-posters/r2-c4.jpg";

const AnimeRow2 = () => {
    return (
        <>
            <div className="anime-row-2">
                <div className="anime-row-2-col-1">
                    <div className="anime-card">
                        <Link to="/flcl">
                            <img src={r2C1} alt="flcl" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/flcl">
                            <p>
                                Mysterious things start happening when 12-year-old Naota meets a strange woman on a Vespa wielding a big guitar.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="anime-row-2-col-2">
                    <div className="anime-card">
                        <Link to="/lain">
                            <img src={r2C2} alt="lain" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/lain">
                            <p>
                                Strange things start happening when a withdrawn girl named Lain becomes obsessed with an interconnected virtual realm known as "The Wired".
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="anime-row-2-col-3">
                    <div className="anime-card">
                        <Link to="/perfect-blue">
                            <img src={r2C3} alt="perfect-blue" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/perfect-blue">
                            <p>
                                A pop singer gives up her career to become an actress, but she slowly goes insane when she starts being stalked by an obsessed fan and what seems to be a ghost of her past.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="anime-row-2-col-4">
                    <div className="anime-card">
                        <Link to="/death-note">
                            <img src={r2C4} alt="death-note" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/death-note">
                            <p>
                                An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AnimeRow2;
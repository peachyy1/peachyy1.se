import { Link } from "react-router-dom";
import r3C1 from "../../assets/images/anime/anime-posters/r3-c1.jpg";
import r3C2 from "../../assets/images/anime/anime-posters/r3-c2.jpg";
import r3C3 from "../../assets/images/anime/anime-posters/r3-c3.jpg";
import r3C4 from "../../assets/images/anime/anime-posters/r3-c4.jpg";

const AnimeRow3 = () => {
    return (
        <>
            <div className="anime-row-3">
                <div className="anime-row-3-col-1">
                    <div className="anime-card">
                        <Link to="/steins-gate">
                            <img src={r3C1} alt="steins-gate" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/steins-gate">
                            <p>
                                After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="anime-row-3-col-2">
                    <div className="anime-card">
                        <Link to="/violet-evergarden">
                            <img src={r3C2} alt="violet-evergarden" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/violet-evergarden">
                            <p>
                                In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="anime-row-3-col-3">
                    <div className="anime-card">
                        <Link to="/mob-psycho-100-2">
                            <img src={r3C3} alt="mob-psycho-100-2" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/mob-psycho-100-2">
                            <p>
                                A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="anime-row-3-col-4">
                    <div className="anime-card">
                        <Link to="/oregairu-kan">
                            <img src={r3C4} alt="oregairu-kan" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/oregairu-kan">
                            <p>
                                About an antisocial high school student named Hikigaya Hachiman with a distorted view on life and no friends or girlfriend. His life changed when he was forced to enter the "Volunteer Service Club" by his teacher.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AnimeRow3;
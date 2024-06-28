import { Link } from "react-router-dom";
import r1C1 from "../../assets/images/anime/anime-posters/r1-c1.jpg";
import r1C2 from "../../assets/images/anime/anime-posters/r1-c2.jpg";
import r1C3 from "../../assets/images/anime/anime-posters/r1-c3.jpg";
import r1C4 from "../../assets/images/anime/anime-posters/r1-c4.jpg";

const AnimeRow1 = () => {
    return (
        <>
            <div className="anime-row-1">
                <div className="anime-row-1-col-1">
                    <div className="anime-card">
                        <Link to="/evangelion">
                            <img src={r1C1} alt="evangelion" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/evangelion">
                            <p>
                                A teenage boy finds himself recruited as a member of an elite team of pilots by his father.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="anime-row-1-col-2">
                    <div className="anime-card">
                        <Link to="/end-of-evangelion">
                            <img src={r1C2} alt="end-of-evangelion" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/end-of-evangelion">
                            <p>
                                Concurrent theatrical ending of the TV series Shin seiki evangerion (1995).
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="anime-row-1-col-3">
                    <div className="anime-card">
                        <Link to="/a-silent-voice">
                            <img src={r1C3} alt="a-silent-voice" />
                        </Link>
                    </div>
                    <div className="anime-text">
                        <Link to="/a-silent-voice">
                            <p>
                                A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="anime-row-1-col-4">
                    <div className="anime-card">
                        <Link to="/kill-la-kill">
                            <img src={r1C4} alt="kill-la-kil" />
                        </Link>

                    </div>
                    <div className="anime-text">
                        <Link to="/kill-la-kill">
                            <p>
                                A young girl arrives at a school of superhumans to find out the truth behind her father's murder.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AnimeRow1;
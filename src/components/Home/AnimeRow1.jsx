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
                        <img src={r1C1} alt="" />
                    </div>
                    <div className="anime-text">
                        <p>
                            A teenage boy finds himself recruited as a member of an elite team of pilots by his father.
                        </p>
                    </div>
                </div>
                <div className="anime-row-1-col-2">
                    <div className="anime-card">
                        <img src={r1C2} alt="" />

                    </div>
                    <div className="anime-text">
                        <p>
                            Concurrent theatrical ending of the TV series Shin seiki evangerion (1995).
                        </p>
                    </div>
                </div>
                <div className="anime-row-1-col-3">
                    <div className="anime-card">
                        <img src={r1C3} alt="" />

                    </div>
                    <div className="anime-text">
                        <p>
                            A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.
                        </p>
                    </div>
                </div>
                <div className="anime-row-1-col-4">
                    <div className="anime-card">
                        <img src={r1C4} alt="" />

                    </div>
                    <div className="anime-text">
                        <p>
                            A young girl arrives at a school of superhumans to find out the truth behind her father's murder.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AnimeRow1;
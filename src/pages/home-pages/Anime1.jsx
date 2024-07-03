import React from "react";
import r1C1Banner from "../../assets/images/anime/anime-banners/r1-c1-banner.jpg";
import r1C1 from "../../assets/images/anime/anime-posters/r1-c1.jpg";
import StarSVG from "../../components/Home/StarSVG.jsx";

const Anime1 = () => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <>
            <div className="anime-banner">
                <img src={r1C1Banner} alt="evangelion-banner" />
            </div>
            <div className="anime-container">
                <div className="anime-container-left">
                    <div className="anime-image">
                        <img src={r1C1} alt="evangelion" />
                    </div>
                    <div className="anime-title">
                        <p>
                            Neon Genesis Evangelion
                        </p>
                    </div>
                    <div className="anime-stats">
                        <p>
                            Type: TV
                        </p>
                        <p>
                            Episodes: 26
                        </p>
                        <p>
                            Premiered: Fall 1995
                        </p>
                        <p>
                            Studios: Gainax, Tatsunoko Production
                        </p>
                        <p>
                            Genres: Action, Avant Garde, Drama, Sci-Fi
                        </p>
                        <p>
                            Themes: Mecha, Psychological
                        </p>
                        <p>
                            Duration: 24 min. per ep.
                        </p>
                        <p>
                            Rating: PG-13 - Teens 13 or older
                        </p>
                    </div>
                </div>
                <div className="anime-container-right">
                    <div className="anime-info">
                        <p>
                            Fifteen years after a cataclysmic event known as the Second Impact, the world faces a new threat: monstrous celestial beings called Angels invade Tokyo-3 one by one. Mankind is unable to defend themselves against the Angels despite utilizing their most advanced munitions and military tactics. The only hope for human salvation rests in the hands of NERV, a mysterious organization led by the cold Gendou Ikari. NERV operates giant humanoid robots dubbed "Evangelions" to combat the Angels with state-of-the-art advanced weaponry and protective barriers known as Absolute Terror Fields.
                        </p>
                    </div>
                    <div className="anime-review">
                        <p>
                            One of if not the greatest anime ever made. Due to creator Hideaki Anno's difficult times, darkness blended into and shaped this classic anime. It explores the human conciousness, mental illnesses, and philosophical topics such as what it means to be human. The main character Shinji's hardships are a common theme throught the show. We follow him along turbulent times and situations. Defending humanity from massive alien creatures cannot be easy, therefore his actions are realistic. Although we cannot relate to the defending the earth-task, most of us have faced situations where we have wanted to run away and never look back. Shinji's motif can be explained by looking at his past. A distant mother and a cold father did not make his childhood a joyful one. Therefore it is important to note his apparent depression as a hindrance to his decision-making. The deep dive into psychology is gradual from beginning to end. The other characters add depth to Shinji's journey and we see how he tries to learn from his mistakes.
                        </p>
                    </div>
                    <div className="anime-rating">
                        {stars.map((star, index) => {
                            return (
                                <>
                                    <StarSVG key={index} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Anime1;
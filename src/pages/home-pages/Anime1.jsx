import React from "react";
import r1C1Banner from "../../assets/images/anime/anime-banners/r1-c1-banner.jpg";
import r1C1 from "../../assets/images/anime/anime-posters/r1-c1.jpg";

const Anime1 = () => {
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
                        <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.0489 0.92705C21.3483 0.00573897 22.6517 0.00574017 22.9511 0.927051L27.3883 14.5836C27.5222 14.9956 27.9062 15.2746 28.3394 15.2746H42.6987C43.6675 15.2746 44.0702 16.5142 43.2865 17.0836L31.6696 25.5238C31.3191 25.7784 31.1724 26.2298 31.3063 26.6418L35.7436 40.2984C36.0429 41.2197 34.9884 41.9858 34.2047 41.4164L22.5878 32.9762C22.2373 32.7216 21.7627 32.7216 21.4122 32.9762L9.79527 41.4164C9.01155 41.9858 7.95707 41.2197 8.25642 40.2984L12.6937 26.6418C12.8276 26.2298 12.6809 25.7784 12.3304 25.5238L0.713483 17.0836C-0.0702302 16.5142 0.332547 15.2746 1.30127 15.2746H15.6606C16.0938 15.2746 16.4778 14.9956 16.6117 14.5836L21.0489 0.92705Z"
                                fill="url(#paint0_linear_135_16)" />
                            <defs>
                                <linearGradient id="paint0_linear_135_16" x1="22" y1="-2" x2="22" y2="48"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0.2" stop-color="#FBFF50" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Anime1;
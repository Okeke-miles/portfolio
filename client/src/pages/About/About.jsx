import React from 'react'
import "../About/About.scss"
import ProfilePic from "../../assets/20201026_105911.jpg"
import BackPic from "../../assets/profile-pic.jpg"

function About() {
    return (
        <div>
            <header className="about-header__style">
                <h1 className= "header-title__style">About Me</h1>
            </header>
            <div className="desc__style">
                    Hi there, my name is Frank; a Corporate Commercial Lawyer turned Software Engineer. My transition from a law career can be encapsulated in one word: creation. I have always been a builder.
            </div>
            <div className="about-container__style">
                <div className="flip-box__style">
                    <div className="flip-box__inner">
                        <div className="front-view__style">
                            <img className="profile__style" src={ProfilePic} alt="profile" />
                        </div>
                        <div className="back-view__style">
                            <img className="back-profile__style" src={BackPic} alt="profile" />
                        </div>
                    </div>
                </div>
              
            </div>
            <div className="flip-box__style">
                <div className="flip-box__inner">
                    <div className="front-end__style">
                        <h2>Front-End</h2>
                        <p>JavaScript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>React</p>
                        <p>PHP</p>
                    </div>
                    <div className="back-end__style">
                        <h2>Back-End</h2>
                        <p>Node.Js</p>
                        <p>Ruby-On-Rails</p>
                        <p>MongoDB</p>
                        <p>MySQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

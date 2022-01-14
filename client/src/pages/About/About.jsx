import React from 'react'
import "../About/About.scss"
// import ProfilePic from "../../assets/20201026_105911.jpg"
// import BackPic from "../../assets/profile-pic.jpg"
import Mongodb from "../../assets/mongodb.png"
import ReactLogo from "../../assets/react-logo.png"
import Node from "../../assets/node.png"
import Mysql from "../../assets/mysql.png"
// import Express from "../../assets/express.jpg"
import Ruby from "../../assets/ror.png"
import Sass from "../../assets/sass.png"
import Javascript from "../../assets/javascript.jpg"
import Php from "../../assets/php.png"
import HTML from "../../assets/html.png"


function About() {
    return (
        <div>
            <header className="about-header__style">
                <h1 className= "header-title__style">About Me</h1>
            </header>
            <div className="about-desc__style">
                    <p>Hi there, my name is Frank; a Software Engineer turned Product Manager. In my previous life, I also worked as a commercial lawyer. My transition to software engineering can be encapsulated in one word: creation. I have always been a builder. Working as a corporate commercial lawyer for tech startups exposed me to a new world. </p>

                    <p className="cont-desc__style">In Web Development, you are only limited by your thoughts and mine are limitless. Welcome to my world. Do not hesitate to contact me if you want to collaborate on a project or you need someone to act as a springboard for your crazy ideas.</p>
            </div>
            {/* <div className="about-container__style">
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
              
            </div> */}
            <div className="flip-box__style">
                <div className="flip-box__inner">
                
                    <div className="front-end__style">
                        <h2 className="frontend-title__style">Front-End Tools</h2>
                        <div className="frontend-tools__style">                        
                            {/* <p>JavaScript</p> */}
                            <img className="dev-image__style" src={Javascript} alt="javascript"/>
                            {/* <p>HTML</p> */}
                            <img className="dev-image__style" src={HTML} alt="HTML"/>
                            {/* <p>CSS</p> */}
                            <img className="dev-image__style"src={Sass} alt="Sass"/>
                            {/* <p>React</p> */}
                            <img className="dev-image__style" src={ReactLogo} alt="React"/>
                            {/* <p>PHP</p> */}
                            <img className="dev-image__style" src={Php} alt="PHP"/>
                        </div>
                    </div>
                   
                    <div className="back-end__style">
                        <h2 className="backend-title__style">Back-End Tools</h2>
                        <div className="backend-tools__style">                       
                            {/* <p>Node.Js</p> */}
                            <img className="dev-image__style" src={Node} alt="Node"/>
                            {/* <p>Ruby-On-Rails</p> */}
                            <img className="dev-image__style" src={Ruby} alt="Ruby"/>
                            {/* <p>MongoDB</p> */}
                            <img className="dev-image__style" src={Mongodb} alt="MongoDB"/>
                            {/* <p>MySQL</p> */}
                            <img className="dev-image__style" src={Mysql} alt="MySQL"/>
                            {/* <img className="dev-image__style" src={Express} alt="Express"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

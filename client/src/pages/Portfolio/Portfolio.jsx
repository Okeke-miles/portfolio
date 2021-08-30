import React from 'react'
import "../Portfolio/Portfolio.scss"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Bandsite from "../../assets/bandsite.png"
import Instock from "../../assets/instock.png"
import Trivia from "../../assets/trivia.png"
import WiiWatch from "../../assets/wiiwatch.jpg"
import Preview from "../../assets/wiiwatch-preview.png"
import Github from "../../assets/github.png"

function Portfolio() {

    const slideImages = [
        {Bandsite},
        {Instock},
        {Trivia},
        {WiiWatch},
        {Preview}
      ];

    return (
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className="image__style" style={{'backgroundImage': `url(${Bandsite})`}}></div>
            <div className="desc__style">
                <p className="site-desc__style">Built a website for a (pseudo) music band. While building, I simulated a professional work environment. We were given mockups of the visual requirements of the website. I ensured I replicated all the visual features to the minutest detail.</p><a className="link__style" href="https://confident-einstein-e65e4b.netlify.app/index.html" alt="website-link"> <p className="click__style">Click here for a tour!</p></a>
                <div className="tools-container__style">
                  <a className="link__style" href="https://github.com/Okeke-miles/Bandsite" alt="bandsite-link"><img className="tools-image__style" src={Github} alt="github" /></a>
                  <p className="tools__style">HTML5</p><p className="tools__style">SASS</p><p className="tools__style">JavaScript</p>
                </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="image__style" style={{'backgroundImage': `url(${Instock})`}}></div>
            <div className="desc__style">
                <p className="site-desc__style">Built a warehouse inventory management system as a Single Page Application. Tools used includes React, Node.JS, Sass, Git and Web APIs.</p><a className="link__style" href="https://hungry-davinci-037940.netlify.app/" alt="website-link"><p className="click__style"> Click here for a tour! </p> </a>
                <div className="tools-container__style">
                  <a className="link__style" href="https://github.com/Okeke-miles/instock-inventory" alt="instock-link"><img className="tools-image__style" src={Github} alt="github" /></a>
                  <p className="tools__style">HTML5</p><p className="tools__style">SASS</p><p className="tools__style">JavaScript</p> <p className="tools__style">React</p><p className="tools__style">Figma</p><p className="tools__style">Node.Js</p>
                </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="image__style" style={{'backgroundImage': `url(${Trivia})`}}></div>
            <div className="desc__style">
                <p className="site-desc__style">Built an all-genre themed trivia game Single Page Application. It used a third- party API to generate genre neutral trivia questions for players. Tools used includes React, Node.JS, Sass, Git and Web APIs.</p><a className="link__style" href="https://jolly-hawking-c2984c.netlify.app/" alt="website-link"> <p className="click__style"> Click here for a tour! </p> </a>
                <div className="tools-container__style">
                  <a className="link__style" href="https://github.com/Okeke-miles/Mayhort-Trivia" alt="trivia-link"><img className="tools-image__style" src={Github} alt="github" /></a>
                  <p className="tools__style">HTML5</p><p className="tools__style">SASS</p><p className="tools__style">JavaScript</p><p className="tools__style">React</p><p className="tools__style">Node.Js</p><p className="tools__style">Web APIs</p>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="image__style" style={{'backgroundImage': `url(${WiiWatch})`}}></div>
            <div className="desc__style">
                <p className="site-desc__style">I built a cinema-themed video player which enables people watch videos in-sync. In this project, I simulated a professional work environment. I made sketches of how the design would look before proceeding. I used a pseudo–Kanban Board to list tasks and tick them off based on completion. Tools used includes Sass, React, MongoDB, Express and Node.js. I also used several libraries such as Moment.js for time manipulation, React Player for video player, Fuse.js for my search bar and much more.</p><a className="link__style" href="https://www.loom.com/share/f82f5f56407f4d04981504c63d784663" alt="website-link"> <p className="click__style"> Click here for a tour! </p></a>
                <div className="tools-container__style">
                  <a className="link__style" href="https://github.com/Okeke-miles/capstone-project" alt="bandsite-link"><img className="tools-image__style" src={Github} alt="github" /></a>
                  <p className="tools__style">HTML5</p><p className="tools__style">SASS</p><p className="tools__style">JavaScript</p><p className="tools__style">React</p><p className="tools__style">Node.js</p><p className="tools__style">Web APIs</p><p className="tools__style">MongoDB</p>
                </div>
            </div>
          </div>
        </Slide>
      </div>
    )
}


export default Portfolio

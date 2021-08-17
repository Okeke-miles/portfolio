import React from 'react'
import "../Portfolio/Portfolio.scss"
import 'react-slideshow-image/dist/styles.css'
import Bandsite from "../../assets/bandsite.png"
import Instock from "../../assets/instock.png"
import Trivia from "../../assets/trivia.png"
import WiiWatch from "../../assets/wiiwatch.png"
import Preview from "../../assets/wiiwatch-preview.png"

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
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
    )
}

export default Portfolio

import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../HomePage/HomePage.scss"

function HomePage() {

    //Used a react fade through to fade through several banner images.

    return (
        <div>
            <div className="slide-container">
                <Fade>
                    <header className="home-desc__style">
                        <h1 className= "header__style">What Do You Want? I'll Build It</h1>
                        <h2 className= "header-desc__style">Power of Innovation</h2>
                    </header>
                    <div className="new-desc__style">
                        <h1 className= "header__style">Let Me Defy Your Expectations</h1>
                        <h2 className= "header-desc__style">Power of Continuous Improvement</h2>
                    </div>
                    <div className="third-desc__style">
                        <h1 className= "header__style">If It Can be Thought Of, It Can Be Built</h1>
                        <h2 className= "header-desc__style">Power of Perseverance</h2>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default HomePage

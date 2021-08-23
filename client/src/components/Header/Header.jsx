import "../Header/Header.scss"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <nav className="page-header">
                <div className="page-header__wrapper">
                    <NavLink className="nav-list__item" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-list__item" to="/portfolio">
                        My Portfolio
                    </NavLink>
                    <NavLink className="nav-list__item" to="#">
                        Blog
                    </NavLink>
                    <NavLink className="nav-list__item" to="/about">
                        About Me
                    </NavLink>
                </div>               
            </nav>
        </div>
    )
}

export default Header
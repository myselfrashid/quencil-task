import { Fragment } from "react";
import logo from '../assets/logo.png';
import { Link, Outlet,  } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
    return (
        <Fragment>
            <header>
                <div className="nav">
                    <input type="checkbox" id="nav-check"/>
                        <div className="nav-header">
                            <div className="nav-title">
                                <Link to="/"><img src={logo} alt="logo" width={120} /></Link>
                            </div>
                        </div>
                        <div className="nav-btn">
                            <label for="nav-check">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>

                        <div className="nav-links">
                            <Link to="/">HOME</Link>
                            <Link to="casestudy">CASE STUDY</Link>
                            <Link to="joinquencil">WHY QUENCIL</Link>
                            <Link to="detail">DETAILED ANALYSIS</Link>
                            <Link to="alumni">OUR ALUMNI</Link>
                            <Link to="founder">ABOUT</Link>
                        </div>
                </div>
            </header>
            <Outlet />
        </Fragment>
    )
}

export default Navbar;


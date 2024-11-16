import { Outlet, Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <>
            <nav>
                <div id="left">

                </div>
                    <div id="middle">
                    <div className={splitLocation[1] === "" ? "active" : ""}>
                        <Link className="link" to="/">Home</Link>
                    </div>
                    <div className={splitLocation[1] === "experience" ? "active" : ""}>
                        <Link className="link" to="/experience">Experience</Link>
                    </div>
                    <div className={splitLocation[1] === "education" ? "active" : ""}>
                        <Link className="link" to="/education">Education</Link>
                    </div>
                    <div className={splitLocation[1] === "skills" ? "active" : ""}>
                        <Link className="link" to="/skills">Skills</Link>
                    </div>
                </div>
                <div id="right">

                </div>
        </nav>

        <Outlet />
      </>
    )
}

export default Navbar

/*
<nav>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link className="link" to="/education">Education</Link>
                    </li>
                    <li>
                        <Link className="link" to="/skills">Skills</Link>
                    </li>
                </ul>
        </nav>
*/
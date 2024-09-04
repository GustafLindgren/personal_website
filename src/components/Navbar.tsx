import { Outlet, Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                </ul>
        </nav>

        <Outlet />
      </>
    )
}

export default Navbar
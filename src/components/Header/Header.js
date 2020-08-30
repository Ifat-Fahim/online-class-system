import React from "react";
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <a href="/courses">Courses</a>
                    </li>
                    <li>
                        <a href="/features">Features</a>
                    </li>
                    <li>
                        <a href="/instructors">Instructors</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

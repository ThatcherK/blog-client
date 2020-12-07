import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navBar">
            <h1>Thatcher's blog</h1>
            <ul className="menu-items">
                <li>
                    <NavLink exact activeClassName="current" to="/">
                        Home
				</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="current" to="/blog">
                        Blog
				</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="current" to="/signup">
                        Sign up
				</NavLink>
                </li>

                <li>
                    <NavLink exact activeClassName="current" to="/signin">
                        Sign In
				</NavLink>
                </li>
            </ul>
        </div>

    )
}
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/posts">Post</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation
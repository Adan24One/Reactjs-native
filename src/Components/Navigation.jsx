import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div class='text text-align'>
        <h1>Belajar React Router Dom</h1>
        <nav>
            <Link to='/'>Home</Link> | {" "}
            <Link to='profile'>Profile</Link> | {" "}
            <Link to='about'>About</Link>
            <div class="d-inline-flex p-2 text-white">
                <form>
                    <input class="form-control" type="search"placeholder="Search..."aria-label="Search..." />
                    <button variant="dark" type="submit">Search</button>
                </form>
            </div>
        </nav>

    </div>
  );
}

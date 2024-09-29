import React, { useState, useEffect } from 'react';
// import Navigation from './Navigation';
import './Style.css';  // Import CSS buat styling
import { Link } from "react-router-dom";

function Profile () {
    const [content, setContent] = useState({ overview: '' });

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3004/api/view/get'); // Ganti path jadi /get
        const data = await response.json();
        setContent(data.content);
      }
      fetchData();
    }, []);
  
    return (
        <div className="card">
            <header>
                <h1>Curiculum Vitae</h1>
                <p>Posted by Zaki</p>
            </header>
            <nav>
                <button className="btn btn-neutral-content">
                    <Link to="/">Home</Link>
                </button>
                <button>Overview</button>
                <button><Link to="/About">About Me</Link></button>
                <button><Link to="/Skill">Skill&Pengalaman</Link></button>
            </nav>
            <div className="profile">
            {content.overview}
            </div>
            <footer>
            <p>Author: Hafizh | hafizh@gmail.com</p>

            </footer>
        </div>
    );
}

export default Profile;
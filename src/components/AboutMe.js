import React, { useState, useEffect } from 'react';
// import Navigation from './Navigation';
import './Style.css';  // Import CSS buat styling
import { Link } from "react-router-dom";

const Profile = () => {
    const [content, setContent] = useState({ name: '', description: '' });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/me/get'); // Ganti path jadi /get
      const data = await response.json();
      setContent(data.content);
    }
    fetchData();
  }, []);
    return (
        <div className="card">
            <header>
                <h1>Curiculum Vitae</h1>
                <p>Posted by Hafizh</p>
            </header>
            <nav>
                <button className="btn btn-neutral-content">
                    <Link to="/">Home</Link>
                </button>
                <button><Link to="/Profile">Overview</Link></button>
                <button>About Me</button>
                <button><Link to="/Skill">Skill&Pengalaman</Link></button>
            </nav>
            <h2>Nama: {content.name}</h2>
            <div className="profile">{content.description}
            </div>
            <footer>
            <p>Author: Hafizh | <a href="Hafizh@gmail.com" class="email-link">Hafizh@gmail.com</a></p>

            </footer>
        </div>
    );
}

export default Profile;
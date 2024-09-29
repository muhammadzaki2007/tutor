import React from 'react';
// import Navigation from './Navigation';
import './edit.css';  // Import CSS buat styling
import { Link } from "react-router-dom";

const Profile = () => {
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
            <h2>Nama: Hafizh</h2>
            <div className="profile">
            Halo! Saya adalah seorang Web Developer dengan pengalaman di bidang
            HTML, CSS, dan Javascript. Saya magang di beberapa tempat untuk mengembangkan skill saya lebih lanjut.
            </div>
            <footer>
            <p>Author: Hafizh | <a href="mailto:mzakiw2007@gmail.com" class="email-link">mzakiw2007@gmail.com</a></p>

            </footer>
        </div>
    );
}

export default Profile;
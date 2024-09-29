import React from 'react';
import './Style.css';  // Import CSS buat styling
import { Link } from "react-router-dom";

const SkillPengalaman = () => {
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
                <button>
                    <Link to="/Profile">Overview</Link>
                </button>
                <button><Link to="/About">About Me</Link></button>
                <button>Skill & Pengalaman</button>
            </nav>
            <div className="content-wrapper">
            {/* Bagian Skill */}
            <div className="skill-section">
                <h3>Skill yang Saya kuasai saat ini:</h3>
                <ul>
                    <li>
                        HTML
                        <div className="progress-bar">
                            <div className="progress" style={{ width: "80%" }}></div>
                        </div>
                    </li>

                    <li>
                        CSS
                        <div className="progress-bar">
                            <div className="progress" style={{ width: "70%" }}></div>
                        </div>
                    </li>

                    <li>
                        Javascript
                        <div className="progress-bar">
                            <div className="progress" style={{ width: "60%" }}></div>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
            {/* Bagian Pengalaman */}
            <div className="pengalaman-section">
                <h3>Pengalaman saya:</h3>
                <ul>
                    <li>Magang di Sekolah</li>
                    <li>Freelance di Nusantech</li>
                </ul>
            </div>

            <footer>
                <p>Author: Hafizh | Hafizh@gmail.com</p>
            </footer>
        </div>
    );
}

export default SkillPengalaman;

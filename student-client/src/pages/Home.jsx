import React from 'react';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.png"

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="hero-section" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="hero-title">VNR VJIET Hostel</h1>
                        <p className="hero-subtitle">Your home away from home – Safe, Comfortable, and Supportive.</p>
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="responsive-container">
                    <h2 className="section-title">Explore Our Hostel</h2>
                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src={img2} alt="Hostel Room" className="gallery-image" />
                            <div className="gallery-caption">Comfortable Rooms</div>
                        </div>
                        <div className="gallery-item">
                            <img src={img3} alt="Common Area" className="gallery-image" />
                            <div className="gallery-caption">Common Areas</div>
                        </div>
                        <div className="gallery-item">
                            <img src={img4} alt="Facilities" className="gallery-image" />
                            <div className="gallery-caption">Modern Facilities</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="responsive-container">
                    <h2 className="section-title">Emergency Contacts</h2>
                    <div className="contact-grid">
                        <div className="contact-card">
                            <h4>Hostel Warden</h4>
                            <p>+91-98765-43210</p>
                        </div>
                        <div className="contact-card">
                            <h4>Security Office</h4>
                            <p>+91-87654-32109</p>
                        </div>
                        <div className="contact-card">
                            <h4>Medical Assistance</h4>
                            <p>+91-76543-21098</p>
                        </div>
                        <div className="contact-card">
                            <h4>Admin Office</h4>
                            <p>+91-65432-10987</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="home-footer">
                <div className="responsive-container">
                    &copy; 2025 VNR VJIET Hostel | All Rights Reserved
                </div>
            </footer>
        </div>
    );
};



export default HomePage;

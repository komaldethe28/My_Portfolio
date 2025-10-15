import React, { useEffect, useState } from "react";
import "./Certifications.css"; // We'll create this CSS file
import data from "../../data/certifications.json";
export const Certifications = () => {
    const [certs, setCerts] = useState([]);

    useEffect(() => {
        // In real app, you could fetch JSON from an API
        setCerts(data);
    }, []);

    return (
        <section className="certifications-section" id="certifications-section">
            <h2>Certifications</h2>
            <p>
                I am committed to continuous professional development, evidenced by
                certifications in key areas:
            </p>

            <div className="certifications-grid">
                {certs.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-card"
                    >
                        <div className="cert-title">{cert.title}</div>
                        <div className="cert-company">{cert.company}</div>
                    </a>
                ))}
            </div>

        </section>
    );
};

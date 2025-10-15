import educationData from "../../data/education.json";
import React from "react";
import "./Education.css";
export const Education = () => {
  return (
    <section className="education-section" id="education-section">
      <h2 className="education-title">Education</h2>

      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div className="education-item" key={index}>
            
            <div className="education-details">
              <h3>{edu.institution}</h3>
              <p className="duration">{edu.duration}</p>
              <p>{edu.degree} - ({edu.marks})</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

 


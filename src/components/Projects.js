import React, { useState } from "react";

const projects = [
  {
    title: "atishay shivalay 2",
    image: "/images/atishay shivalay 2.jpg", // Replace with actual image URL
  },
  {
    title: "HR elanza",
    image: "/images/HR elanza.jpg", // Replace with actual image URL
  },
  {
    title: "skydeck prive",
    image: "/images/skydeck prive.jpg", // Replace with actual image URL
  },
  {
    title: "aagam avenue",
    image: "/images/aagam avenue.jpg", // Replace with actual image URL
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container" style={{ backgroundImage: "url('/images/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="projects-title">OUR PROJECTS</h2>
      <p className="projects-subtitle">See What We Have Completed Recently</p>
      <div className="projects-carousel">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => openPopup(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-name">{project.title}</div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="popup-image"
            />
            <h3>{selectedProject.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

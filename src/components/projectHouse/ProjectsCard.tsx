// src/components/ProjectsLayout.tsx
import React from "react";
import House1 from "./House1";
import House2 from "./House2";
import House3 from "./House3";
import House4 from "./House4";
import "./ProjectsLayout.css";

const ProjectsCard: React.FC = () => {
    return (
        <section className="projects-layout">
            <div className="projects-grid">
                <House1 />
                <House2 />
                <House3 />
                <House4 />
                {/* Muốn thêm House5, House6... chỉ cần thêm vào đây */}
            </div>
        </section>
    );
};

export default ProjectsCard;
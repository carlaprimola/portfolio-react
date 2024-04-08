"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/app/components/ProjectInfo/project.css";
import Image from "next/image";

export default function Project() {
  const [currentProjects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/portfolio");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.response);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="projects-section">
      {currentProjects.map(
        ({
          id,
          projectName,
          description,
          category,
          tecnology,
          githubLink,
          figmaLink,
          deployLink,
          image,
        }) => (
          <main key={id}>
            <h3>{projectName}</h3>
            <Image
              src={image}
              alt={projectName}
              width={800}
              height={800}
              layout="responsive"
            />

            <h4>{category}</h4>
            <article>{description}</article>
            <p className="tecnology">
              <strong>{tecnology}</strong>
            </p>
            <p>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <strong>Link GitHub</strong>{" "}
              </a>
            </p>
            <p>
              <a href={figmaLink} target="_blank" rel="noopener noreferrer">
                <strong>Link Figma</strong>{" "}
              </a>
            </p>
            <p>
              <a href={deployLink} target="_blank" rel="noopener noreferrer">
                <strong>Link Deploy</strong>{" "}
              </a>
            </p>
          </main>
        )
      )}
    </section>
  );
}

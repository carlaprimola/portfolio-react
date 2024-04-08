"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/app/components/ProjectInfo/project.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="projects-section mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap">
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
          <article
            key={id}
            className="card w-96 bg-base-100 shadow-xl rounded-t-xl rounded-b-xl flex-grow"
          >
            <figure className="overflow-hidden rounded-t-xl h-60">
              <Image
                src={image}
                alt={projectName}
                width={400}
                height={400}
                layout="responsive"
                className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
              />
            </figure>

            <div className="card-body">
              <h2 className="mt-3 text-3xl text-black font-semibold text-center h-10 rounded-xl mb-3">
                {projectName}
              </h2>
              <h4 className="mt-2 mb-2">{category}</h4>
            </div>

            <div className="flex justify-center ">
              <button
                onClick={() => setIsOpen(true)}
                className="btn btn-outline btn-error mb-4 text-xl"
              >
                Ver más
              </button>
            </div>

            {/* Modal */}
            {isOpen && (
              <div
                className="fixed z-10 inset-0 overflow-y-auto"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                  ></div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-title"
                          >                          
                            {projectName}
                          </h3>
                          <article>{description}</article>
                          <section className="flex w-100 mt-4 mb-4 gap-5 text-center rounded-lg justify-center items-center align-middle">
                            <p className="tecnology text-xs w-30 text-center bg-red-100 rounded-lg p-2 text-red-500 items-center">
                              <strong>{tecnology}</strong>
                            </p>
                          </section>
                          <div className="mt-2">
                            <p>
                              <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <strong>Link GitHub</strong>{" "}
                              </a>
                            </p>
                            <p>
                              <a
                                href={figmaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <strong>Link Figma</strong>{" "}
                              </a>
                            </p>
                            <p>
                              <a
                                href={deployLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <strong>Link Deploy</strong>{" "}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="btn btn-error"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </article>
        )
      )}
    </section>
  );
}

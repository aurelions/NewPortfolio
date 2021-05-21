import React, { useState, useEffect } from "react";
// import sanityClient from '../client.js'
import firebase from "../firebase";
import { Card, Image, Button, ButtonGroup } from "react-bootstrap";
// import {Link} from 'react-router-dom'

export default function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjectData = async () => {
    setLoading(true);
    let projects = await firebase.firestore().collection("projects").get();
    projects = projects.docs.map((project) => project.data());
    setProjectData(projects);
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getProjectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  console.log("projectData==>>", projectData);

  return (
    <div className="projects-slider">
      <div className="projects-slider__wrp swiper-wrapper">
        <div className="projects-slider__item swiper-slide">
          {loading ? <h1>Loading...</h1> : null}
          {projectData.map((proj, i) => (
            <Card key={i} className="card-slider">
              {proj.projectImg && <span className="img-span">
                <Image
                  src={require(`../images/${proj.projectImg}`).default}
                  alt={proj.alt}
                  fluid
                />
              </span>}
              <div className="projects-slider__content">
                <div className="projects-slider__title">{proj.projectName}</div>
                <div className="projects-slider__text">{proj.description}</div>
              </div>
        
              <a
                href={proj.projectUrl}
                className="project-slider__button"
                target="_blank"
              >
                Open Link
              </a>
              
              
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

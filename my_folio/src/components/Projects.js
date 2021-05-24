import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Mousewheel, Pagination } from "swiper/core";
import firebase from "../firebase";
import { Card, Image, Button, ButtonGroup } from "react-bootstrap";
import '../styles/projects.scss'
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


  SwiperCore.use([Mousewheel, Pagination]);


  // const swiper = (".projects-slider", {
  //   spaceBetween: 30,
  //   effect: "fade",
  //   loop: true,
  //   mousewheel: {
  //     invert: false,
  //   },
  //   // autoHeight: true,
  //   pagination: {
  //     el: ".projects-slider__pagination",
  //     clickable: true,
  //   },
  // });

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
    <Swiper
      direction={"vertical"}
      // slidesPerView={1}
      effect={"fade"}
      loop={true}
      spaceBetween={30}
      mousewheel={{invert: false}}
      pagination={{
        el: "projects-slider__pagination",
        clickable: true,
      }}
     
    >
      <div className="projects-slider swiper-container-fade swiper-container-horizontal">
      <div className="projects-slider__wrp swiper-wrapper">
        <div className="projects-slider__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active">
          {loading ? <h1>Loading...</h1> : null}
          {projectData.map((proj, i) => (
            <SwiperSlide>
              <Card key={i} className="">
                {proj.projectImg && (
                  <span className="projects-slider__img">
                    <Image
                      src={require(`../images/${proj.projectImg}`).default}
                      alt={proj.alt}
                      fluid
                    />
                    
                  </span>
                )}
                <div className="projects-slider__content">
                  <div className="projects-slider__title">
                    {proj.projectName}
                  </div>
                  <div className="projects-slider__text">
                    {proj.description}
                  </div>
                </div>

                <a
                  href={proj.projectUrl}
                  className="project-slider__button"
                  target="_blank"
                >
                  Open Link
                </a>
              </Card>
            </SwiperSlide>
          ))}
        </div>
      </div>
      </div>
    </Swiper>
  );
}

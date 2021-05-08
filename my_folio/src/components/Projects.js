import React, {useState, useEffect} from 'react';
// import sanityClient from '../client.js'
import firebase from '../firebase'
import {Card, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export  default function Projects(){
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(false)

    const ref =  firebase.firestore().collection('projectData')
    console.log(ref)

    if(loading){
        return <h1>Loading....</h1>
    }

    function getProjectData(){
        setLoading(true);
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            setProjectData(items)
            setLoading(false)
        });

    };

    

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
        getProjectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);




    return (
       <div className="projects-slider">
        <div className = "projects-slider__wrp swiper-wrapper">
            <div className = "projects-slider__item swiper-slide">
           <h1>Projects</h1>
        {projectData.map((index) => (
            <Card className="card-slider">
             
                    <span className="img-span">
                        <Image src={index.url} alt={index.alt} fluid/>
                    </span>
        
            <div className="projects-slider__content">
                <div className="projects-slider__title">{index.title}</div>
                <div className="projects-slider__text">{index.description}</div>
            </div>
                <Button href="#" className="project-slider__button" variant="link"></Button>
           
            </Card>
        ))}
         </div>
        </div>
       </div>
        
    )
}
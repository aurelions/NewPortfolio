import React, {useState, useEffect} from 'react';
import sanityClient from '../client.js'
import {Card, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export  default function Projects(){
    const [projectData, setProjectData] = useState(null);

    useEffect(()=> {
        sanityClient
            .fetch(`*[_type == "post"]{
                title, 
                slug,
                mainImage{
                    asset->{
                        _id,
                        url 
                    },
                    alt
                }
            }`)
            .then((data)=> setProjectData(data))
            .catch(console.error);
    }, []);




    return (
       <div className="projects-slider">
        <div className = "projects-slider__wrp swiper-wrapper">
            <div className = "projects-slider__item swiper-slide">
           <h1>Projects</h1>
        {projectData && projectData.map((post, index) => (
            <Card className="card-slider">
             
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                    <span className="img-span">
                        <Image src={post.mainImage.asset.url} alt={post.mainImage.alt} fluid/>
                    </span>
                </Link>
                
           
        
            <div className="projects-slider__content">
                <div className="projects-slider__title"></div>
                <div className="projects-slider__text"></div>
            </div>
                <a href="#" className="project-slider__button"></a>
           
            </Card>
        ))}
         </div>
        </div>
       </div>
        
    )
}
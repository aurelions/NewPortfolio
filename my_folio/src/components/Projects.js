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
       <div className="projects-container">
        {projectData && projectData.map((post, index) => (
            <Card className="proj-card">
                <h1>Project</h1>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                    <span className="img-span">
                        <Image src={post.mainImage.asset.url} alt={post.mainImage.alt} fluid/>
                    </span>
                </Link>
                
            </Card>
        ))}
       </div>
        
    )
}
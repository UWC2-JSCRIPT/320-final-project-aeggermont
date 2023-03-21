import React from 'react';
import "./portfolio.scss";
import fsReference from '../../firebase';
import { useEffect, useState } from 'react';
import  Project  from './project';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";


function Portfolio()  {
    const [projects, setProjects] = useState([]);
    const [headers, setHeaders] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const docRef = doc(fsReference, 'projects_page', 'projects');
        getDoc(docRef)
            .then((doc) => {
                setProjects(doc.data());
                setIsLoading(false);
            })
            .catch(() => setError('error getting document'));
    },[]);

    if (isLoading) {
        return <p>loading...</p>
    }

    if (hasError) {
        return <p>Has error!</p>
    }

    return (
        <section className='portfolio-header-area'>
            <span className='portfolio-main-header'> Portfolio</span>
            <p className='portfolio-main-summary'> The projects I have developed and collaborate  range from applications development using technologies like Angular, React JS, NodeJs,  and iOS. 
            Design methodologies I employ include Design Thinking, Human Centered Design, and Human Computer Interaction</p>

            <div className='portfolio-projects-area'>
                <div className='portfolio-projects-container' >
                {
                    Object.keys(projects).map( project => (
                        <div className='project'>
                            <Project info={projects[project]} />
                        </div>
                    ))
                }
                </div>
               
            </div>

           



        </section>
    );
}

export default Portfolio;
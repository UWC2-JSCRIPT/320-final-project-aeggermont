import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './main-projects-section.scss';
import Project from '../my-work/project';

/* TODO: Need to remove */
import LatestProject from './latest-project/latest-project';
import Project1 from '../../assets/images/DisneyMagicARTouresIncon.png';
import Project2 from '../../assets/images/R3XThumbnail.png';
import Project3 from '../../assets/images/WhereIsPetuniaThumbnail.png';
import { useMediaQuery } from "react-responsive";

/* TODO: Need to remove */
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import fsReference from '../../firebase';
import { useEffect, useState } from 'react';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc, getDocs } from "firebase/firestore";;



function MainProjectsSection() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        // const q = query(doc(fsReference, "projects_page", "projects"), where("latestProject", "==", true));
        const docRef = doc(fsReference, 'projects_page', 'projects');
        getDoc(docRef)
            .then((doc) => {
        
                //  console.log(doc.data());
                setProjects(doc.data());
                setIsLoading(false);
            })
            .catch(() => setError('error getting document'));
        
    },[]);

    const sm = 'only screen and (min-width: 576px) and (max-width: 767px)';
    const md = 'only screen and (min-width: 768px) and (max-width: 991px)';
    const lg = 'only screen and (min-width: 992px) and (max-width: 1200px)';
    const laptop = 'only screen and (min-width: 1200px)';
    const xs = '(max-width: 767px)';

    const isXSmallScr = useMediaQuery({ query: xs });  
    const isSmallScr  = useMediaQuery({ query: sm });
    const isMediumScr = useMediaQuery({ query: md });
    const isLargeScr  = useMediaQuery({ query: lg });
    const isLaptopScr = useMediaQuery({ query: laptop });
    const isPortraitScr = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetinaScr = useMediaQuery({ query: '(min-resolution: 2dppx)' });


    if (isLoading) {
        return <p>loading...</p>
    }

    if (hasError) {
        return <p>Has error!</p>
    }
    

    const cardDimensions = function() { 
        let cardDimensions = {};

        if ( isXSmallScr ) {
            // console.log( ' < isXSmallScr > ');
            cardDimensions = {
                width: '315px',
                height: '370px',
                isPortraitScr: isPortraitScr
            };
    
        } else if ( isSmallScr ) {
            // console.log( ' < isSmallScr > '); 
            cardDimensions = {
                width: '315px',
                height: '370px',
                isPortraitScr: isPortraitScr
            };
    
        } else if ( isMediumScr ) {
            // console.log( ' < isMediumScr > '); 
            cardDimensions = {
                width: '315px',
                height: '370px',
                isPortraitScr: isPortraitScr
            };
        } else if ( isLargeScr ) {
            // console.log( ' < isLargeScr > '); 
            cardDimensions = {
                width: '100px',
                height: '100px',
                isPortraitScr: isPortraitScr
            };
        } else if ( isLaptopScr ) {
            //console.log( ' < isLaptopScr > '); 
            cardDimensions = {
                width: '260px',
                height: '280px',
                isPortraitScr: isPortraitScr
            };
        
        };
    
        return cardDimensions;
    };

    const mainProjectsSecion = [
        {
            title: 'Disney A.R. Magic Tours',
            desciption: 'An A.R. app to enhance the experience at Disney’s parks by making the environment an attraction itself. ',
            img: Project1
        },
        {
            title: 'R-3x Automatic Seater',
            desciption: 'A Mobile Web App to optimize the assignment of seats at Disney Resourt Rides and Theaters. ',
            img: Project2
        },
        {
            title: 'Where is Petunia?',
            desciption: 'Facilitating Trust and Serendipity in Scientific Collaboration addressing socio technical problems through discursive and fiction design. ',
            img: Project3
        },

    ]

    return (
        <section className='container'>
            <div className='latest-projects-section'>
                <div className='row'>
                    <div className='section-title'>
                        <span className='section-title-label'>
                            Latest Projects
                        </span>
                    </div>
                </div>
                <div className='row'>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            alignContent: 'flex-start',
                            justifyContent: 'center',

                        }}>
                        {
                            Object.keys(projects).map( project => (
                                <div className='project'>
                                    <Project info={projects[project]} />
                                </div>
                            ))
                        }
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default MainProjectsSection;

/*
    <Stack spacing={2}>
       <Pagination count={3} color="primary" />
    </Stack>
     <LatestProject info={mainProjectsSecion[0]} dimensions={cardDimensions()} />
*/
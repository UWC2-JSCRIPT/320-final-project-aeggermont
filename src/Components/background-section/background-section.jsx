import React from 'react';
import Box from '@mui/material/Box';
import BackgroundCard from './background/background';
import Typography from '@mui/material/Typography';
import './background-section.scss';
import { useMediaQuery } from "react-responsive";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { getDoc, doc } from "firebase/firestore";
import fsReference from '../../firebase';

/* Assets */
import UXUIDesignIcon from '../../assets/images/UXUIDesignIcon.png';
import FullStrackDevelopmentIcon from '../../assets/images/FullStrackDevelopmentIcon.png';
import HumanCenteredDesignIcon from '../../assets/images/HumanCenteredDesignIcon.png';
import SystemsArchitectureIcon from '../../assets/images/SystemsArchitectureIcon.png';


function BackgroundSection() {

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
    
    const [backgrounds, setBackgrounds] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const docRef = doc(fsReference, 'main_page', 'backgrounds');
        getDoc(docRef)
            .then((doc) => {
                setBackgrounds(doc.data());
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
    
    const backgroundInfo = [
        {
            title: backgrounds['background_1']['title'],
            img: UXUIDesignIcon
        },
        {
            title: backgrounds['background_2']['title'],
            img: HumanCenteredDesignIcon
        },
        {
            title: backgrounds['background_3']['title'],
            img: SystemsArchitectureIcon
        },
        {
            title: backgrounds['background_4']['title'],
            img: FullStrackDevelopmentIcon
        },
    ];


    const cardDimensions = function() { 
        let cardDimensions = {};

        if ( isXSmallScr ) {
            // console.log( ' < isXSmallScr > ');
            cardDimensions = {
                width: '175px',
                height: '210px',
                isPortraitScr: isPortraitScr
            };
    
        } else if ( isLargeScr) {
            cardDimensions = {
                width: '210px',
                height: '270px',
                isPortraitScr: isPortraitScr
            };

        } else {
            cardDimensions = {
                width: '237px',
                height: '300px',
                isPortraitScr: isPortraitScr
            };
        }
    
        return cardDimensions;
    };
    

    console.log(cardDimensions());

    return (
        <section className='container'>
            <div className='background-section'>
                <div className='row'>
                    <div className='section-title'>
                        <span className='section-title-label'>
                            What I do 
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
                            justifyContent: 'center'
                    }}>
                        <BackgroundCard info={backgroundInfo[0]} dimensions={cardDimensions()}/>
                        <BackgroundCard info={backgroundInfo[1]} dimensions={cardDimensions()}/>
                        <BackgroundCard info={backgroundInfo[2]} dimensions={cardDimensions()}/>
                        <BackgroundCard info={backgroundInfo[3]} dimensions={cardDimensions()}/>
                    </Box>
                </div>
            </div>
        </section>
    )
}

export default BackgroundSection;
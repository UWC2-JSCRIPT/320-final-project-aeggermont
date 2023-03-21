import React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';
import { useMediaQuery } from "react-responsive";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

/* Useful Links
    https://codesandbox.io/s/landingpage-6v0e5?file=/src/Pages/LandingPage/LandingPage.js:893-942
    https://www.youtube.com/watch?v=Oo4ziTddOxs
    https://www.positronx.io/react-get-dynamic-window-height-width-using-react-hooks/
*/



/*
const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  }));
*/

const sm = 'only screen and (min-width: 576px) and (max-width: 767px)';
const md = 'only screen and (min-width: 768px) and (max-width: 991px)';
const lg = 'only screen and (min-width: 992px) and (max-width: 1200px)';
const laptop = 'only screen and (min-width: 1200px)';
const xs = '(max-width: 767px)';

  export default function ResponsiveTests() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });

    const isLaptop = useMediaQuery({ query: '(min-width: 1562px) and (min-resolution: 2dppx)'});
    
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    const isXSmallScr = useMediaQuery({ query: xs });  
    const isSmallScr = useMediaQuery({ query: sm });
    const isMediumScr = useMediaQuery({ query: md });
    const isLargeScr = useMediaQuery({ query: lg });
    const isLaptopScr = useMediaQuery({ query: laptop });
    const isPortraitScr = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetinaScr = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  
    const theme = createTheme({
      breakpoints: {
        values: {
          xs: 767,
          sm: 576,
          md: 768,
          lg: 992,
          laptop: 1200,
        },
      },
    });
    

    const [screenSize, getDimension] = useState({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });

    const setDimension = () => {
      getDimension({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
    }

    useEffect(() => {
      window.addEventListener('resize', setDimension);
      
      return(() => {
          window.removeEventListener('resize', setDimension);
      })
    }, [screenSize]);
 

    /*
    const matchesXS = useMediaQuery(theme.breakpoints.up('xs'));
    const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
    const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
    const matchesLaptop = useMediaQuery(theme.breakpoints.up('laptop')); */


    return (
        <div>
            <h1>Device Test!</h1>
            <div>
              <ul>
                <li>Width: <strong>{screenSize.dynamicWidth}</strong></li>
                <li>Height: <strong>{screenSize.dynamicHeight}</strong></li>
              </ul>    
            </div>
            {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
            {isBigScreen && <p>You  have a huge screen</p>}
            {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
            <p>Your are in {isPortraitScr ? 'portrait' : 'landscape'} orientation</p>
            {isRetinaScr && <p>You are retina</p>}

             <p> CUSTOM BREAKPOINTS </p>
            { isXSmallScr && <p> Matches XS </p>}
            { isSmallScr && <p> Matches SM </p> }
            { isMediumScr && <p> Matches MD </p> }
            { isLargeScr && <p> Matches LG </p> }
            { isLaptopScr && <p> Matches Laptop </p> }      
        </div>
    );
  }
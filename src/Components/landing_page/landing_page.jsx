import React from 'react';
import shapeImg from "../../assets/shapes/shape_1.png";

import bannerPhoto from "../../assets/images/AE-Front-Page-Photo.png";
import "./landing_page.scss";
import fsReference from '../../firebase';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useEffect, useState } from 'react';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";;

/*

 Streaming document changes: https://blog.logrocket.com/how-to-use-react-hooks-firebase-firestore/
 https://www.google.com/search?q=how+to+ferch+a+single+document+from+firebase+in+ReactJS&rlz=1C5CHFA_enMX904MX904&oq=how+to+ferch+a+single+document+from+firebase+in+ReactJS&aqs=chrome..69i57j33i10i160.12982j0j9&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:cda934a7,vid:lZzd8zurolg
 
  https://www.linkedin.com/in/antonio-aranda-eggermont-23aa7b8/
 */

function LandingPage() {
    const [entries, setEntries] = useState([]);
    const [headers, setHeaders] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    const handleLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/antonio-aranda-eggermont-23aa7b8/';
    };

    useEffect(() => {
        const docRef = doc(fsReference, 'main_page', 'headers');
        getDoc(docRef)
            .then((doc) => {
                console.log(doc.data());
                setHeaders(doc.data()); 
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
    
    return(
        <section className="main-baner-area">
           
                <div className="aae-banner">
                    <div class="banner-photo">
                        <img src={bannerPhoto} width="100%" id="banner-image-dimension" alt="Antonio Aranda Eggermont" />   
                    </div>
                    
                    <div className="heading-info">
                        <span className="heading-primary-intro"> { headers['header_1'] }</span>
                        <span className="heading-primary-main"> { headers['header_2'] }</span>
                        <span className="heading-primary-sub"> { headers['header_3'] }</span>
                    
                        <div class="contact-area">
                            <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleLinkedIn}>
                                <input hidden accept="image/*" type="file" />
                                <LinkedInIcon />
                            </IconButton>
                            <span> Linkedin </span>
                        </div>
                    </div>
                </div>
                <div className="sphere-shape"></div> 
        </section>
    );
}

export default LandingPage;

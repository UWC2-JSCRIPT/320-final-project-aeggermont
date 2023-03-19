import React from 'react';
import shapeImg from "../../assets/shapes/shape_1.png";
import bannerPhoto from "../../assets/images/AE-Front-Page-Photo.png";
import "./landing_page.scss";
import fsReference from '../../firebase';
import { useEffect, useState } from 'react';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";;

/*

 Streaming document changes: https://blog.logrocket.com/how-to-use-react-hooks-firebase-firestore/
 https://www.google.com/search?q=how+to+ferch+a+single+document+from+firebase+in+ReactJS&rlz=1C5CHFA_enMX904MX904&oq=how+to+ferch+a+single+document+from+firebase+in+ReactJS&aqs=chrome..69i57j33i10i160.12982j0j9&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:cda934a7,vid:lZzd8zurolg
 */

function LandingPage() {
    const [entries, setEntries] = useState([]);
    const [headers, setHeaders] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();
    
    console.log('>>> about to get stuff ');

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

    /*
    useEffect(() => {

        const entriesQuery = doc(fsReference, "main_page", "headers");
        // const docSnap = getDocs(entriesQuery);

        // onst entriesQuery = query(
            // collection(fsReference, 'main_page'),
        //    getDocs(fsReference, 'main_page', 'headers'),
        //)

        const unsubscribe = onSnapshot(
            entriesQuery,
            snapshot => {
                setEntries(snapshot.docs);
                setIsLoading(false);
            },
            error => {
                console.log(error);
                setIsLoading(false);
                setHasError(true);
            }
        )

        return () => unsubscribe();
    }, []); */


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
                            <span> Linkedin </span>
                        </div>
                    </div>
                </div>
                <div className="sphere-shape"></div> 
        </section>
    );
}

export default LandingPage;

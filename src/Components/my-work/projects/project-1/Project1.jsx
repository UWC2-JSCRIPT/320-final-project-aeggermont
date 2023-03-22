import React from 'react';
import '../projects.scss';
import pdfDocumentation from './StoryTellerDocumentation.pdf';
import imgDocumentation from './StoryTeller.jpg';
import StickyBoxPanel from '../../../sticky-box-panel/StickyBoxPanel';
import ProjectRecommendations from '../../../project-recommendations/ProjectRecommendations';
import fsReference from '../../../../firebase';
import { useEffect, useState } from 'react';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";

import { Document, pdfjs, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
 };

function Project1()  {
    const [projectData, setProjectData] = useState([]);
    const [headers, setHeaders] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    /* PDF  Viewer */
    const [file, setFile] = useState('./sample.pdf');
    const [numPages, setNumPages] = useState(null);

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    /* Firebase data fetching */
    useEffect(() => {
        const docRef = doc(fsReference, 'projects_data', 'project_1');
        getDoc(docRef)
            .then((doc) => {
                setProjectData(doc.data());
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
        <div className="container">
            <div className='row'>
                <div className="col-11">
                    <img src={imgDocumentation} width="1300" alt="Prject Sample" />
                    {/* TODO: PDF reader did not work as expected so embedding an image for demo purposes
                    <Document file={pdfDocumentation} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
                    */}
                </div>
                <div className="col-1">
                    <StickyBoxPanel />       
                </div>
            </div>
            <div className='row'>
                <ProjectRecommendations />
            </div>
        </div>
    )
}

export default Project1;
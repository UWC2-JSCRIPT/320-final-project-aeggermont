import React from 'react';
import '../projects.scss';
import pdfDocumentation from './IntegratingCultureTheoryAndHCDGlobalGovernmentInterfaces.pdf';
import imgDocumentation from './IntegratingCultureTheoryAndHCDGlobalGovernmentInterfaces.jpg';
import StickyBoxPanel from '../../../sticky-box-panel/StickyBoxPanel';
import ProjectRecommendations from '../../../project-recommendations/ProjectRecommendations';
import { useEffect, useState } from 'react';

import { Document, pdfjs, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: false,
    standardFontDataUrl: 'standard_fonts/',
 };

function Project9()  {

    /* PDF  Viewer */
    const [file, setFile] = useState('./sample.pdf');
    const [numPages, setNumPages] = useState(null);
 
    function onFileChange(event) {
        setFile(event.target.files[0]);
    }
 
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
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

export default Project9;
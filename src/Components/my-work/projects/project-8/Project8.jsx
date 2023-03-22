import React from 'react';
import '../projects.scss';
import imgDocumentation from './SpotifyMusicGroupsSession.jpg';
import StickyBoxPanel from '../../../sticky-box-panel/StickyBoxPanel';
import ProjectRecommendations from '../../../project-recommendations/ProjectRecommendations';

function Project8()  {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-11">
                    <img src={imgDocumentation} width="1300" alt="Prject Sample" />
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

export default Project8;
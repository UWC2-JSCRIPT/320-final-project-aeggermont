import React, { useState, Component, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import fsReference from '../../firebase';
import Box, { BoxProps } from '@mui/material/Box';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";
import './projectRecommendations.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ProjectRecommendations() {

    const navigate = useNavigate();

    const handleProjectPage = (event) => {
        setTimeout(() => {
            navigate( '/mywork/projects/project-5' , { replace: false });
        }, 500);
        
    };

    return (
        <div className='recommendation-panel'>
            <div className='section-title '>More like this</div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    borderRadius: 1,
                }}
            >
                <Card sx={{ maxWidth: 240, maxHeight: 238 }}>
                    <CardActionArea onClick={handleProjectPage}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/projects/thumbs/findingNemo-thumb.png"
                            alt="Finding Nemo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                               Finding Nemo
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className='div-space'></div>
                <Card sx={{ maxWidth: 240, maxHeight: 238 }}>
                    <CardActionArea onClick={handleProjectPage}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/projects/thumbs/trackWalk-thumb.png"
                            alt="Track Walk"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                Track Walk 
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </div>
    );
}

export default ProjectRecommendations;
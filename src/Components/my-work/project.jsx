import React, { useState, Component }  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './project.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const styles = {
    fullHeightCard: {
        height: "100%",
    }
}

function Project (props) {
    
    const description = props.info.description;
    const index = props.info.index;
    const projectId = props.info.projectId;
    const projectLink = props.info.projectLink;
    const similarProjects = props.info.similarProjects;
    const skills = props.info.skills;
    const title = props.info.title;
    const thumbnailImg = props.info.thumbnailImg;
    // const thumbnailImg = '/images/projects/thumbs/arMagicTours-thumb.png';
    const navigate = useNavigate();

    const handleProjectPage = (event) => {
        setTimeout(() => {
            navigate( `/${projectLink}` , { replace: false });
        }, 500);
        
    };

    console.log('loading Project Card');
    console.log(description);
    console.log(index);
    console.log(projectId);
    console.log(projectLink);
    console.log(similarProjects);
    console.log(skills);
    console.log(title);

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card 
                        sx={{ 
                            maxWidth: 345,
                            maxHeight: 213,
                            '--Card-padding': '0px', 
                        }}>
                        <Box sx={{ 
                            position: 'relative'
                            }}>
                            <CardMedia
                                    component="img"
                                    image={thumbnailImg}
                                    alt="green iguana"
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: '100%',
                                      },
                                    bgcolor: 'rgba(0, 0, 0, 0.30)',
                                    color: 'white',
                                    padding: '10px'
                                }}
                            >
                                <div>
                                    <Typography variant="h5" component="h3">
                                        {title}
                                    </Typography>
                                </div>
                            </Box>
                        </Box>    
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card
                        sx={{ 
                            maxWidth: 345,
                            height: 213,
                            '--Card-padding': '0px', 
                        }}>
                            <CardActionArea onClick={handleProjectPage}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        paddingBlock: '0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 213,
                                        '& > :not(style)': {
                                            m: 1,
                                            width: '100%',
                                        },
                                        bgcolor: 'rgba(0, 0, 0, 0.05)',
                                        color: 'black',
                                        padding: '10px'
                                    }}
                                >

                                    <CardContent>
                                        <Typography sx={{ marginTop: '-10px' }} gutterBottom variant="h5" component="div">
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {description}
                                        </Typography>
                                        <Typography sx={{ marginTop: '5px' }} variant="body2" color="text.secondary">
                                        {skills}
                                        </Typography>
                                        <CardActions  sx={{ marginTop: '-5px', textAlign: 'center' }} >
                                            <Button
                                                onClick={handleProjectPage}
                                                value={projectLink} 
                                                size="small"> View Project</Button>
                                        </CardActions>
                                    </CardContent>
                                
                                </Box>
                            </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Project;

Project.prototype = {
    description : PropTypes.string.isRequired,
    index : PropTypes.number.isRequired,
    projectId : PropTypes.number.projectId,
    projectLink : PropTypes.string.isRequired,
    similarProjects : PropTypes.object.isRequired,
    skills : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}

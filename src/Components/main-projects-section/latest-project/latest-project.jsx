import React, { useState, Component }  from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './latest-project.scss';

const styles = {
    fullHeightCard: {
        height: "100%",
        },
    }
    const img = "";

function LatestProject(props) {
    const title = props.info.title;
    const img = props.info.img;
    const desciption = props.info.desciption;
    const dimensions = props.dimensions;

    console.log(' <<< LatestProject >>> ');
    console.log(dimensions);
    console.log('=======================');

    return (
        <Card sx={{
            width: dimensions.width, 
            height: dimensions.height,
            }}
            raised='true'
            >
            <CardActionArea >
                <CardMedia
                     component="img"
                     className="card-media-img"
                     image={img}
                     sx={{ 
                        padding: "0em 0em 0 0em", 
                        objectFit: "contain",
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7],
                        } }}
                />
                <CardContent
                    style={{backgroundColor: "#F3F6F7" }}>
                    <Typography gutterBottom variant="h5" component="div"  style={{color: "#074C5F" }}>
                        {title }
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {desciption}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default LatestProject;

LatestProject.prototype = {
    title : PropTypes.string.isRequired,
    desciption: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    dimensions: PropTypes.object.isRequired       
}
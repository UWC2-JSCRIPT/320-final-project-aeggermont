import React, { useState, Component }  from 'react';
import StickyBox from "react-sticky-box";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MuiButton from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './stickyboxpannel.scss';

const options = {
    shouldForwardProp: (prop) => prop !== "rounded"
};

const borderRadius = {
    borderRadius: "24px",
    backgroundColor: "#21b6ae",    
}
  
const Button = styled(
    MuiButton,
    options,
    borderRadius
);
  
const theme = createTheme({
    shape: {
        borderRadius: 5
    }
});

function StickyBoxPanel() {
    const navigate = useNavigate();
    const handleProjectsPage = (event) => {
        setTimeout(() => {
            navigate( '/mywork' , { replace: false });
        }, 100);
        
    };

    return(
        <StickyBox offsetTop={400} offsetBottom={20}>
            <div className='project-sticky-box'>
                <div className="row">
                    <Box sx={{ }}>
                        <Fab color="primary" aria-label="Like">
                            <ThumbUpIcon />
                        </Fab>
                    </Box>
                </div>
                <div className="row">
                    <span className='text-label'> Like</span>
                </div>

                <div className="row">
                    <Box sx={{  }}>
                        <Fab color="primary" aria-label="Like" onClick={handleProjectsPage}>
                            <ArrowBackIcon />
                        </Fab>
                    </Box>
                </div>
                <div className="row">
                    <span className='text-label'> Back</span>
                </div>                      
            </div>
            
        </StickyBox>
    );

}

export default StickyBoxPanel;
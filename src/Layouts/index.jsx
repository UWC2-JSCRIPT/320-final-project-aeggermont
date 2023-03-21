import React from 'react';
import Header from '../Components/header/header';

function Index(props) {
    return (
        <>
            <Header/>
            {props.children} 
            {/* 
            <Footer/> 
            */}
        </>
    )
}

export default Index;
import React from 'react';
import Layout from '../Layouts';
import LandingPage from '../Components/landing_page/landing_page';
import BackgroundSection from '../Components/background-section/background-section';
import MainProjectsSection from '../Components/main-projects-section/main-projects-section';

function Home() {
    return (  
        <Layout>
            <LandingPage/>
            <BackgroundSection />
            <MainProjectsSection />
        </Layout>
    )
}

export default Home;

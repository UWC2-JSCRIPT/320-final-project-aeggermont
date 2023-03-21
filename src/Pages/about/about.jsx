import React from 'react';
import Layout from '../../Layouts';
import Profile from './profile';
import Biography from './biography';
import Skills from './skills';

function AboutMe() {
    return (
        <Layout>
            <Profile />
            <Biography/>
            <Skills />
        </Layout>
    )
}

export default AboutMe;

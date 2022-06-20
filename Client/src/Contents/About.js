// Components
import React, { Component } from 'react';
import NewNav from '../Components/NewNav';

// Contents
import AboutMe from '../Components/AboutMe';

export default class About extends Component {
    render() {
        return <div>
            <NewNav />
            <AboutMe />
        </div>;
    }
}

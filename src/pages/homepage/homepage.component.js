import React from 'react';

import Directory from '../../components/directory/directory.component';

import { 
    HomePageContainer, 
    HomePageNote
} from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
        <HomePageNote to='/instruction'>Click here for order instruction.</HomePageNote>
    </HomePageContainer>
);

export default HomePage;

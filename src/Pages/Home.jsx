import React from 'react';
import Hero from "../Components/Hero";
import Beginner from "../Components/Beginner";
import Mistakes from "../Components/Mistakes";
import { useLoaderData } from 'react-router';
import NewPlants from '../Components/NewPlants';
import { useTheme } from '../Context/ThemeContext';

const Home = () => {
    const newPlants = useLoaderData();
    const recentPlants = newPlants?.slice(0, 6) || [];
    const { isDarkMode } = useTheme();

    return (
        <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}>
            <Hero />
            <NewPlants plants={recentPlants} />
            <Beginner />
            <Mistakes />
        </div>
    );
};

export default Home;
import React from 'react';
import Hero from "../Components/Hero";
import Beginner from "../Components/Beginner";
import Mistakes from "../Components/Mistakes";
import { useLoaderData } from 'react-router';
import NewPlants from '../Components/NewPlants';

const Home = () => {
    const newPlants = useLoaderData();
    const recentPlants = newPlants?.slice(0, 6) || [];

    return (
        <div>
            <Hero />
            <NewPlants plants={recentPlants} />
            <Beginner />
            <Mistakes />
        </div>
    );
};

export default Home;
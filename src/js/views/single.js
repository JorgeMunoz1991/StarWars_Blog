import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PlanetComponent } from '../component/singleView/Planet.js';
import { PeopleComponent } from '../component/singleView/People.js';
import { ShipComponent } from '../component/singleView/Ship.js';


export const Single = () => {

    const location = useLocation();
    const [ properties, setProperties ] = useState('');
    const [ image, setImage ] = useState('');
    const [ url, setUrl ] = useState('');

    const getPageElement = async () => {
        const res = await fetch(location.state.url);
        const data = await res.json();

        setProperties(data.result.properties);
        setImage(location.state.image);

        setUrl(location.state.url);
        console.log(url);

    };

    useEffect(() => {
        getPageElement();
    }, []);


    return (
        <>
            { url.includes('planets') && <PlanetComponent properties={ properties } image={ image } /> }
            { url.includes('people') && <PeopleComponent properties={ properties } image={ image } /> }
            { url.includes('starship') && <ShipComponent properties={ properties } image={ image } /> }
        </>
    );
};

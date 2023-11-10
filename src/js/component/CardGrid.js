import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { SingleCard } from './SingleCard.js';

export const CardGrid = ({ endpoint }) => {
    const [ topic, setTopic ] = useState(null);
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if( endpoint == "likedElements"){
            setTopic(JSON.parse(localStorage.getItem("likedElements")))
        }
        else {
        setTopic(store[endpoint])
        }
    }, [ store[endpoint], store.likedElements ]);


    console.log(store.likedElements)
    return (
        <>
            <ul className="d-flex flex-wrap justify-content-around">

                { topic !== null && topic.map(item => {
                    return (

                        <div key={ item.uid } >
                            <SingleCard item={ item } />
                        </div>

                    );
                }) }
            </ul>
        </>
    );
};
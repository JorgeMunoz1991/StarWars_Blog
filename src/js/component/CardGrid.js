import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { SingleCard } from './SingleCard.js';

export const CardGrid = ({ endpoint }) => {
    const [ topic, setTopic ] = useState(null);
    const { store, actions } = useContext(Context);
    console.log(topic);

    useEffect(() => {
        getTopic();
    }, [ store.likedElements ]);

    const getTopic = async() => {
        let newTopic = await actions.getItem(endpoint)
        setTopic(newTopic)
    }


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

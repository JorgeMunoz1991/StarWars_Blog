import React, {  useState } from 'react';
import { CardGrid } from '../component/CardGrid.js';
import { Navigate } from 'react-router-dom';

export const Like = () => {
    const [ likeRemoved, setlikeRemoved ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setlikeRemoved(true);
        setlikeRemoved(false);
    };

    return (
        <>
            <div style={ { marginTop: '10px' } }>
                { likeRemoved && <Navigate replace to="/liked" /> }
                <h2 className="home-subtitle mt-5 mb-5 text-center">Your Liked List</h2>

                <form onSubmit={ handleSubmit }>
                    <ul>
                        <CardGrid endpoint="likedElements" />
                    </ul>
                </form>
            </div>

        </>
    );
};
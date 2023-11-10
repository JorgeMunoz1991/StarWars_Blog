import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const ActionsBar = ({ item }) => {
    const { store, actions } = useContext(Context);

    const handleLike = () => {
        actions.addLike(item);
    };

    const likedElements = JSON.parse(localStorage.getItem("likedElements"))

    const isLiked = likedElements.some(element => element.name === item.name);

    return (
        <>
            <div>
                <Link to="/single" state={item} className="btn bg-danger text-white">
                    <i className="bi bi-file-earmark-minus-fill" /> More details...
                </Link>

                <button
                    onClick={handleLike}
                    type="button"
                    name=""
                    id=""
                    className={`btn btn-primary ${isLiked ? 'bg-warning text-black' : 'bg-primary text-warning'}`}
                >
                    {isLiked ? 'Unlike' : 'Like'}
                </button>
            </div>
        </>
    );
};
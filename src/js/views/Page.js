import React from 'react';
import { CardGrid } from '../component/CardGrid.js';

export const Page = ({Title, endpoint}) => {
  return (
    <>
      <div className="people-background bg-black" style={ { paddingTop: '10px' } }>
        <h2 className="home-subtitle mt-5 mb-5 text-center"><b>StarWars {Title}</b></h2>
        <CardGrid endpoint= {endpoint} />
      </div>
    </>
  );
};
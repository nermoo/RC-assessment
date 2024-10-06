'use client'
import React from 'react';
import PropertySearchBar from './components/home/searchBar/searchBar';
import CardList from './components/home/cardList';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const Home = () => {

  const selectedLocation = useSelector((state: RootState) => state.propertyFilter.location);
  
  return(
  <div>
    <PropertySearchBar/>
    {selectedLocation && (
    <div className="ml-7 mt-4">
      <h2>Showing results for &quot;{selectedLocation}&quot;</h2>
    </div>
    )}
    <div className='my-12 mx-52'>
    <CardList/>
    </div>
  </div>
  );
};

export default Home;
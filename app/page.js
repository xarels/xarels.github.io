'use client';
import React from 'react';
import Hero from './components/Hero';
import Main from './components/Main';


export default function Home() {

  const [showHero, setShowHero] = React.useState(true);

  return (
    <>
      {showHero ? (<Hero onEnter = {() => setShowHero(false)} />) : (<Main />)} 

    </>

  );
}

import React from 'react';
import Main from '@components/Main';
import BackgroundVideo from '@components/BackgroundVideo';
import Weather from '@components/Weather';
import Settings from '@components/Settings';

const Home = () => {
  return (
    <>
      <BackgroundVideo />
      <Main>
        <Weather />
        <Settings />
      </Main>
    </>
  )
}

export default Home;

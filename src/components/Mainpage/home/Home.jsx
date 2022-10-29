import React from 'react';
import Categories from '../category/Categories';

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
        </div>
      </section>
    </>
  );
};

export default Home;

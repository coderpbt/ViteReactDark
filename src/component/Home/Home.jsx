import React from 'react';
import banner from '../../assets/banner.png';

const Home = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-2 gap-3 items-center min-h-screen'>
                <div className=''>
                    <h2 className='text-4xl text-black  dark:text-stone-50'>We Build Software
                    That Builds Your Business!</h2>
                </div>
                <div>
                    <img className='w-full' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
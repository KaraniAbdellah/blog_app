import React from 'react';

const Aside = () => {
    const topics = ["Programming", "Music", "Technology", "Self Development", "Machine Learning"];
    return (
        <div className='lg:w-[25%] lg:block hidden mt-2 sticky right-0 top-10 text-start'>
            <h2 className='font-semibold text-lg text-zinc-800'>Recommended topics</h2>
            <nav>
                {
                    topics.map((topic, index) => {
                        return (
                            <button key={index} className='p-3 bg-gray-100 m-1 text-zinc-900 rounded-full text-sm'>{topic}</button>
                        )
                    })
                }
            </nav>
            {/* Go to explore-topics */}
            <button className='text-gray-400 m-1 text-sm font-medium'>See more topics</button> 
        </div>
    );
}

export default Aside;

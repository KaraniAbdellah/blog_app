import React from 'react';

const Aside = () => {
    return (
        <div className='w-[25%] text-start'>
            <h2 className='font-semibold text-lg text-zinc-800'>Recommended topics</h2>
            <nav>
                <button className='p-3 bg-gray-200 m-1 text-zinc-900 rounded-full'>Programming</button>
                <button className='p-3 bg-gray-200 m-1 text-zinc-900 rounded-full'>Music</button>
                <button className='p-3 bg-gray-200 m-1 text-zinc-900 rounded-full'>Technology</button>
                <button className='p-3 bg-gray-200 m-1 text-zinc-900 rounded-full'>Self Development</button>
            </nav>
            {/* Go to explore-topics */}
            <button className='text-gray-400 m-1 font-medium'>see more topics</button> 
        </div>
    );
}

export default Aside;

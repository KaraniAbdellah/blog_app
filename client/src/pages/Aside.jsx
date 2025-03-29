import React from 'react';

const Aside = () => {
    return (
        <div>
            <h2 className='font-semibold'>Recommended topics</h2>
            <nav>
                <button className='p-2 bg-gray-300'>Programming</button>
                <button className='p-2 bg-gray-300'>Music</button>
                <button className='p-2 bg-gray-300'>Technology</button>
                <button className='p-2 bg-gray-300'>Self Development</button>
            </nav>
            {/* Go to explore-topics */}
            <h2 className='text-gray-400'>see more topics</h2> 
        </div>
    );
}

export default Aside;

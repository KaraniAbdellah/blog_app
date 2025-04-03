import React from 'react';
import "../css_filies/loader.css";

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-full h-[calc(100vh-70px)]'>
            <div className="loader"></div>
        </div>
    );
}

export default Loading;

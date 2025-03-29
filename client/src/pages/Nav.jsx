import React from 'react';
import { Plus } from 'lucide-react';

const Nav = () => {
    return (
        <nav className='flex mb-3 justify-start items-center border-b'>
            <button className='mr-3 text-gray-900 p-2 rounded-full'><Plus /></button>
            <button className='mr-3 text-gray-900 p-2 rounded-full'>For You</button>
            <button className='mr-3 text-gray-900 p-2 rounded-full'>Saved</button>
            <button className='mr-3 text-gray-900 p-2 rounded-full'>Following</button>
        </nav>
    );
}

export default Nav;

import React from 'react';
import { Plus } from 'lucide-react';

const Nav = () => {
    return (
        <nav className='flex mb-3 bg-red-600 justify-start items-center border-b pb-4'>
            <button className='mr-5 bg-gray-100 p-2 rounded-full'><Plus /></button>
            <button className='mr-5 bg-gray-100 p-2 rounded-full'>For You</button>
            <button className='mr-5 bg-gray-100 p-2 rounded-full'>Saved</button>
            <button className='mr-5 bg-gray-100 p-2 rounded-full'>Following</button>
        </nav>
    );
}

export default Nav;

import React from 'react';

const Header = () => {
    return (
        <header className='h-[60px] border-b-2 border-zinc-600 bg-gray-100 w-full flex justify-around items-center'>
            <div className="logo">
                <a href="#" className='font-semibold text-2xl'>Crafting Blog</a>
            </div>
            <nav>
                <button className='bg-sky-600 hover:bg-sky-700 transition-all px-3 py-1 rounded-sm'>
                    <a href="" className='font-medium text-white'>Login</a>
                </button>
                <button className='bg-sky-600 hover:bg-sky-700 transition-all px-3 py-1 rounded-sm ml-2'>
                    <a href="" className='font-medium text-white'>Registration</a>
                </button>
                <button className='bg-sky-600 w-[40px] h-[40px] hover:bg-sky-700 transition-all px-3 py-1 rounded-full ml-2'>
                    <a href="" className='font-medium text-white'>A</a>
                </button>
            </nav>
        </header>
    );
}

export default Header;

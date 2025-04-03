import React from 'react';
import { Plus } from 'lucide-react';

const Nav = () => {
    const handleActive = (e) => {
        document.querySelectorAll(".showMe").forEach((ele) => ele.classList.remove("showMe"));
        if (e.target.localName === "button") {
            console.log(e.target.classList.add("showMe"));
        } else {
            console.log(e.target.parentElement.classList.add("showMe"));
        }
    }
    return (
        <nav className='flex sticky top-0 bg-white pb-2 mb-4 justify-start items-center border-b'>
            <button className='mr-3 text-gray-700 hover:bg-gray-200 p-2 rounded-full'><Plus /></button>
            <button onClick={(e) => handleActive(e)} className='mr-3 showMe group text-gray-700 hover:text-gray-900 p-2 rounded-full relative'>
                <span className='group-[.showMe]:before:absolute before:w-[70%] before:h-[1px] 
                before:bg-zinc-900 group-[.showMe]:text-black group-[.showMe]:font-medium before:top-12'>For You</span>
            </button>

            <button onClick={(e) => handleActive(e)} className='mr-3 group text-gray-700 hover:text-gray-900 p-2 rounded-full relative'>
                <span className='group-[.showMe]:before:absolute before:w-[70%] before:h-[1px] 
                before:bg-zinc-900 group-[.showMe]:text-black group-[.showMe]:font-medium before:top-12'>Your Posts</span>
            </button>
            <button onClick={(e) => handleActive(e)} className='mr-3 group text-gray-700 hover:text-gray-900 p-2 rounded-full relative'>
                <span className='group-[.showMe]:before:absolute before:w-[70%] before:h-[1px] 
                before:bg-zinc-900 group-[.showMe]:text-black group-[.showMe]:font-medium before:top-12'>Saved</span>
            </button>
        </nav>
    );
}

export default Nav;

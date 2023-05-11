import React, { useState } from 'react';
import Link from 'next/link';


const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='navbar flex justify-between w-full fixed z-10 bg-stone-100 pt-4 px-12'>
      
      <Link href={'/'}>
        <p className="banner cursor-pointer text-5xl">BRIGHT HAYFORD</p>
      </Link>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link href={'/'}>
            <p className="links cursor-pointer font-medium text-2xl text-zinc-500 hover:text-black active:text-black focus:text-black">HOME</p>
        </Link>
        <Link href={'/#about'}>
            <p className="links cursor-pointer font-medium text-2xl text-zinc-500 hover:text-black active:text-black focus:text-black">ABOUT</p>
        </Link>
        <Link href={'/#work'}>
            <p className="links cursor-pointer font-medium text-2xl text-zinc-500 hover:text-black active:text-black focus:text-black">WORK</p>
        </Link>
        <Link href={'/#contact'}>
            <p className="links cursor-pointer font-medium text-2xl text-zinc-500 hover:text-black active:text-black focus:text-black">CONTACT</p>
        </Link>
      </div>
      <button onClick={() => setOpen(!isOpen)}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className={`h-1.5 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`h-1.5 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${isOpen ? "w-0 " : "w-full "}`} />
          <span className={`h-1.5 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </div>
      </button>
      

      <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${isOpen ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <div className="flex flex-col justify-center items-center mt-28">
                <Link href={'/'} className="text-2xl font-bold hover:text-red-500 my-4 active:text-red-500 focus:outline-none">
                    Home
                </Link>
                <Link href={'/#about'} className="text-2xl font-bold my-4 hover:text-red-500 active:text-red-500 focus:outline-none">
                    About
                </Link>
                <Link href={'/#work'} className="text-2xl font-bold my-4 hover:text-red-500 active:text-red-500 focus:outline-none">
                  Work
                </Link>
                <Link href={'/#contact'} className="text-2xl font-bold my-4 hover:text-red-500 active:text-red-500 focus:outline-none">
                  Contact
                </Link>
                 
            </div>  
        </div>
    </div>
  );
}

export default HamburgerMenu;

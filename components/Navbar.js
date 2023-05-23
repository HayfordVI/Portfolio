import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const { id } = section;
        const { offsetTop } = section;

        if (scrollPosition >= offsetTop - 10 && scrollPosition < offsetTop + section.offsetHeight) {
          setActiveLink(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = useRouter();

  const navLinks = [
    {
      name: 'Home',
      link: '/',

    },
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Work',
      link: '#work',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  return (
    <div className='navbar flex justify-between w-full fixed z-10 bg-stone-100 pt-4 px-12'>
      <Link href={'/'}>
        <p className="banner cursor-pointer text-5xl">HAYFORDVII</p>
      </Link>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map(({ link, name }) => (
        <Link 
            href={link} 
            key={name}
            className={` ${activeLink == name ? 'text-gold' : ''} links flex cursor-pointer font-medium text-2xl`}
        >
          {name}
        </Link>
        ))}
      </div>
      <button onClick={() => setOpen(!isOpen)}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className={`h-1.5 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`h-1.5 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${isOpen ? "w-0 " : "w-full"}`} />
          <span className={`h-1.5 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </div>
      </button>
      

      <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${isOpen ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <div className="flex flex-col justify-center items-center mt-28">
                {navLinks.map(({ link, name }) => (
                <Link 
                    href={link} 
                    key={name}
                    className={` ${activeLink == name ? 'text-gold' : ''} text-2xl font-bold hover:text-red-500 my-4 active:text-red-500 focus:outline-none`}
                >
                  {name}
                </Link>
                ))}   
            </div>  
        </div>
    </div>
  );
}

export default HamburgerMenu;

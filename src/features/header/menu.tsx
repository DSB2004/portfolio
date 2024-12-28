import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Links from '@/ui/links';
import { ScrollTo } from '@/utils/handleScroll';
import ToggleBtn from '@/ui/toggleBtn';
import useTheme from '@/hooks/useTheme';
const Menu = () => {
    const [isOpen, setOpen] = useState(false);
    const { toggleTheme, getCurrentTheme } = useTheme()
    useEffect(() => {
        if (isOpen) {
            document.getElementById('menu-overlay')?.classList.remove('hidden')
        }
    }, [isOpen])

    return (
        <>
            <FiMenu className="h-6 w-6  dark:text-white" onClick={() => setOpen(true)} />



            <div id="menu-overlay" className={`fixed inset-0 bg-black ${isOpen ? "bg-opacity-50" : "bg-opacity-0"} z-20 transition-all duration-300`}
                onClick={() => {
                    setOpen(false)
                    setTimeout(() => {
                        document.getElementById('menu-overlay')?.classList.add('hidden')
                    }, 300)
                }
                } />



            <div className={`bg-light  dark:bg-dark shadow-xl fixed top-0 left-0 z-30 h-screen transition-all duration-300 ${isOpen ? 'w-72' : 'w-0'} overflow-hidden`}>

                <div className='w-64 p-5 flex flex-col justify-between h-full'>

                    <h1 className='text-primary-col text-xl font-bold dark:text-light'>Portfolio</h1>

                    <ul className='flex flex-col gap-4 ml-2 mt-5'>
                        <Links onClick={() => { setOpen(false); ScrollTo("hero") }} className=' uppercase'>Home</Links>
                        <Links onClick={() => { setOpen(false); ScrollTo("about") }} className=' uppercase'>About</Links>
                        <Links onClick={() => { setOpen(false); ScrollTo("project") }} className='uppercase'>Projects</Links>
                        <Links onClick={() => { setOpen(false); ScrollTo("experience") }} className=' uppercase'>Experience</Links>
                        <Links onClick={() => { setOpen(false); ScrollTo("contact") }} className='uppercase'>Contact</Links>
                    </ul>

                    <ul className='ml-2 mt-auto mb-5 flex justify-between '>
                        <span className='uppercase dark:text-white'>

                            Theme
                        </span>
                        <ToggleBtn isActive={getCurrentTheme() === 'dark'} onClick={() => { toggleTheme(); }}></ToggleBtn>
                    </ul>
                </div>


            </div>
        </>
    );
};

export default Menu;

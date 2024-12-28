
import ToggleBtn from '@/ui/toggleBtn'
import Links from '@/ui/links'
import { ScrollTo } from '@/utils/handleScroll'
import Menu from './menu'
import useTheme from '@/hooks/useTheme'
export default function Header() {
    const { toggleTheme, getCurrentTheme } = useTheme()
    return (
        <header className='flex sticky top-0 z-50 bg-light dark:bg-dark justify-between items-center py-5 '  >
            <h1 className='text-primary-col text-lg font-bold dark:text-light'>Portfolio</h1>

            <nav className='items-center justify-center gap-3 md:flex hidden'>
                <Links onClick={() => ScrollTo("hero")} className='text-sm uppercase'>Home</Links>
                <Links onClick={() => ScrollTo("about")} className='text-sm uppercase'>About</Links>
                <Links onClick={() => ScrollTo("project")} className='text-sm uppercase'>Projects</Links>
                <Links onClick={() => ScrollTo("experience")} className='text-sm uppercase'>Experience</Links>
                <Links onClick={() => ScrollTo("contact")} className='text-sm uppercase'>Contact</Links>
            </nav>

            <nav className='flex justify-between items-center'>
                <span className=' md:block hidden'>
                    <ToggleBtn isActive={getCurrentTheme() === 'dark'} onClick={() => { toggleTheme(); }}></ToggleBtn>
                </span>
                <span className='md:hidden block'>

                    <Menu></Menu>
                </span>

            </nav>


        </header>
    )
}
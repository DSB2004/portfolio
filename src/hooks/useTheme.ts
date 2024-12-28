import { useEffect } from 'react'

export default function useTheme() {
    const getCurrentTheme = () => {
        return localStorage.getItem('theme');
    }

    const toggleTheme = () => {
        const currentTheme = getCurrentTheme()
        if (currentTheme === 'light') {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        setTheme()
    };


    const setTheme = () => {
        const currentTheme = getCurrentTheme();
        if (currentTheme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }


    useEffect(() => {
        setTheme();
    }, []);

    return { toggleTheme, getCurrentTheme }
}

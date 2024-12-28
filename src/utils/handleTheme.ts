export const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};


export const setTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
}
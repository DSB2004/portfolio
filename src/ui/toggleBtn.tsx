
import { useEffect, useState } from 'react';
export default function ToggleBtn({ isActive, onClick }: { onClick: Function, isActive: boolean }) {

    const [is_Active, setActive] = useState(isActive)


    const handleClick = () => {
        setActive(prev => !prev)
        onClick()
    }

    return (
        <div
            className={`w-12 h-6 border-2 flex items-center px-0.5 
            border-dark dark:border-light rounded-sm transition-all duration-200`}
            onClick={() => handleClick()}>
            <div className={`bg-dark  ${is_Active ? "translate-x-6" : "translate-x-0"}  dark:bg-light h-4 w-4 rounded-sm transition-all duration-200`} />
        </div>
    )
}

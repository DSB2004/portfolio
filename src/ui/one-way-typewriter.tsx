import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function OneWayTypewriter({
    className,
    text = "testing",
    speed = 50,
}: {
    className?: string;
    text?: string;
    speed?: number;
}) {
    const [word, setWord] = useState('');
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            let i = -1;
            const adding = setInterval(() => {
                if (i < text.length - 1) {
                    setWord((prev) => prev + text[i]);
                    i++;
                } else {
                    clearInterval(adding);
                }
            }, speed);

            return () => {
                clearInterval(adding);
                setWord('');
            };
        }
    }, [inView, text, speed]);

    return (
        <p
            ref={ref}
            className={`flex gap-1 my-2 items-center justify-center relative ${className}`}
        >
            {word}
            <span className="h-8 w-0.5 bg-black dark:bg-white animate-cursor duration-50"></span>
        </p>
    );
}

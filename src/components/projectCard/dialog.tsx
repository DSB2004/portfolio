import { forwardRef } from 'react';
import TechIcon from '@/ui/icon';
import { ImGithub } from "react-icons/im";
import { CiGlobe } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Project } from '@/types/app';
// Forwarding the ref to the <dialog> element
const Dialog = forwardRef<HTMLDialogElement, { project: Project }>(({ project }, ref) => {
    const { name, about, github, live_link, tech, start_timeline, end_timeline } = project;

    return (
        <>

            <dialog ref={ref} className="relative rounded-md max-w-[800px] p-10 bg-light dark:bg-dark w-11/12 min-w-80">
                <h2 className='text-xl md:text-3xl text-light-primary font-bold dark:text-dark-primary mb-2'>{name}</h2>
                <p className='text-xs md:text-sm text-justify dark:text-white my-2'>{about}</p>

                <p className='text-right w-full my-2 dark:text-white opacity-50 text-xxs md:text-xs'>{start_timeline}-{end_timeline}</p>


                <form method="dialog" className='absolute top-2 right-2'>
                    <button>
                        <IoMdClose className='w-6 h-6   dark:text-white' />
                    </button>
                </form>


                {/* {/* <p>GitHub: {github}</p> */}

                <h2 className='text-sm text-justify mt-10 text-light-primary font-bold uppercase dark:text-dark-primary'>
                    Tech Stack
                </h2>
                <div className="flex my-2 items-center gap-2">
                    {tech.map(ele => <TechIcon techName={ele} />)}
                </div>


                <div className="flex mt-5 justify-end items-center gap-2">
                    <span className='my-2 dark:text-white opacity-50 text-xs'>View Project</span>
                    <Link to={github} target='_blank'>
                        <ImGithub className='w-6 h-6  dark:text-white ' />
                    </Link>
                    <Link to={live_link} target='_blank'>
                        <CiGlobe className='w-6 h-6  dark:text-white ' />
                    </Link>
                </div>




            </dialog>
        </>
    );
});

export default Dialog;

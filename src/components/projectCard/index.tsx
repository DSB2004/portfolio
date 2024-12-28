import React, { useRef } from 'react'
import Button from '@/ui/button'
import Dialog from './dialog'
import { Project } from '@/types/app'
export default function ProjectCard({ project }: { project: Project }) {
    const { name, about } = project
    const dialogRef = useRef<HTMLDialogElement>(null);
    return (
        <div className=' p-8 min-h-64 w-full shadow-lg border-2 border-light dark:border-dark rounded-md '>

            <h2 className='text-xl text-light-primary font-bold dark:text-dark-primary mb-2'>{name}</h2>
            <p className='text-xs text-justify dark:text-white'>{about}</p>
            <Dialog ref={dialogRef} project={project}></Dialog>
            <Button className='mt-10 !p-2 !text-xs' onClick={() => dialogRef.current?.showModal()}>
                Know More
            </Button>


        </div>
    )
}

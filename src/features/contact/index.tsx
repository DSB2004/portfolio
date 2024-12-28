import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import User from "@/assets/dev.json"
import ContactCard from '@/components/contactCard';

export default function Contact() {
    return (
        <footer id="contact" className='bg-light-primary dark:bg-dark-primary p-10 flex items-center flex-col'>
            <div className='flex gap-6'>
                {/* LinkedIn Card */}
                <ContactCard to={User.linkedin} className='bg-[#0077B5]' title='LinkedIn'>
                    <FaLinkedinIn className='w-6 h-6 fill-black dark:fill-white group-hover:fill-white relative z-10' />
                </ContactCard>

                {/* GitHub Card */}
                <ContactCard to={User.github} className='bg-[#181717]' title='GitHub'>
                    <FaGithub className='w-6 h-6 fill-dark dark:fill-white group-hover:fill-white relative z-10' />
                </ContactCard>

                {/* LeetCode Card */}
                <ContactCard to={User.leetcode} className='bg-gray-900' title='LeetCode'>
                    <SiLeetcode className='w-6 h-6  fill-dark dark:fill-white group-hover:fill-yellow-500 relative z-10' />
                </ContactCard>

                {/* Email Card */}
                <ContactCard to={`mailto:${User.email}`} className='bg-[#D14836]' title='Email'>
                    <FaEnvelope className='w-6 h-6  fill-dark dark:fill-white group-hover:fill-white relative z-10' />
                </ContactCard>
            </div>
        </footer>
    )
}

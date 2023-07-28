import { SocialProps } from '@/types'
import Link from 'next/link'
import React from 'react'
import {FiArrowUpRight} from "react-icons/fi"

const SocialLink = ({title, link}:SocialProps) => {
  return (
    <Link href={link} className='flex items-center justify-center gap-2 text-xl text-gray-400 font-semibold'>
      <p className='group-hover:text-white'>{title}</p>
      <FiArrowUpRight className='translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500'/>
    </Link>
  )
}

export default SocialLink

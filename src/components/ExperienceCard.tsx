import React, { ReactNode } from 'react'

interface IExperienceCardProps {
  title:string;
  subtitle:string;
  icon:ReactNode
}
const ExperienceCard = ({title, subtitle, icon}:IExperienceCardProps) => {
  return (
    <div className='flex items-center gap-4'>
      <span className='w-12 h-12 rounded-full border-[1px] bg-black flex items-center justify-center border-blue-600'>
        <span className='text-2xl'>{icon}</span>
      </span>
      <div>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p className='text-base tracking-wide text-gray-400'>{subtitle}</p>
      </div>
    </div>
  )
}

export default ExperienceCard

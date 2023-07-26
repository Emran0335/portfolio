import Image from 'next/image'
import React from 'react'
import emranImg from '../../public/img/emran2.png'

const Banner = () => {
  return (
    <div className='border-b-[1px] border-slate-700 py-20 flex flex-col md:flex-row items-center gap-10'>
      <div className='w-44 h-44 rounded-full bg-black'>
        <Image src={emranImg} alt='emran image' className='object-cover w-full h-full rounded-full border-[1px] border-indigo-700 p-2'/>
      </div>
      <div className='w-3/4 flex flex-col items-center md:items-start gap-2'>
        <h1 className='text-5xl font-bold text-white'>Emran Hossain</h1>
        <h3 className='text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 tracking-wide'>Frontend Developer</h3>
        <p className='text-base tracking-wide text-center md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptas repudiandae veniam totam sequi quae dolores cum accusamus praesentium ipsa aperiam, quaerat architecto molestias, adipisci eaque nisi beatae consequuntur eum!</p>
      </div>
    </div>
  )
}

export default Banner

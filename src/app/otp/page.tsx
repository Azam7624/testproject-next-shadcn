import React from 'react'
import TextFeild from './component/TextFeild'
import { formLogin } from '@/lib/action/form'

const OtpPage = () => {
  return (
   <form action={formLogin}>
    <div className='flex flex-col gap-3 justify-center items-center mt-6'>
        <input className='border border-red-500 w-72' id='name' name='name'/>
        <input className='border border-red-500 w-72' id='faName' name='faName'/>
        <input className='border border-red-500 w-72' id='email' name='email'/>
        <button type='submit' className='w-44 border border-blue-400 bg-yellow-500'>save</button>
    </div>
   </form>
  )
}

export default OtpPage

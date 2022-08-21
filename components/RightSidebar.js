import React from 'react'
import {RiVideoAddFill} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi';
import {CgMoreAlt} from 'react-icons/cg';
import { Contacts } from './Contacts';


const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt />
                </div>
            </div>
        </div>
        <Contacts src = "https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600" name = "Krishna Nand" status = "Online"/>
        <Contacts src = "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=600" name = "Pankaj Kumar" status = "Online"/>
        <Contacts src = "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600" name = "Shivam Singh" status = "Offline"/>
        <Contacts src = "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&w=600" name = "Prakriti Sharma" status = "Online"/>
    </div>
  )
}

export default RightSidebar
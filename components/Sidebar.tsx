import React from 'react'
import Image from 'next/image';
import logo from '../img/logo.png'
import { BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon, HomeIcon, } from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
    
  return (
    
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
        
        {/* <Image className='h-1 w-1' src={logo} alt="logo" height={200} width={60} /> */}
        <img className=' mb-3.1 h-20 w-20' src="https://t4.ftcdn.net/jpg/02/56/10/57/360_F_256105722_kENSds1g7rABVBOw6R1NqKRBK4zSJWpt.jpg" alt="" />
        <SidebarRow Icon={HomeIcon} title='home' />
        <SidebarRow Icon={HashtagIcon} title='explore' />
        <SidebarRow Icon={BellIcon} title='notifications' />
        <SidebarRow Icon={MailIcon} title='messages' />
        <SidebarRow Icon={BookmarkIcon} title='bookmark' />
        <SidebarRow Icon={CollectionIcon} title='list' />

        <SidebarRow Icon={UserIcon} title='signin' />
        <SidebarRow Icon={DotsCircleHorizontalIcon} title='more' />

    </div>
  )
}

export default Sidebar
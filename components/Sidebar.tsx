import React from 'react'
import Image from 'next/image';
import logo from '../img/logo.png'
import { BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon, HomeIcon, } from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
    console.log(logo)
  return (
    
    <div className=''>
        
        <Image className='h-10 w-10' src={logo} alt="logo" height={100} width={100} />
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
import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import React from 'react'

function Widgets() {
  return (
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
        <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2'>
            <SearchIcon className='h-5 w-5 text-gray-400' />
            <input className='flex-1 outline-none bg-transparent' type="text" placeholder='search' />
        </div>

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="doublewavve"
            options={{ height: 1000 }}
        />
    </div>
  )
}

export default Widgets
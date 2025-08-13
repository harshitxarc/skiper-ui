'use client'
import ShareButton from '@/components/ui/share-button'
import FlipLink from '@/components/ui/text-effect-flipper'
import { TextScroll } from '@/components/ui/text-scroll'
import WrapButton from '@/components/ui/wrap-button'
import { Banana, Facebook, Globe, Twitter } from 'lucide-react'
import React, { use } from 'react'

function page() {
  return (
    <div>
      {/* <h1 className='text-white'>Next</h1> */}
      {/* <WrapButton className='mt-20' href='https://soleva.vercel.app/'>
        <Globe className='animate-spin'/>
        Get Started
      </WrapButton>

      <ShareButton links={[{icon:Twitter}, {icon:Globe}, {icon:Banana}, {icon:Facebook}]}>
        Share
      </ShareButton> */}

      <FlipLink href='https://github.com/harshitxarc'>Github</FlipLink>
      <FlipLink href='https://www.instagram.com/harshit07.__/'>Instagram</FlipLink>
      <FlipLink href='https://www.instagram.com/harshit07.__/'>Dribble</FlipLink>

      <div className='h-screen'></div>
      <div className='h-screen border-t-2'>
        <TextScroll default_velocity={3} text='This Is Harshit' className='text-5xl font-bold'></TextScroll>
      </div>
      <div className='h-screen border-t-2'></div>
    </div>
  )
}

export default page

'use client'
import { CardCarousel } from '@/components/ui/card-carousel'
import ImageCursorTrail from '@/components/ui/image-cursortrail'
import ShareButton from '@/components/ui/share-button'
import FlipLink from '@/components/ui/text-effect-flipper'
import { TextScroll } from '@/components/ui/text-scroll'
import WrapButton from '@/components/ui/wrap-button'
import { Banana, Facebook, Globe, Twitter } from 'lucide-react'
import React, { use } from 'react'

function page() {

    const images = [
    { src: "/card2.jpg", alt: "Image 1" },
    { src: "/card3.jpg", alt: "Image 2" },
    { src: "/card4.jpg", alt: "Image 3" },
    { src: "/card5.jpg", alt: "Image 4" },
  ]

  const images2 = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
]
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
      <div className='h-screen border-t-2'>
        <CardCarousel images={images} />
      </div>
      <div className="h-screen w-full border-t-2">
        <ImageCursorTrail
          items={images2}
          maxNumberOfImages={5}
          distance={25}
          imgClass="sm:w-40 w-28 sm:h-48 h-36"
          className="w-full rounded-3xl"
        >
          <article className="relative z-50 flex flex-col items-center justify-center ">
            <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight ">
              Images That Follow the Cursor Cooool Right
            </h1>
          </article>
        </ImageCursorTrail>
      </div>
    </div>
  )
}

export default page

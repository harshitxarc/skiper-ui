'use client'
import { CardCarousel } from '@/components/ui/card-carousel'
import ImageCursorTrail from '@/components/ui/image-cursortrail'
import ShareButton from '@/components/ui/share-button'
import FlipLink from '@/components/ui/text-effect-flipper'
import { TextScroll } from '@/components/ui/text-scroll'
import ThemeToggleButton from '@/components/ui/theme-toggle-button'
import WrapButton from '@/components/ui/wrap-button'
import { Banana, Facebook, Globe, Twitter } from 'lucide-react'
import React, { use } from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 dark:bg-zinc-900/30 backdrop-blur-xl border-b border-white/20 dark:border-zinc-800/60 shadow-2xl shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight drop-shadow text-black dark:text-white">Skiper</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="font-medium transition-colors text-black dark:text-white hover:text-zinc-800 dark:hover:text-zinc-200">Home</a>
          <a href="#features" className="font-medium transition-colors text-black dark:text-white hover:text-zinc-800 dark:hover:text-zinc-200">Features</a>
          <a href="#gallery" className="font-medium transition-colors text-black dark:text-white hover:text-zinc-800 dark:hover:text-zinc-200">Gallery</a>
          <a href="#contact" className="font-medium transition-colors text-black dark:text-white hover:text-zinc-800 dark:hover:text-zinc-200">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggleButton variant="gif" url="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXhjcThtMGw5OWlzeTAxNnNmMXBlYTFleGE0OG8wNDVvNWFnZ3p6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/f9dqzrmiw1LzLMk691/giphy.gif"/>
        </div>
      </div>
    </nav>
  );
}

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
      <Navbar />
      <div className="pt-16"> {/* Add padding to offset the fixed navbar */}
      {/* <h1 className='text-white'>Next</h1> */}
      {/* <WrapButton className='mt-20' href='https://soleva.vercel.app/'>
        <Globe className='animate-spin'/>
        Get Started
      </WrapButton>

      <ShareButton links={[{icon:Twitter}, {icon:Globe}, {icon:Banana}, {icon:Facebook}]}>
        Share
      </ShareButton> */}

      <div className='h-screen'>
        <CardCarousel images={images} />
      </div>
      
      <div className='h-screen border-t-2 flex items-center'>
        <div>
          <FlipLink href='https://github.com/harshitxarc'>Github</FlipLink>
          <FlipLink href='https://www.instagram.com/harshit07.__/'>Instagram</FlipLink>
          <FlipLink href='https://www.instagram.com/harshit07.__/'>Dribble</FlipLink>
        </div>
      </div>

      <div className='h-screen flex items-center'>
        <TextScroll default_velocity={3} text='This Is Harshit' className='text-3xl font-semibold font-mono'></TextScroll>
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
      <div className="h-screen w-full border-t-2 flex items-center justify-center">
        <ThemeToggleButton variant="gif" url="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXhjcThtMGw5OWlzeTAxNnNmMXBlYTFleGE0OG8wNDVvNWFnZ3p6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/f9dqzrmiw1LzLMk691/giphy.gif"/>
      </div>
      </div>
    </div>
  )
}

export default page

import Footer from '@/Components/Footer/Footer'
import HeroScetion from '@/Components/HeroSection/HeroScetion'
import HottestMemeList from '@/Components/HottestMemeList/HottestMemeList'
import LearnMoreOptions from '@/Components/LearnMoreOptions/LearnMoreOptions'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
    <Navbar />
    <main className=" px-[10%]">
      <HeroScetion/>
      <HottestMemeList/>
      <LearnMoreOptions/>
      <Footer/>
    </main>
  </div>
  )
}

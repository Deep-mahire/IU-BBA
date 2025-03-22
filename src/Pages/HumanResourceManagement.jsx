import React from 'react'
import HumanResourceHero from '../Components/Marketing Management/Human Resource Management/HumanResourceHero'
import HumanResourcePointers from '../Components/Marketing Management/Human Resource Management/HumanResourcePointers'
import HumanResourceOverview from '../Components/Marketing Management/Human Resource Management/HumanResourceOverview'
import HumanResourceOfferings from '../Components/Marketing Management/Human Resource Management/HumanResourceOfferings'
import HumanResourceStudying from '../Components/Marketing Management/Human Resource Management/HumanResourceStudying'
import HumanResourceNumbers from '../Components/Marketing Management/Human Resource Management/HumanResourceNumbers'
import HumanResourceHighlights from '../Components/Marketing Management/Human Resource Management/HumanResourceHighlights'
import HumanResourceJoin from '../Components/Marketing Management/Human Resource Management/HumanResourceJoin'
import HumanResourcePlacement from '../Components/Marketing Management/Human Resource Management/HumanResourcePlacement'
import HumanResourceTestimonials from '../Components/Marketing Management/Human Resource Management/HumanResourceTestimonials'

const HumanResourceManagement = () => {
  return (
    <div>
      {/* < />
      < />
      < />
      < />
      < />
      < />
      < />
      < />
      <MarketingManagementTestimonials /> */} 
      <HumanResourceHero/>
      <HumanResourcePointers/>
      <HumanResourceOverview/>
      <HumanResourceOfferings/>
      <HumanResourceStudying/>
      <HumanResourceNumbers/>
      <HumanResourceHighlights/>
      <HumanResourceJoin/>
      <HumanResourcePlacement/>
      <HumanResourceTestimonials/>
    </div>
  )
}

export default HumanResourceManagement

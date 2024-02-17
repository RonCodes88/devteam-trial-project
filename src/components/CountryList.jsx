"use client"

import React from 'react'
import CountryCard from './CountryCard'

const CountryList = () => {
  return (
    <div className="flex flex-col gap-8">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  )
}

export default CountryList
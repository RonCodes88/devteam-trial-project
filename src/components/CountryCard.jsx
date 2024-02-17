import React from 'react'
import axios from 'axios'
import Logo from "../../public/logo.jpg"
import Image from 'next/image'

const CountryCard = () => {
  return (
    <div className="flex gap-12 p-4 bg-slate-200 justify-center items-center rounded-lg shadow-md">
      <div>
        <h3>Country name</h3>
        <p>Capital: this is ACM-CS</p>
        <p>Region: this is ACM-CS</p>
      </div>

      <Image src={Logo} alt="Logo" width={100} height={100} />
    </div>
  )
}

export default CountryCard
import React from "react";
import axios from "axios";
import Logo from "../../public/logo.jpg";
import Image from "next/image";

const CountryCard = ({ CountryName, Capital, Region, Flag }) => {
  return (
    <div className="flex gap-12 p-4 bg-slate-200 justify-center items-center rounded-lg shadow-md">
      <div>
        <h3>Country name: {CountryName}</h3>
        <p>Capital: {Capital}</p>
        <p>Region: {Region}</p>
        <img src={Flag} alt={CountryName} width="400" />
      </div>
    </div>
  );
};

export default CountryCard;

"use client";

import React from "react";
import CountryCard from "./CountryCard";
import { useState, useEffect } from "react";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.log("Error occurred: ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {countries.map((country) => (
        <ul key={country.cca3}>
          <CountryCard
            CountryName={country.name.official}
            Capital={country.capital}
            Region={country.region}
            Flag={country.flags.svg}
          />
        </ul>
      ))}
    </div>
  );
};

export default CountryList;

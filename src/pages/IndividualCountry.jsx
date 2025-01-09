import "../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function IndividualCountry({ countries }) {
  const { country } = useParams();

  const countryData = countries.find((item) => item.name.common === country);
  console.log(countryData);
  return <div>{country}</div>;
}

import React from 'react'
import axios from "axios";

const Medicines = () => {
    const options = {
        method: 'GET',
        url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
        params: {drug: 'advil'},
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  return (
    <div>
      
      

    </div>
  )
}

export default Medicines


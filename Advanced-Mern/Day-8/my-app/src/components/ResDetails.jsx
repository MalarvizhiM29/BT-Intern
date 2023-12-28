import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ResDetails = () => {

    const id = useParams();
    console.log(id);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const res = fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=331001");
        const json = (await res).json();
        console.log(json);
    }

  return (
    <div>ResDetails</div>
  )
}

export default ResDetails
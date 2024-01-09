import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCategory from './ItemCategory';

const ResDetails = () => {

    const params = useParams();
    const [details,setDetails] = useState([]);
    const [categories,setCategories] = useState([]);
    console.log(params);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=" + params.resid);
        const json = await res.json();
        console.log(json);

        const details = json.data.cards[0].card.card.info;
        const categories = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        setDetails(details);

        const filteredCategories = categories.filter((item)=>{
          return item.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
        })
        console.log(categories);
        setCategories(filteredCategories)
    }

    if(Object.keys(details).length === 0){
      return <div className='loader'>Loading...</div>
    }

  return (
    <div className='rest-detail'>
      <div className='top-det-box'>
      <div className='detail-name'>{details.name}</div>
      <div className='detail-det'>{details.cuisines.join(', ')}</div>
      <div className='detail-det'>{details.areaName}</div>
      </div>
      {categories.map((category)=>{
        return <ItemCategory 
           key ={category.card.card.title}
           category={category}
        />
      })}
    </div>
  )
}

export default ResDetails
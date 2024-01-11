import ResCard from './ResCard'
import { useEffect, useState } from 'react'
import loadgif from '../loadgif.gif'

const ResContainer = ()=> {

  const [restaurants, setRestaurants] = useState([]);
  const [searchText,setSearchText] = useState('');
  const [list,setList] = useState('');
  // console.log(searchText);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async()=>{
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await res.json();
    setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

  if(restaurants.length==0){
    return (
      <div className='loader'>
        <img src={loadgif} className='loadgif'></img>
        <h2>Looking for great food near you...</h2>
      </div>
    )
  }

  const toprest = ()=> {
    const result = restaurants.filter((rest)=>{
      return rest.info.avgRating>=4.4;
    })
    console.log(result);
    setList(result);
  }

  const fastdel = ()=>{
    const result = restaurants.filter((rest)=>{
    return rest.info.sla.deliveryTime < 30;
    })
    console.log(result);
    setList(result);
  }


  const updateSearchText = (e) =>{
    setSearchText(e.target.value);
    searchrest(e.target.value);
  }

  const searchrest=(value)=>{
    const result = restaurants.filter((rest)=>{
      const resName =  rest.info.name.toLowerCase()
      return resName.includes(value.toLowerCase())
    })
    setList(result)
  }

    return(
        <>
        <h2 className='grand-title'>Restaurants with online food delivery in Coimbatore</h2>
        <div className='homebtns'>
        <button onClick={toprest} className='topbutton'>Top restaurant</button>
        <button onClick={fastdel} className='topbutton'>Fast Delivery</button>
        <input className='searchinput' value={searchText} onChange={updateSearchText} placeholder='Search'/> 
        </div>
        <div className='restaurant-container'>
          {
            list.map((rest)=>{
            return <ResCard 
            key={rest.info.id}
            restaurant={rest.info}
             />
            })
          }
        </div>
        </>
    )
}

export default ResContainer;
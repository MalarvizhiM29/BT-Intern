import ResCard from './ResCard'
import { useEffect, useState } from 'react'

const ResContainer = ()=> {

  const [restaurants, setRestaurants] = useState([]);
  const [searchText,setSearchText] = useState('');
  const [list,setList] = useState('');
  console.log(searchText);

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
    return "Loading..."
  }

  const toprest = ()=> {
    const result = restaurants.filter((rest)=>{
      return rest.info.avgRating>=4.4;
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
        <div className='homebtns'>
        <input className='searchinput' value={searchText} onChange={updateSearchText} placeholder='Search'/>
        <button onClick={toprest} className='topbutton'>Top restaurant</button>
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
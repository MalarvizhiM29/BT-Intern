import { Link } from "react-router-dom";
import star from "../star.png"

const ResCard = (props)=>{
    const {restaurant} = props;

    return(
        <>
            <Link to={`/restaurants/${restaurant.id}`} className="cardlink">
            <div>
              <div className='restaurant-card'>
                <img className='restaurant-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.cloudinaryImageId}></img>
                <div className="main-card">
                  <div className='food-name'>{restaurant.name}</div>
                  <div className='food-name'><img src={star} className="star"></img>{restaurant.avgRatingString} | {restaurant.costForTwo}</div>
                  <div className='detail-det'>{restaurant.cuisines.join(',')}</div>
                  <div className='detail-det'>{restaurant.areaName}</div>
                </div>
              </div>
            </div>
            </Link>
        </>
    )
}

export default ResCard;
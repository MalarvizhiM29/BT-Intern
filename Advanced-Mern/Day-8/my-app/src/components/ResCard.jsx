
const ResCard = (props)=>{
    const {restaurant} = props;

    return(
        <>
            <div>
              <div className='restaurant-card'>
                <img className='restaurant-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.cloudinaryImageId}></img>
                <div>{restaurant.name}</div>
                <div>{restaurant.avgRatingString} | {restaurant.costForTwo}</div>
                <div>{restaurant.cuisines.join(',')}</div>
                <div>{restaurant.areaName}</div>
              </div>
            </div>
        </>
    )
}

export default ResCard;
import React from 'react'

const ItemList = (props) => {
    const {item} = props
  return (
    <>
    <div>
      <div className='food-card'>
        <div>
          <div className='food-name'>{item.card.info.name}</div>
          <div className='food-name'>₹{item.card.info.price/100}</div>
          <div className='detail-det'>{item.card.info.description}</div>
        </div>
        <div className='image-container'>
          {item.card.info.imageId !== undefined && (
              <img
                className='food-img'
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                alt={item.card.info.name}
              />
            )}
          <button className='add-btn'>Add</button>
        </div>
      </div>  
    </div>
    </>
  )
}

export default ItemList
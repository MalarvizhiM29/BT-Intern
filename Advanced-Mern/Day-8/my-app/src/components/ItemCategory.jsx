import ItemList from "./ItemList";

const ItemCategory = (props) => {

  const {category} =props;

  return (
    <div className='category-container'>
        <div className="detail-head">{category.card.card.title}</div>
        {category.card.card.itemCards.map((item)=>{
            return <ItemList 
            key={item.card.info.id}
            item={item}
            />
        })}
    </div>
  )
}

export default ItemCategory
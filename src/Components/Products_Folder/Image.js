import Buttons from "./Buttons"
//import { useEffect } from "react"

const Image = ({list, select, updateOrder}) => {
  let condition = true

  if(select === 'All') {
    condition = true
  } else {
    condition = (select === list.category) 
  }
  // useEffect(() => {
  // }, [list.order])
  const addCurrency = (price) => {
    // let number=19887
    let rupees = new Intl.NumberFormat("en-IN", {
      style:"currency",
      currency: "INR"
    })
    // console.log(rupees.format(price))
    return rupees.format(price)
  }

  return (
    <>
    { 
    condition &&
    <div key={list.id} className={`product-body ${list.order && 'product-select'}`}  >
      <div className="product-image">
        <img src={list.preview} className='product-img' 
          alt='NO Image_Found' />
        <Buttons color={list.order ? "" : ""}
        text={list.order ? "Remove" : "Order the product"}
        updateOrder={updateOrder} id={list.id}/>
      </div>      
      <div className="product-details">
        {/* <div className="product-title"> */}
        <p className='product-label'>{list.label}</p>
        <p className="product-category">{list.category}</p>
        {/* </div> */}
        {/* <div> */}
        <p className="product-price"> {addCurrency(list.price)}</p>
        {/* </div> */}
        {/* <hr /> */}
      </div>
    </div>}
    </>
  )
}

export default Image

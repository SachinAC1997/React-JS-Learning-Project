const Buttons = ({updateOrder, id, color, text}) => {
  return (
    <button className="product-order"
        style={{backgroundColor: color}}
        onClick={()=>updateOrder(id)} >
        {text}
    </button>
  )
}

export default Buttons

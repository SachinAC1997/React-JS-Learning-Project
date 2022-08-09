import { useEffect, useState } from 'react'
//import { NavLink } from 'react-router-dom'
import Images from './Images'
import AddList from './AddList'
import { IoIosArrowDown } from 'react-icons/io'

const Products = () => {
  const [lists, setLists] = useState([])
    // {id: 1, picture: "/Images/Bottle.jpg", order: false, label: 'Glass Bottle', quantities: 1, price: 30},
    // {id: 2, picture: "/Images/Plastic_bottle.jpg", order: false, label: 'Plastic Bottle', quantities: 1, price: 20},
    // {id: 3, picture: "/Images/Steel_Bottle.jpg", order: false, label: 'Metal Water Bottle', quantities: 1, price: 100},
// {id: , picture: "", order: false, label: "", quantities: 1, price:},
  const [select, setSelect] = useState('All')

  const [show, setShow] = useState(false)

  const [mobile, setMobile] = useState(false)

  let pscroll = document.querySelector('.product-scroll')

  useEffect(() => {
    const getLists = async () => {
      const listsFromServer = await fetchLists()
      setLists(listsFromServer)
    }
    getLists()
  }, [])

  const fetchLists = async () => {
    const res = await fetch(
      'http://localhost:5000/lists')
    const data = await res.json()
    return data
  }

  const fetchList = async (id) => {
    const res = await fetch(
      `http://localhost:5000/lists/${id}`)
    const data = await res.json()
    return data
  }

  const updateQuantity = async (id, event) => {
    //console.log(event.target.value)
    const changeQuantity = await fetchList(id)
    const updList = {...changeQuantity,
    quantity: event.target.value}
     
    const res = await fetch(
    `http://localhost:5000/lists/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updList)
    })
    const data = res.json()

    setLists(
      lists.map((quantities) =>
        quantities.id === id ?
        {...quantities, quantity: data.quantity} :
        quantities 
      )
    )
  }

  const updateOrder = async (id) => {
    const changeOrder = await fetchList(id) 
    const updList = {...changeOrder,
    order: !changeOrder.order }

    const res = await fetch(
      `http://localhost:5000/lists/${id}`,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updList)
      }) 
    const data = await res.json()  

    setLists(
      lists.map((list) =>
        list.id === id ?
        {...list, order: data.order}
        : list
      )
    )
  }

  const resetProducts = () => {
    lists.map((list) => (
      resetQuantity(list.id)  
    ))
  } 

  const resetQuantity = async (id) => {
    const product = await fetchList(id)
    const updProduct = {...product,
    quantity: 1, order: false}

    const res = await fetch(
    `http://localhost:5000/lists/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updProduct)}
    )

    const data = await res.json()

    setLists(
      lists.map((quantities) =>
        quantities.id === id ?
        {...quantities, order: data.order, quantity: data.quantity} :
        quantities 
      )
    )
  }

  const onClickhandler = () => {
    setShow(!show)
    // console.log(show)
  }

  const btnprev = () => {
    let width = pscroll.clientWidth
    pscroll.scrollLeft = pscroll.scrollLeft - width
    // console.log(width)
  }

  const btnnext = () => {
    let width = pscroll.clientWidth
    // console.log(pscroll.scrollLeft)
    pscroll.scrollLeft = pscroll.scrollLeft + width
  }

  window.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
       pscroll.scrollLeft = pscroll.scrollLeft + 15
    } else if (event.key === 'ArrowLeft') {
      pscroll.scrollLeft = pscroll.scrollLeft - 15
    }
    console.log(pscroll.scrollLeft)
  })

  return (
    <div className='product-main'>
      {!show && <div className='product-div'>
        <div className='product-1'>
          <button className='pre-btn' onClick={btnprev}><p>&lt;</p></button>
          <button className='next-btn' onClick={btnnext}><p>&gt;</p></button>
          <div className='product-headbar'>
            <p className='product-head'>Best Selling Products</p>
            <p className='product-head-mobile'>Products</p>
            <div className='product-mobile'>
              <button onClick={() => setMobile(!mobile)}>
                <p><span>filters </span><IoIosArrowDown /></p>
              </button>
            </div>
          </div>
          <div className='product-scroll'>
            <Images lists={lists} updateOrder={updateOrder} updateQuantity={updateQuantity}
            select={select} />
          </div>
        </div>
        <div className={mobile ? "product-2-mobile" : 'product-2'}>
          <form className='product-choose'>
            <label htmlFor='filters'>Select the type of product</label>
           <select id='filters'
            onChange={(e) => setSelect(e.target.value)}>
              <option value='All'>All</option>
              <option value='Mobiles'>Mobiles</option>
              <option value='Home Appliances'>Home Appliances</option>
              <option value='Clothes'>Clothes</option>
              <option value='Electronics'>Electronics</option>
              <option value='Books'>Books</option>
              <option value='Toys'>Toys</option>
              <option value='Pharmacy'>Pharmacy</option>
            </select>
          </form>
          <center>
          <button className='product-button'
          onClick={() => resetProducts()} >Reset</button>
          <button onClick={onClickhandler} className='product-addp'>Add Product</button>
          </center>
        </div>
      </div>}
      {show && <AddList onClick={onClickhandler}/>}
      {/* <CheckKey /> */}
    </div>
  )
}

export default Products

  // const JSONdata = () => {
  //   const data = JSON.stringify(lists)
  //   console.log(data)
  // }

  // const updateQuantity = (id, event) => { 
  //   setLists(
  //     lists.map((quantity) =>
  //       quantity.id === id ?
  //       {...quantity, quantities: event.target.value} :
  //       quantity 
  //     )
  //   )
  // }

  // const updateOrder = (id) => {
  //   let changeOrder = [...lists]

  //   changeOrder[id-1].order ? changeOrder[id-1].order = false
  //   : changeOrder[id-1].order = true
  //   setLists(changeOrder)
  // }
import React, { useEffect, useState } from 'react'

const OrderList = () => {
  const [bills, setBills] = useState([])
  // let i = 0

  useEffect(() => {
    const getBill = async () => {
      const billFromServer = await fetchBills()
      setBills(billFromServer)
    }
    getBill()
  }, [])

  const fetchBills = async () => {
    const res = await fetch(
      'http://localhost:5000/lists')
    const data = await res.json()
    return data
  }

  const fetchBill = async (id) => {
    const res = await fetch(
      `http://localhost:5000/lists/${id}`)
    const data = await res.json()
    return data
  }

  const updateQuantity= async (id, event) => {
    const changeQuantity = await fetchBill(id)
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

    setBills(
      bills.map((quantities) =>
        quantities.id === id ?
        {...quantities, quantity: data.quantity} :
        quantities
      )
    )
    // window.location.reload(false)
  }

  const totalPrice = () => {
    let sum = 0, id = 0
    const add = []
    bills.map((total) => (
      total.order &&
      (add[id++] = total.price * total.quantity)
    ))
    for(let x in add){
      sum += add[x]
    }
    return sum
  }

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
    <div className='Apps'>
      {bills.map((bill) => 
      (
        bill.order && <div className='order-body' key={bill.id}>
          <div className='order-image'>
            <img className='order-img' src={bill.preview} alt='Not Found' />
          </div>
          <div className='order-details'>
              <h1>{bill.label}</h1>          
              <p><span>Category:</span> {bill.category}</p>
              <p><span>Price per piece:</span> {addCurrency(bill.price)}</p>
              <div className='order-form'>
              <label>
                Quantity: <input type='number' min={1} max={20} size={2} 
                value={bill.quantity} 
                onChange={e => updateQuantity(bill.id, e)}
                 />
              </label>
              </div>
              <div className='order-pamount'>
              <p><span>Amount: </span> {addCurrency(bill.quantity * bill.price)}</p> 
              </div>  
          </div>
        </div>
      ))}
      <center>
        <div className='order-price'>
          Total Price : <span>{addCurrency(totalPrice())}</span>
        </div>
      </center>
    </div>    
  )
}

export default OrderList


/* <center>
        <div>
        <p className='orderl'>Orders Details</p>
          <table className='table-order'>
            <thead>
              <tr>
                <th>Number of Items</th>
                <th>Items Name</th>
                <th>Image</th>
                <th>Category</th>
                <th>Items Price</th>
                <th>Quantity</th>
                <th>Total(per item)</th>              
              </tr>
            </thead>
            {bills.map((bill) => 
            ( bill.order &&
              <tbody key={bill.id}>
              <tr>
                <td className='table-amount'>{++i}</td>
                <td>{bill.label}</td>
                <td><img src={bill.preview} alt='No_Image' width={150} height={75} /></td>
                <td>{bill.category}</td>
                <td className='table-amount'>{bill.price}₹</td>
                <td>{bill.quantity}</td>
                <td className='table-amount'>{bill.price * bill.quantity}₹</td>
              </tr>
            </tbody>
            )
            )}
            <tfoot>
              <tr className='table-total'>            
                <td colSpan={7}>Total Amount:  {totalPrice()}₹</td>
              </tr>
            </tfoot>
          </table>
        </div>
        </center> */
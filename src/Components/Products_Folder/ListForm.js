import React from 'react'
import { useEffect } from 'react'
//import { useRef } from 'react'
import { useState } from 'react'

const ListForm = ({ onAdd }) => {
  const [category, setCategory] = useState('')
  const [label, setLabel] = useState('')  
  const [order, setOrder] = useState(false)
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  const [picture, setPicture] = useState()
  const [preview, setPreview] = useState()
  // const fileInputRef = useRef()  

  useEffect(() => {
    if(picture) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      } 
      reader.readAsDataURL(picture)
    } else {
      setPreview(null)
    }
  }, [picture])

  const handleSubmit = (e) => {
    e.preventDefault()

    onAdd({category, label, order, price, quantity, preview })
    setCategory('')
    setLabel('')
    setPrice(0)
    // setPicture(null)
    // setPreview(null)
  }
  console.log(category)
  return (
    <center>
    <form className='nones add-product' onSubmit={handleSubmit}>
      <p>Add Product</p>
      <div className='add-div'>
      <label htmlFor=''>Select the type of product:</label>
        <select value={category} id='filter'
        onChange={(e) => setCategory(e.target.value)}>
          <option value=''>All</option>
          <option value='Mobiles'>Mobiles</option>
          <option value='Home Appliances'>Home Appliances</option>
          <option value='Clothes'>Clothes</option>
          <option value='Electronics'>Electronics</option>
          <option value='Books'>Books</option>
          <option value='Toys'>Toys</option>
          <option value='Pharmacy'>Pharmacy</option>
        </select>
      </div>
      <div className='add-div'>
        <label htmlFor='label'>Product Name:</label>
        <input type='text' id='label' value={label}
        onChange={(e) => setLabel(e.target.value)} required/>
      </div>
      <div className='add-div'>
      {/* {preview ?  */}
        {/* : <button
          onClick={(e) => {
            e.preventDefault()
            fileInputRef.current.click()
          }} >
          Select Image
        </button> */}

        <label htmlFor='picture'>Product Image:</label>
        <input type='file' id='picture'
        //  ref={fileInputRef}
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0]
          if(file && file.type.substring(0, 5) === "image"){
            setPicture(file)
          } else {
            setPicture(null)
          }
        }} required/>
        <img src={preview} alt="No_Image" 
        width={100} height="100px"
        // style={{objectFit: "cover"}}
        className='add-img'
        onClick={() => {
          setPicture(null)
        }} />
      </div>
      <div className=''>
        {/* <label htmlFor='order'>Order:</label> */}
        <input type="checkbox" id='order' value={order}
        onLoad={() => setOrder(false)} hidden />
      </div>
      <div className='add-div'> 
        <label htmlFor='price'>Product Price:</label>
        <input type='number' id='price' min={0} value={price}
        onChange={(e) => setPrice(e.target.value)} required/>
      </div>
      <div className='add-div'>
        <label htmlFor='quantities'>Quantity:</label>
        <input type='number' id='quantities' value={quantity}
        onLoad={() => setQuantity(1)} disabled />
      </div>
      <input className='signup add-button' type="submit" value="Add" />
    </form>
    </center>
  )
}

export default ListForm

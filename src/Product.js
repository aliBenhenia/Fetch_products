import React from 'react'
import { useState, useEffect } from 'react'

export default function Product(props) {
  const [card, setCard] = useState(true)
  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(0);
  const increase = ()=>{
    setCounter(counter+1)
    setPrice(price + 20)
  }
  const decrease = ()=>{
     if( counter > 0 && price > 0)
     {
        setCounter(counter - 1)
        setPrice(price  -  20)
     }
  }
  return (
    <div key={props.items.id} className="card p-3 mb-5 col-lg-3 mr-2 text_center" id='product'>
       <h1>{props.items.title}</h1>
        <img src={props.items.images[0]} alt={props.items.title} />
        <div id='des' className='mt-5'>
          <p>
            {props.items.description}
          </p>
          <div>
            <h4>{props.items.brand} </h4>
          </div>
          <div>
            <span onClick={increase} className=''>+</span>
            <span onClick={decrease} className='ml-4'>-</span>
            <span className='ml-4 text-primary'>{counter}</span>
            <span id="price" className='ml-4 text-primary'>{props.items.price +  price}$</span>
          </div>
          <button onClick={()=>{
            setCard(!card)
          }}
           className={card ? "btn btn-danger" : "btn btn-primary"}>
            {card ? "add to card" : "added to card !"}
            </button>
        </div>
    </div>
  )
}

import React from 'react'
import { useState,useEffect } from 'react';
import Product from './Product';
import Navbar from './Nav';
import Footer from './Footer';
import "./index.scss"
export default function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        
        setItems(data.products)
        console.log(data.products);
      }
        );
  }, []);
  return (
        <>
              <Navbar />
              <div className='container' id='home'>  
                <div className='row'>
                    {items.map(item => (
                      <Product items = {item}/>
                    ))}
                </div>
          </div>
          <Footer />
        </>
  )
}

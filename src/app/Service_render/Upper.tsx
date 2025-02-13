"use client"
import React, { useState } from 'react';
import Uppercontent from './Uppercontent';

function Upper() {
    const [Items, setItems] = useState([
        {id: 1, image: '../Image/door1.png', currency:'../Image/dollar.png', background:'../Image/web dev.png', status: 'thank'},
        {id:2, image:'../Image/Icon (1).png', currency:'../Image/dollar.png', background:'no', status:"I tutor people who want to build career in tech, collaborate with project and also build responsive software for client"},
        {id:3, image:'../Image/Icon (2).png',currency:'../Image/dollar.png', background:'no', status:"I tutor people who want to build career in tech, collaborate with project and also build responsive software for client"},
        {id:4, image:'../Image/Icon (3).png', currency:'../Image/dollar.png', background:'no', status:"I tutor people who want to build career in tech, collaborate with project and also build responsive software for client"},
    ])
    const list= Items.find((item) => item.id == 1);
  return (
    <div>
    {/* Render Uppercontent only if item is found */}
    {list ? (<Uppercontent Answer={[list]} title="One of the setups for your business to grow is to have a functional website"/>
    ) : (
      <p>Item not found</p>  
    )}
  </div>
  )
}
export default  Upper;

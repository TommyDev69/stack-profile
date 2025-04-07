// "use client"
// import React, { useState } from 'react';
// import Uppercontent from './Uppercontent';

// const Upper = () => {
//     const [Items, setItems] = useState([
//         {id: 1, image:require( '../Image/door.png'),currency:require('../Image/dollar.png'), background:require('../Image/laptop (2).gif'), status: 'thank'},
//         {id:2, image:require('../Image/Icon (1).png'), currency:require('../Image/dollar.png'), background:'no', status:"I tutor people who want to build career in tech, collaborate with project and also build responsive software for client"},
//         {id:3, image:require('../Image/Icon (2).png'),currency:require('../Image/dollar.png'), background:'no', status:"I tutor people who want to build career in tech, collaborate with project and also build responsive software for client"},
//         {id:4, image:require('../Image/Icon (3).png'), currency:require('../Image/dollar.png'), background:'no', status:"I tutor people who want to build career in tech, collaborate with project and also build responsive software for client"},
//     ])
//     const list= Items.find((item) => item.id == 1);
//   return (
//     <div>
//         <h1 className="font-bold text-writing py-6 text-2xl px-4 capitalize text-white">services</h1>
//     {/* Render Uppercontent only if item is found */}
//     {list ? (<Uppercontent Answer={[list]} title="A key component for growing your business is having a well-functioning website.A functional website will not only enhance your business but also increase global awareness"/>
//     ) : (
//       <p>Item not found</p>  
//     )}
//   </div>
//   )
// }
// export default  Upper;

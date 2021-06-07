import React,{useEffect, useState} from 'react';


import axios from "axios";
function App() {

  const [products, setProducts]= useState([]);
  useEffect(()=>
  {
    axios
    .get("/api/products")
    .then((res) =>{
      console.log(res.data);
      setProducts(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  });
  return (
    <div>
      <ul>
        {products.map((p,index)=>(
          <li key={index}>{p}</li>
        ))}

      </ul>

          </div>
  );
        }

export default App;

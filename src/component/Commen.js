import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../redux/productAction'
import Images from './Images'
import './Commen.css'

const Commen = () => {
    const [search,setsearch]=useState("");
    const [query,setquery]=useState('dog')
    const hendelsumbit=(e)=>{
      e.preventDefault();
      setquery(search)
      setsearch('')
    }
    const result=useSelector((state)=>state.productData)
    const results = result?.photo?.results
    // console.log('djkfkf',results)
    let dispatch=useDispatch()
    useEffect(()=>{
  dispatch({type:types.PRODUCT_START,query})
    },[query])
  return (

    <div className="container">
      <form onSubmit={hendelsumbit}
  className="example"
  style={{ margin: "auto", maxWidth: "300px", marginTop: "30px" }}>
  <input
    className="input"
    type="text"
    value={search} onChange={(e)=>setsearch(e.target.value)}  
      required
  />
  <button type="sumbit">
    <i className="fa fa-search"></i>
  </button>
</form>
      <div className="row">
         {
          results?.map((item,i)=>{
            return(
            //   <img src={item.urls.small
            //   } alt="" />
              <Images img={item.urls.small} key={i}/>
            )
          })
        }
      </div>
      
       </div> 
    
  );
}

export default Commen; 
  
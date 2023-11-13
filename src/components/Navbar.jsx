import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { gloabldata } from '../contextApi/context';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {


  const { favirote } = useSelector((state) => state.fooditem)


  const {text,setText,setQuerry}=useContext(gloabldata)

const handlesearch=(text)=>{
  setQuerry(text)
  setText("find your recipe here")
}
 

  return (
    <>
      <div className="navbarRightsection">
        <div className="navbarLeftsection flexdivRowevenly">
        <h1>find your Ingrediants</h1>

          <input type="text" placeholder='find your recipe / Ingredients' value={text} onChange={(e)=>setText(e.target.value)}/>
          <button onClick={()=>handlesearch(text)}>search</button>
      
        </div>
        <Link to="favlist">favrote list ({favirote.length})</Link>
        <img src="https://images.unsplash.com/photo-1511909525232-61113c912358?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </>
  )
}

export default Navbar;

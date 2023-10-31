import React, { useContext } from 'react'
import {useDispatch} from "react-redux";
import { showdetailsitem } from '../redux/itemSlice';
import {useNavigate} from "react-router-dom"
import { gloabldata } from '../contextApi/context';

const Body = () => {

  const {listofingridients}=useContext(gloabldata)
  const dispatch=useDispatch()
  const navigate=useNavigate();
 

  const senddata=(ele)=>{
    dispatch(showdetailsitem(ele));
    navigate('/showdetails')
  }

// console.log(listofingridients.hits)

  return (
    <>
    {
      listofingridients.hits && listofingridients.hits.map((ele, i)=>{
        return <>

      <div className="recipeCard flexdivRowevenly" key={i}>
            <img src={ele.recipe.image} alt="" />
            <span>{ele.recipe.label}</span>
            <button onClick={()=>senddata(ele)}>Ingridients Details</button>

      </div>
        </>
      })
    }
    </>
  )
}

export default Body

import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { faviroteitem } from '../redux/itemSlice'
const Showdetails = () => {

  const { dataitem } = useSelector((state) => state.fooditem)
  const navigate = useNavigate()
  
  const dispatch=useDispatch()

  const faviroteitemFUnction=(ele)=>{
    dispatch(faviroteitem(ele))
    alert("added in your list")
    navigate("/fav")
  }



  return (
    <>
      <div className="foodmodalconatainer">
        <div className="itemdetaisUpperpart">
          <img onClick={() => navigate("/")} src="https://thumbs.dreamstime.com/b/cancel-button-sign-key-push-banner-180931198.jpg" alt="" />
        </div>
        <div className="itemdetaisLowerpart">
          <div className='detailsRightpannel'>

            <img src={dataitem.recipe.image} alt="" />
          </div>
          <div className="detailsLeftpannel">

          <div className='headerofshowdetails'>

            <span className='para1'>Recipe Name : {dataitem.recipe.label}</span>
                <img onClick={()=>faviroteitemFUnction(dataitem)} src="https://media.istockphoto.com/id/1128400054/vector/heart-symbol-of-love-and-valentines-day-flat-red-icon-isolated-on-white-background-vector.jpg?s=170667a&w=0&k=20&c=8deAnsb__1o_VgcWlbYDK8WioELAPHyguSpcl-PCJXc=" alt="" />
          </div>


            <p className='para2'> Ingredients</p>

            {dataitem.recipe.ingredients && dataitem.recipe.ingredients.map((item, i) => {
              return <>
                <Fragment key={i}>
                  <p className='para'><img src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png" alt="" /> {item.text}</p>
                </Fragment>
              </>
            })
            }


          </div>

        </div>
      </div>
    </>
  )
}

export default Showdetails

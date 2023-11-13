import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Favirote = () => {

    const { favirote } = useSelector((state) => state.fooditem)
    const navigate = useNavigate()
    console.log(favirote)

    return (
        <>
            <div className="foodmodalconatainer">
                <div className="itemdetaisUpperpart">
                    <img onClick={() => navigate("/")} src="https://thumbs.dreamstime.com/b/cancel-button-sign-key-push-banner-180931198.jpg" alt="" />
                </div>
                <div className="itemdetaisUpperpart1">
                    <h3>Fovorite list</h3>
                </div>
                <div className="favirtoteLowerpart">

                    {
                        favirote.length >0 ? <>
                        {
                        favirote && favirote.map((faviroteitem) => {
                            return <>
                                <div className="recipeCard flexdivRowevenly" >
                                    <img src={faviroteitem.recipe.image} alt="" />
                                    <span> {faviroteitem.recipe.label}</span>

                                </div>
                            </>
                        })
                    }
                        </>:<>
                            <h2 style={{marginTop:"5rem", color:"Red"}}>No item in your favroute list</h2>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default Favirote;

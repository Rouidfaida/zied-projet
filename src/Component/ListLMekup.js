import React from 'react'
import { useSelector } from 'react-redux'
import FoodCard from './FoodCard'


const ListLMekup = () => {
    const movie = useSelector(state => state.allmovie.movie)
    return (
        <div>
           {
          movie.map(el=><FoodCard mov={el}/>) 
               

           }
        </div>
    )
}

export default ListLMekup

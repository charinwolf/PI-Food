import React from 'react'
import { useDispatch } from 'react-redux';
import { filterDiet, filterName, filterScore } from '../../Redux/actions';


function Filter({ filterOrder}){
    const dispatch = useDispatch();
    
    function handleOrder(e){
        e.preventDefault();
        dispatch(filterName(e.target.value))
        filterOrder(e.target.value)
    }

    function handleScore(e){
        e.preventDefault();
        dispatch(filterScore(e.target.value))
        filterOrder(e.target.value)
    }
    
    function handleDiet(e){
        e.preventDefault();
        dispatch(filterDiet(e.target.value))
    }

     
    return (
        <div>
            <select onChange={(e)=> handleOrder(e)}>
                <option value = 'none' defaultValue >ORDER</option>
                <option value="AZ">A TO Z</option>
                <option value="ZA">Z TO A</option>
            </select> 

            <select onChange={(e)=> handleScore(e)}>
                <option value = 'none' defaultValue >SCORE</option>
                <option value="ASC">ASCENDANT</option>
                <option value="DES">DESCENDANT</option>
            </select>

            <select onChange={(e)=> handleDiet(e)}>
                <option value = 'none' defaultValue >DIETS</option>
                <option value="All">ALL</option>
                <option value="gluten free">GLUTEN FREE</option>
                <option value="dairy free">DAIRY FREE</option>
                <option value="paleolithic">PALEOLITHIC</option>
                <option value="ketogenic">KETOGENIC</option>
                <option value="lacto ovo vegetarian">LACTO OVO VEGETARIAN</option>
                <option value="vegan">VEGAN</option>
                <option value="pescatarian">PESCATARIAN</option>
                <option value="primal">PRIMAL</option>
                <option value="fodmap friendly">FODMAP FRIENDLY</option>
                <option value="whole 30">WHOLE 30</option>
            </select>
        </div>
    )
}

export default Filter;
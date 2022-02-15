import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeByName } from '../../Redux/actions';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';

function SearchBar(){
    const dispatch = useDispatch();
    let {name} = useParams();

    const searchRecipe = useSelector((state) => state.recipeName)

    useEffect(() => {
        dispatch(getRecipeByName(name))

    }, [dispatch, name])   
    
    return (
        <>
        <Navbar />
        <div>
            {searchRecipe && searchRecipe.map((e)=> {
                return (
                    <Card
                        key = {e.id}
                        id = {e.id}
                        name = {e.name}
                        image = {e.image}
                        spoonacularScore = {e.spoonacularScore}
                        diets = {e.diets}                
                    />
                )
            })}
        </div>
   </> 
    )
}

export default SearchBar;
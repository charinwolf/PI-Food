import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router";
import { getRecipeById } from '../../Redux/actions';
import styles from './Details.module.css'


function Detail(){
    let { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.recipeId);
    console.log(detail[0])

    useEffect(() => {
        dispatch(getRecipeById(id))
    },[dispatch, id]);

    
    return (
        <div className= {styles.container}>
             {detail &&(
            <div>
               
            <div className = {styles.title}>Name: {detail[0].name}</div>
            <img className = {styles.img} src={detail[0].image} alt="" />
            <div className = {styles.score}>Score: {detail[0].spoonacularScore} </div>
            <div className = {styles.diettype}>Diet: {detail[0].diets?.map((e) => {
                    return (
                        <h5> {e.name ? e.name: e} </h5> 
                    )
                })} </div>
            <div className= {styles.summary}>Summary: {detail[0].summary} </div>
            <div className= {styles.healthy}>Health Score: {detail[0].healthScore} </div>
            <div className= {styles.instructions}>Summary: {detail[0].instructions} </div>
            
            </div>
            )}
        </div>
    )
}

export default Detail;
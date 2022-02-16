import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router";
import { getRecipeById } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './Details.module.css'


function Detail(){
    let { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.recipeId);
    console.log(detail[0])

    useEffect(() => {
        dispatch(getRecipeById(id))
    },[dispatch, id]);

    const diets = detail[0] ? detail[0].diets : detail.diets;
    
    return (
        <div className= {styles.page}>
        <Navbar />
             {detail &&(
            <div className = {styles.container}>
               
            <div className = {styles.title}>{detail[0] ? detail[0].name : detail.name}</div>
            <img className = {styles.img} src={detail[0] ? detail[0].image : detail.image} alt="" />
            <div className = {styles.score}>⛧⛧{detail[0] ? detail[0].spoonacularScore : detail.spoonacularScore}⛧⛧</div>
            <div className= {styles.healthy}>Health Score: {detail[0] ? detail[0].healthScore : detail.healthScore} </div>
            <div className = {styles.diettype}>{diets?.map((e) => {
                    return (
                        <h5 key={e}> {e.name ? e.name: e} </h5> 
                    )
                })} </div>
                <h2 className = {styles.h2}>Summary</h2>
            <div className= {styles.summary}> {detail[0] ?  detail[0].summary.replace(/<[^>]*>?/g, '') : detail.summary} </div>
                <h2 className = {styles.h2}>Instructions</h2>
            <div className= {styles.instructions}> {detail[0] ? detail[0].instructions : detail.instructions} </div>
            
            
            </div>
            )}
             <Link to= '/home'>
                    <button className = {styles.btnHome}>Go Home...</button>
                </Link>
        </div>
    )
}

export default Detail;
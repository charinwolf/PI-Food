import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import imgDefault from '../../utils/img_default.jpg'

function Card(data){
    //console.log(data)
    return (
        <div className = {styles.page}>
        <div className= {styles.container}>
            <div>
                <div className = {styles.divTitle}>
                <div className = {styles.title}>{data.name}</div>
                <div className = {styles.score}>⛧⛧{data.spoonacularScore}⛧⛧</div>
                </div>
            <Link to = {`/details/${data.id}`}>
                <button className = {styles.btninfo}>More Info!</button>
            </Link>
                <img className = {styles.img} src={data.image || imgDefault} alt="" />
                
                <div className = {styles.diettype}>{data.diets?.map((e) => {
        
                    return (
                        
                        <p className = {styles.p} key={e}> {e.name ? e.name : e} </p>
                        
                    )
                   
                })} </div> 
                
            </div>
        </div>
        </div>
        
    )   
}
export default Card;


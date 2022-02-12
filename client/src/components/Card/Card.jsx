import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

function Card(data){
    //console.log(data)
    return (
        <div className= {styles.conatiner}>
            <div>
                <div className = {styles.title}>Name: {data.name}</div>
                <img className = {styles.img} src={data.image} alt="" />
                <div className = {styles.score}>Score: {data.spoonacularScore} </div>
                <div className = {styles.diettype}>Diet: {data.diets?.map((e) => {
                    return (
                        <h5 key={e}> {e.name ? e.name : e} </h5>
                    )
                })} </div>                
            </div>
            <Link to = {`/details/${data.id}`}>
                <button className = {styles.btninfo}>More Info</button>
            </Link>
        </div>
        
    )   
}
export default Card;
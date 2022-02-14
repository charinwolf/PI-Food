import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getDiet, postRecipe } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import style from '../RecipeCreate/RecipeCreate.module.css';


function NewRecipe(){
    const dispatch = useDispatch()
    
    //llamo a las dietas en el store
    const dietsState = useSelector((state => state.diet))
    
    //Creo un estado interno para rellenar el form 
    const [form, setForm] =  useState({

        name: "",
        summary: "",
        spoonacularScore: 0,
        healthScore: 0,
        instructions: "",
        image: "",
        diets: []
    })
    useEffect(() => {
        dispatch(getDiet())
    }, [dispatch]);

    //Handlers (manejador de eventos)
    // evitamos recargar la página al activarse un evento(click o submit)
    const handleSubmit = (e) => {
        e.preventDefault();
    
    // constante para llenar el formulario
        const recipe = {

        name: form.name,
        summary: form.summary,
        spoonacularScore: form.spoonacularScore,
        healthScore: form.healthScore,
        instructions: form.instructions,
        image: form.image,
        diets: form.diets
    } 

    //validadores de errores
    // if(!recipe.name) {
    //     alert('A name is required!')
    //     return
    // }
    // if(!recipe.summary){
    //     alert('A summary is reqquired')
    //     return
    // }
    // if(!recipe.instructions){
    //     alert('Instructiosn are required')
    //     return 
    // }
    // if(recipe.spoonacularScore > 100 || recipe.spoonacularScore < 0){
    //     alert('The score must be between 0 and 100')
    //     return
    // }
    
    // Despacho la nueva receta
    dispatch(postRecipe(recipe));
    e.target.reset();

    //Seteo el estado el edo interno en vacio nuevamente
    setForm({
        name: "",
        summary: "",
        spoonacularScore: 0,
        healthScore: 0,
        instructions: "",
        image: "",
        diets: []
    });

    //finalizamos con un alert
    alert('New recipe ceated successfully!')
}

    function handleCheck(e){
        if (e.target.checked === true){
            setForm({
                ...form,
                diets: [...form.diets, e.target.name],
            })
        }else {
            setForm({
                ...form,
                diets: form.diets.filter((d) => d !== e.target.name )
            })
        }

    }

    return (
        <div>
            <div className = {style.container}>
                <h1 className = {style.h1}>Create Recipe!</h1>
                <Link to= '/home'>
                    <button className = {style.btnHome}>Home</button>
                </Link>

                <form className = {style.form} 
                onChange = {(e) => handleCheck(e)} 
                onSubmit = {(e) => handleSubmit(e)}>

                    <div className = {style.divForm}>
                        <label>Name?</label>
                        <input type="text"
                        name='name'
                        placeholder="Recipe's Name"
                        defaultValue={form.name}
                        />
                    </div>

                    <div className = {style.divForm}>
                        <label>Summary?</label>
                        <textarea type='text' 
                        name='summary'
                        placeholder='Summary!'
                        defaultValue={form.summary}
                        />
                    </div>
                    <div className = {style.divForm}>
                        <label>Instructions</label>
                        <textarea type="text"
                        name='Instructions' 
                        placeholder='How to do it!'
                        defaultValue={form.instructions} 
                        />
                    </div>

                    <div className = {style.divForm}>
                        <label>Score!</label>
                        <input type="number" 
                        name="Score"
                        placeholder='Score'
                        defaultValue={form.spoonacularScore}
                         />
                    </div>

                    <div className = {style.divForm}>
                        <label>Health Score</label>
                        <input type="number" 
                        name="Health"
                        placeholder='Health Score'
                        defaultValue={form.healthScore}
                        />
                    </div>

                    <h4>Diets</h4>
                    {dietsState && dietsState.map((d) => {
                        return(
                            <div>
                                <label>{d.name}</label>
                                <input type="checkbox"
                                name={d.name} />
                            </div>
                        )
                    })
                    }
                    <div>
                        <button className = {style.formBtn} type = 'submit'>Crear!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewRecipe
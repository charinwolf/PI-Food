import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDiet, postRecipe } from '../../Redux/actions';
import styles from '../RecipeCreate/RecipeCreate.module.css';
import Navbar from '../Navbar/Navbar';

function RecipeCreate(){
    
 const dispatch = useDispatch();

 // Se crea el edo interno para llenar el formulario
 const [form, setForm] = useState({
     name: '',
     summary: '',
     spoonacularScore: '',
     healthScore: '',
     instructions: '',
     image: '',
     diets: []
 })

 //Manejadores de Eventos
 //manejador de eventos de los inputs
 function handleChange(e) {
     setForm({
         ...form,
         [e.target.name]: e.target.value
     })
 }

 //manejaor de eventos de los checkbox
 function handleCheck(e) {
     if (e.target.checked) {
         setForm({
             ...form,
             diets: [...form.diets, e.target.value]
         })
     }
 }

 //manejador deeventos de envio del formulario
 function handleSubmit(e) {
     e.preventDefault();

//Validador de campos
     if (!form.name || !form.summary || form.spoonacularScore < 1 || form.healthScore < 1 || !form.instructions || !form.diets) {
        alert("Debes llenar todos los campos para crear una nueva receta")
        return
    }

    //despachamos a postRecipe el formulario lleno 
     dispatch(postRecipe(form))
     setForm({      //seteamos todo en blanco nuevamente
         name: '',
         summary: '',
         spoonacularScore: '',
         healthScore: '',
         instructions: '',
         image: '',
         diets: []
     })
     alert(`${form.name} Creada!`)
 }

 useEffect(() => { 
     dispatch(getDiet()) 
    }, [dispatch]);

 return (
     <div  className = {styles.container}>
         <Navbar />
         
         <div className = {styles.name}>New Recipe!</div>
         
         <form  onSubmit={(e) => handleSubmit(e)} className = {styles.form}>
             
             <div className = {styles.div} >
                 
                 <label className = {styles.label}>Name</label>
                 <input 
                     type='text'
                     value={form.name}
                     name='name'
                     onChange={(e) => handleChange(e)}
                 />

             </div>
             <div className = {styles.div}>
                 <label className = {styles.label}>Score</label>
                 <input
                     type='number'
                     value={form.spoonacularScore}
                     name='spoonacularScore'
                     onChange={(e) => handleChange(e)} />
             </div>
             <div className = {styles.div}>
                 <label className = {styles.label}>Healthy Level</label>
                 <input
                     type='number'
                     value={form.healthScore}
                     name='healthScore'
                     onChange={(e) => handleChange(e)} />
             </div>
             <div className = {styles.div}>
                 <label className = {styles.label}>Image</label>
                 <input
                     type='text'
                     value={form.image}
                     name='image'
                     onChange={(e) => handleChange(e)} />
             </div>
             <div className = {styles.div}>
                 <label className = {styles.label}>Summary</label>
                 <textarea className = {styles.textarea}
                     type='text'
                     value={form.summary}
                     name='summary'
                     onChange={(e) => handleChange(e)} />

             </div>
             <div className = {styles.div}>
                 <label className = {styles.label}>Instructions</label>
                 <textarea className = {styles.textarea}
                     type='text'
                     value={form.instructions}
                     name='instructions'
                     onChange={(e) => handleChange(e)} />
             </div>
             <div className = {styles.diet}>
                 <label className = {styles.label}>Diet type</label>
                 <label ><input
                     type='checkbox'
                     name='Gluten Free'
                     value='gluten free'
                     onChange={(e) => handleCheck(e)}
                 />Gluten Free</label>
                 <label ><input
                     type='checkbox'
                     name='Dairy Free'
                     value='dairy free'
                     onChange={(e) => handleCheck(e)}
                 />Dairy Free</label>
                 <label ><input
                     type='checkbox'
                     name='Lacto Ovo Vegetarian'
                     value='lacto ovo vegetarian'
                     onChange={(e) => handleCheck(e)}
                 /> Lacto Ovo V</label>
                 <label ><input
                     type='checkbox'
                     name='Vegan'
                     value='vegan'
                     onChange={(e) => handleCheck(e)}
                 />Vegan</label>
                 <label ><input
                     type='checkbox'
                     name='Paleolithic'
                     value='paleolithic'
                     onChange={(e) => handleCheck(e)}
                 />Paleolithic</label>
                 <label ><input
                     type='checkbox'
                     name='Primal'
                     value='primal'
                     onChange={(e) => handleCheck(e)}
                 />Primal</label>
                 <label ><input
                     type='checkbox'
                     name='Pescatarian'
                     value='pescatarian'
                     onChange={(e) => handleCheck(e)}
                 />Pescatarian</label>
                 <label ><input
                     type='checkbox'
                     name='Fodmap Friendly'
                     value='fodmap friendly'
                     onChange={(e) => handleCheck(e)}
                 />Fodmap Friendly</label>
                 <label ><input
                     type='checkbox'
                     name='Whole 30'
                     value='whole 30'
                     onChange={(e) => handleCheck(e)}
                 />Whole 30</label>
             </div>
             <button type='submit' className = {styles.btnnew}>Create Recipe</button>
         </form>
         
     </div>
     
 )
}

export default RecipeCreate
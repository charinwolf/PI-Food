import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import  styles  from '../Navbar/Navbar.module.css'



function Navbar(){
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setName('');    
    }

    return (
        <div>
            <nav className = {styles.navbar}>
                <Link className = {styles.linkhover} to = '/home'>
                    <h2>Your Recipe!</h2>
                </Link>
                <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
                <form onSubmit = {(e) => handleSubmit(e)}>
                    
                    <input 
                    type="text" value = {name} 
                    placeholder = 'Search Recipe' 
                    onChange = {(e)=> setName(e.target.value)}/>

                <Link to = {`/recipes/${name}`}>
                    <button type='submit' className = {styles.searchButton}>Search</button>
                    <i class="fa fa-search"></i>
                </Link>

                </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
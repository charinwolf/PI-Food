import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDiet, getRecipes } from '../../Redux/actions';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import Paged from '../Paged/Paged';
import styles from '../Home/Home.module.css'
import Filter from '../Filter/Filter';


function Home() {
    const dispatch = useDispatch();
    const totalRecipes = useSelector((state) => state.recipes);

    //PAGINADO
    const [actualRecipe, setActualpage] = useState(1);
    const [recipesPerPage] = useState(9);

    const indexOfLastRecipe = actualRecipe * recipesPerPage;
    const indexOfFirstrecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = totalRecipes.slice(indexOfFirstrecipe, indexOfLastRecipe)

    function paginate (e, numberPage){
        setActualpage(numberPage)
    }

    //FILTRADO
    const [filter, setFilter] = useState("")
    console.log(filter)

    function filterOrder(ordenado){
        setFilter(ordenado)
    }

    useEffect(() => {
        dispatch(getRecipes());
        dispatch(getDiet())
    }, [dispatch])

    return (
        <div>
        <Navbar />
        <Filter filterOrder = {filterOrder} />
            <Paged
                recipesPerPage={recipesPerPage}
                totalRecipes={totalRecipes}
                paginate={paginate}
            />
        <div className={styles.recipesCard}>
            {currentRecipes && currentRecipes.map((e) => {
                return (
                    <Card
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        image={e.image}
                        spoonacularScore={e.spoonacularScore}
                        diets={e.diets}
                    />
                )
            })}
        </div>
    </div>
    )
}

export default Home;
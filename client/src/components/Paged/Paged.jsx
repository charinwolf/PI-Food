import React from 'react'
import styles from '../Paged/Paged.module.css';

function Paged({recipesPerPage, totalRecipes, paginate}){
	const numberPage = [];

	for (let i = 1; i < Math.ceil(totalRecipes.length / recipesPerPage); i++){
		numberPage.push(i)
	}
	return (
		<nav className={styles.pag}> {numberPage.map((num) => (
			<div key={num} className={styles.item}>
			  <button onClick={(e) => paginate(e, num)}>{num}</button>
		   </div>))}
		  </nav>
	)
}
export default Paged;
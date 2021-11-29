import React from "react";
import "./Categories.css"

const Categories = ({categoriesList, chooseCategory})=>{
    return(
    <div className="categories">
    {categoriesList ? categoriesList.map(category=>
<button className="category" key={category.toString()} value={category} onClick={chooseCategory}>{category}</button>) : null}
</div>
)}

export default Categories
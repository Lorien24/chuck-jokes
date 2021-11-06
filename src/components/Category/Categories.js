import React from "react";

const Categories = ({categoriesList, chooseCategory})=>{
    return(
    <div className="categories">
    {categoriesList ? categoriesList.map(category=>
<button key={category.toString()} value={category} onClick={chooseCategory}>{category}</button>) : null}
</div>
)}

export default Categories
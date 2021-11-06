import React from "react";
import Categories from "../Category/Categories";
import Input from "../Input/Input";

const Main=({input, handleSearch, chooseCategory, handleJoke, categoriesList, showCategories, handleRadio})=>{
    return(
    <div>
        <form onSubmit={handleJoke}>
            <div>
                <input className="radio_btn" type="radio" onClick={handleRadio} id="random"/>
                <label htmlFor="random">Random</label>
            </div>
            <div>
                <input className="radio_btn" type="radio" onClick={handleRadio} id="category"/>
                <label htmlFor="random">From caterogies</label>
            </div>
            <div>
                {showCategories ? <Categories categoriesList={categoriesList} chooseCategory={chooseCategory}/> : null}
                <input className="radio_btn" type="radio" onClick={handleRadio} id="search"/>
                <label htmlFor="search">Search</label>
            </div>
            <div>
                {input ? <Input handleSearch={handleSearch}/> : null}
                <button type="submit">Get a joke</button>
            </div>
        </form>
    </div>
)}

export default Main
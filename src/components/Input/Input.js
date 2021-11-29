import React from "react";
import "./Input.css";

const Input= ({handleSearch})=>{
    return(
    <div>
    <input className="input_search" type="text" placeholder="Search for..." onChange={handleSearch} />
</div>
)}

export default Input
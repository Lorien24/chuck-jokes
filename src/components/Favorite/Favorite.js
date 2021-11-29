import React from "react";
import message from "../../assets/message.png";
import like from "../../assets/like.png";
import heart from "../../assets/heart.png";
import "./Favorite.css"

const Favorites=({handleDate, storage, getLiked})=>{
    return(
        <div>
            <h3 className="favorite_title">Favorite jokes</h3>
            {storage && storage[0]? storage.map(item =>
            <div className="favorites_container" key={item.id}>
                <div className="favorite_block">
                    <img className="favorite_message" src={message} alt="" />
                    <img  className="favorite_heart" src={storage.find(c=>c.id === item.id) ? heart : like} id={item.id} onClick={getLiked} alt="" />
                    <p className="favorite_id">ID: <a href={`https://api.chucknorris.io/jokes/${item.id}`}>{item.id}</a></p>
                    <p className="favorite_text">{item.value}</p>
                </div>
                <div className="favorite_footer">
                    <p className="favorite_update">Last update: {handleDate(item.updated_at)} hours ago</p>
                    <p className="favorite_category">{item.categories[0] ? item.categories[0] : null}</p>
                </div>
            </div> 
            ) : <p  className="favorite_no_joke">No favorite jokes here</p>}
        </div>
    )
}

export default Favorites
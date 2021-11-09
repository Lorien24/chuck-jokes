import React from "react";
import message from "../../assets/message.png";
import like from "../../assets/like.png";
import heart from "../../assets/heart.png";

const Favorites=({handleDate, storage, getLiked})=>{
    return(
        <div>
            <h3>Favorite jokes</h3>
            {storage && storage[0]? storage.map(item =>
            <div className="favorites_container" key={item.id}>
                <div>
                    <img src={message} alt="" />
                    <img src={storage.find(c=>c.id === item.id) ? heart : like} id={item.id} onClick={getLiked} alt="" />
                    <p>ID: <a href={`https://api.chucknorris.io/jokes/${item.id}`}>{item.id}</a></p>
                    <p>{item.value}</p>
                </div>
                <div>
                    <p>Last update: {handleDate(item.updated_at)} hours ago</p>
                    <p>{item.categories[0] ? item.categories[0] : null}</p>
                </div>
            </div> 
            ) : <p>No favorite jokes here</p>}
        </div>
    )
}

export default Favorites
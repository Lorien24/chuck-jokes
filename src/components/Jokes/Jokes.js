import React from "react";
import message from "../../assets/message.png";
// import like from "../../assets/like.png";
// import heart from "../../assets/heart.png";

const Jokes = ({ jokes, isCliked,  handleDate}) => {
    return(
    <div>
    {jokes.value === undefined && isCliked ? jokes.map(joke => 
        <div className="joke_container" key={joke.id} >
          <div>
            <img className="message" src={message} alt="message" />
            <p>
              ID:
              <a href={`https://api.chucknorris.io/jokes/${joke.id}`}>
                {joke.id}
              </a>
            </p>
            <p>{joke.value}</p>
          </div>
          <div>
            <p>Last update: {handleDate(joke.updated_at)} hours ago</p>
            {joke.categories[0] ? <p>{joke.categories[0]} </p> : null}
          </div>
        </div>
      ) : isCliked ? 
      <div>
        <div>
          <img className="message" src={message} alt="message" />
          <p>
            ID:
            <a href={`https://api.chucknorris.io/jokes/${jokes.id}`}>
              {jokes.id}
            </a>
          </p>
          <p>{jokes.value}</p>
        </div>
        <div>
          <p>Last update: {handleDate(jokes.updated_at)} hours ago</p>
          {jokes.categories[0] ? <p>{jokes.categories[0]} </p> : null}
        </div>
      </div>
     : null}
  </div>
)};

export default Jokes;

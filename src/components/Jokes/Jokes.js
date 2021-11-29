import React from "react";
import message from "../../assets/message.png";
import like from "../../assets/like.png";
import heart from "../../assets/heart.png";
import "./Jokes.css";

const Jokes = ({ jokes, isCliked, handleDate, storage, getLiked }) => {
  return (
    <div>
      {jokes.value === undefined && isCliked ? (
        jokes.map((joke) => (
          <div className="joke" key={joke.id}>
            <div className="joke_block">
              <img className="message" src={message} alt="message" />
              <img
                className="like"
                src={
                  storage && storage.find((j) => j.id === joke.id)
                    ? heart
                    : like
                }
                alt="like"
                id={joke.id}
                onClick={getLiked}
              />
              <p className="joke_id">
                ID:
                <a href={`https://api.chucknorris.io/jokes/${joke.id}`}>
                  {joke.id}
                </a>
              </p>
              <p className="joke_text">{joke.value}</p>
            </div>
            <div className="joke_footer">
              <p className="joke_update">
                Last update: {handleDate(joke.updated_at)} hours ago
              </p>
              {joke.categories[0] ? (
                <p className="joke_category">{joke.categories[0]} </p>
              ) : null}
            </div>
          </div>
        ))
      ) : isCliked ? (
        <div className="joke">
          <div className="joke_block">
            <img className="message" src={message} alt="message" />
            <img
              className="like"
              src={
                storage && storage.find((j) => j.id === jokes.id) ? heart : like
              }
              alt="like"
              id={jokes.id}
              onClick={getLiked}
            />
            <p className="joke_id">
              ID:
              <a href={`https://api.chucknorris.io/jokes/${jokes.id}`}>
                {jokes.id}
              </a>
            </p>
            <p className="joke_text">{jokes.value}</p>
          </div>
          <div className="joke_footer">
            <p className="joke_update">
              Last update: {handleDate(jokes.updated_at)} hours ago
            </p>
            {jokes.categories[0] ? (
              <p className="joke_category">{jokes.categories[0]} </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Jokes;

import React, {useState, useEffect} from "react";
import axios from 'axios';
import Jokes from "./components/Jokes/Jokes";
import Main from "./components/Main/Main";
import Favorites from "./components/Favorite/Favorite";

function App() {

  const [jokes, setJokes] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [random, setRandom] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const [input, setInput] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [liked, setLiked] = useState([])

  const categoriesApi = 'https://api.chucknorris.io/jokes/categories';

const storage = JSON.parse(localStorage.getItem('liked'))

useEffect(()=>{
  axios.get(categoriesApi)
  .then(response=>setCategoriesList(response.data))
})

  const handleJoke =(event)=>{
    const showCategoryApi = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const searchApi = `https://api.chucknorris.io/jokes/search?query=${search}`;
    const randomApi = 'https://api.chucknorris.io/jokes/random';

    let url = showCategories ? showCategoryApi : input ? searchApi : random ? randomApi : null;

    event.preventDefault()
    if(random || (showCategories && category) || (input && search)){
      axios.get(url)
      .then((response)=>{
        setJokes(input ? response.data.result : response.data)
        setIsClicked(true)
      })
    }
  }

  const handleDate =(date)=>{
    return Math.round((Date.now() - Date.parse(date)) / 3600000)

    // (1000 * 60 * 60 * 24)
  }

  const getLiked=(event)=>{
    let array=[...liked]

    // let storageArray = storage ? storage.findIndex(a => a.id === event.target.id) : array.findIndex(b=> b.id === b.target.id)
    // let favoriteList = jokes[1] ? jokes.findIndex(c=>c.id === event.target.id) : null

    let favoriteList = jokes[1] ? jokes.findIndex(j => j.id === event.target.id) : null;
    let storageArray = storage ? storage.findIndex(a => a.id === event.target.id) : 
                                 array.findIndex(b => b.id === event.target.id)

                                 if(storageArray !== -1) {
                                  array = storage 
                                  array.splice(storageArray, 1);
                                  setLiked(array)
                                  localStorage.setItem('liked', JSON.stringify(array))
                                }
    else {
      array = storage ? storage : liked
      localStorage.setItem('liked', 
        JSON.stringify([...array, jokes[1] ? jokes.slice(favoriteList, favoriteList + 1)[0] : jokes]))
        setLiked([...array, jokes[1] ? jokes.slice(favoriteList, favoriteList + 1)[0] : jokes])
  }  
  }

  const chooseCategory =(event)=>{
    event.preventDefault()
    setCategory(event.target.value)
  }

  const handleRadio = (event)=>{
    if(event.target.id ==='random'){
      setInput(false)
      setShowCategories(false)
      setRandom(true)
    }
    else if(event.target.id ==='category'){
      setInput(false)
      setShowCategories(true)
      setRandom(false)
    }
    else if(event.target.id ==='search'){
      setInput(true)
      setShowCategories(false)
      setRandom(false)
    }
  }
  const handleSearch =(event)=>{
    setSearch(event.target.value)
  }

  return (
    <>
<div className="container">
<Main handleJoke={handleJoke} handleSearch ={handleSearch} input={input} categoriesList={categoriesList} showCategories={showCategories} chooseCategory={chooseCategory} handleRadio={handleRadio} />
<Jokes jokes={jokes} handleDate={handleDate} isCliked={isClicked} search={search} getLiked={getLiked} storage={storage}/>
</div>
<div>
  <Favorites getLiked={getLiked} handleDate={handleDate} storage={storage}/>
</div>
</>
  )
}

export default App;

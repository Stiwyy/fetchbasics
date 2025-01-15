import {useEffect, useState} from "react";

export default function App(){
    const [categrories, setCategories] = useState([]);
    const [joke, setJoke] = useState("");

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setCategories(json)
            })
            .catch(error => console.error(error))
    },  []);

    const getJoke = async (category) =>{
        await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setJoke(json)
            })
            .catch(error => console.error(error));
    }
    return(
        <>
            <section>
                <header>
                    <h3>Chuck Norris Jokes</h3>
                    <img src="https://freepngimg.com/thumb/chuck_norris/97536-photos-cowboy-chuck-norris-download-hd.png"
                         alt="chuck norris" width="100"/>
                </header>
                <div>
                    {categrories.map( (item) =>{
                        return(
                            <button
                                style={{ margin: 1, backgroundColor: 'blue', color: 'white'}}
                                key={item} onClick={() => getJoke(item)}>{item}
                            </button>
                        )
                    })}
                    <p>{joke.value}</p>
                </div>
            </section>
        </>
    )
}
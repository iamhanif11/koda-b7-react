import { useState, useEffect } from "react"
import { Link } from "react-router"
import slugify from "slugify"

function ListChara (){
    const [characters, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        const fetchChara = async () => {
            try{
                const response = await fetch ("https://rickandmortyapi.com/api/character");
                const {results} = await response.json()
                setCharacter(results)  
            } catch (error) {
                console.log(error)
            } finally {setLoading(false)}
        };
        fetchChara();
    }, []);

    if(loading) return <h2>Loading...</h2>

    return(
        <article className="container p-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {characters.map((char) => (
                    <Link key={char.id} to={`/characters/${char.id}/${slugify(char.name, {lower: true})}`}
                    className=" border bg-white hover:bg-gray-200 rounded-lg p-4">
                        <img src={char.image} alt={char.name} />
                        <p className="text-lg font-medium text-center">{char.name}</p>
                    </Link>
                ))}
            </div>

        </article>
    )
}

export default ListChara
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function DetailChara(){
    const {id} = useParams()
    const [char, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)
console.log('first')
    useEffect (() => {
        const fetchDetail = async () => {
            try {
                const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json()
                console.log(data)
                setCharacter(data)
            } catch (error) {
                console.log(error)
            } finally {setLoading(false)}
        };
        fetchDetail();

    }, [id])
    if(loading) return <h2>Loading...</h2>
    console.log(char)

    return (
        <article>
            <div className="border bg-white flex p-16 rounded-lg gap-16 justify-center items-center">
                <div>
                <img src={char.image} alt={char.name} />
                </div>

                <div>
                <h1>Name: {char.name}</h1>
                <p>Status: {char.status}</p>
                <p>Species: {char.species}</p>
                <p>Gender: {char.gender}</p>
                </div>
            </div>
            
        </article>
    )
}

export default DetailChara
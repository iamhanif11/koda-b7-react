import {useState, useEffect } from "react";
import '../components/GeneratePoke'


function GetDataPoke(){
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAllPoke = async () => {
            try{
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
                if(!response.ok) throw new Error(`${response.status}; ${response.statusText}`)
                const {results} = await response.json();
                
                const pokemonData = await Promise.all(
                    results.map(async (item) => {
                        const res = await fetch(item.url)
                        const detail = await res.json()
                        return{
                            name: item.name,
                            image: detail.sprites.front_default,
                            types: detail.types.map((t) => t.type.name),
                        }
                    })
                )
                setPokemon(pokemonData)
                setLoading(false)
            }catch (error) {
                console.log(`Status: ${error}`)
                setLoading(false)
            }
        }
        fetchAllPoke();


}, [])
if (loading) return <p>Loading...</p>

return (
    <div className="grid grid-cols-4 gap-8">
        {pokemon.map((p) => (
            <div className="flex flex-col justify-center items-center gap-2 border-2 p-4 rounded-2xl" key = {p.name}>
                <h3 className="text-4xl font-medium">{p.name}</h3>
                <img src={p.image} alt={p.name} />
                <p>Types: {p.types.join(", ")}</p>
            </div>
        ))}
    </div>
)
}

export default GetDataPoke
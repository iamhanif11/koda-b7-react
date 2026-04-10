import useFetch from "../hooks/useFetch"

function FetchTest(){
    const {data, loading, error} = useFetch("https://rickandmortyapi.com/api/character")

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error: {error}</p>

    return (
       <div>
            <h2>Daftar Karakter Rick and Morty</h2>
            
        
            {data?.results?.map((char) => (
                <div key={char.id} >
                    <img src={char.image} alt={char.name} width="50" />
                    <p>{char.name} - {char.status}</p> 
                </div>
            ))}
        </div>
    )
}

export default FetchTest
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";
import { Card } from "./components/Card";
import { Title } from "./components/Title";
import { Search } from "./components/Search";
import { useDebounce } from "./hooks/useDebounce";
import { randomColor } from "./Colors";


export const Pokemon = () => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=100";
    const { loading, error, apiData } = useFetch(url);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 1000);
    const searchInput = Array.isArray(apiData)
        ? apiData.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
        : [];

    if (loading) return <div className="flex justify-center items-center h-screen"><h1 className=" text-6xl font-bold p-10">Loading...</h1></div>;
    if (error) return <h1 className="text-center text-5xl font-bold p-10">{error}</h1>;
    return (
        <>

            {!loading && <Title />}
            {!loading &&  <Search search={search} setSearch={setSearch} />}
            {searchInput.length > 0 ? (<div className="flex flex-wrap gap-10 container justify-center items-center">
                {searchInput.map((pokemon, index) => (<div key={index}>
                    <Card key={index} pokemon={pokemon} randomColor={randomColor()} /></div>))} </div>) : (<h1 className="text-center text-5xl font-bold p-10">No Pokemon Found.</h1>)}
        </>
    )
}
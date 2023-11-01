import PokemonCard from "./PokemonCard"

const PokemonList = ({pokemons}) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] justify-center max-w-[1200px] mx-auto gap-6 py-10">
        {
            pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>)
        }
    </section>
  )
}
export default PokemonList
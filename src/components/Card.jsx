import * as motion from "motion/react-client"
export const Card = ({ pokemon, randomColor }) => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }} className={`max-w-sm text-gray-900  border ${randomColor} border-gray-500 shadow-purple-400 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 w-60 h-90`}>
            <div className="flex justify-center p-1">
                <figure className="rounded-full h-40 w-40 p-1 bg-purple-400 ">
                    <img loading = "lazy"
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                        className="w-full h-35 transform hover:scale-105 transition-transform duration-300 "
                    />
                </figure>
            </div>
            <div className="p-2">
                <h2 className="text-center text-2xl font-bold mb-1" >{pokemon.name}</h2>
                <div className="flex justify-center">
                <div className="text-center text-md font-bold bg-green-400 rounded-2xl w-30">{pokemon.types.map((type)=> type.type.name).join(", ")}</div></div>
                <div className="flex justify-between text-sm">
                    <span className="p-2 font-bold">Height: <span className="text-purple-900">{pokemon.height}</span></span>
                    <span className="p-2 font-bold">Weight: <span className="text-purple-900">{pokemon.weight}</span></span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="p-2 font-bold">Speed: <span className="text-purple-900">{pokemon.stats[5].base_stat}</span> </span>
                   <span className="p-2 font-bold">Defense: <span className="text-purple-900">{pokemon.stats[2].base_stat}</span> </span>
                </div>
                <div className="flex justify-between items-center p-2 px-2 text-sm font-bold">
                    <span>Ability : {pokemon.abilities.map((ability, index) => ability.ability.name).join(", ")} </span>
                </div>


            </div>
        </motion.div>
    );
};

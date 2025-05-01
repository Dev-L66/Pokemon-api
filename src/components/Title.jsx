import { motion } from "framer-motion";

export const Title = () => {
  const text = "Let's Catch Pokémon!".split("");

  return (
    <div className="text-center text-5xl font-bold p-10">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: i * 0.1,
          }}
          key={i}
        >
          {el}
        </motion.span>
      ))}
    </div>
  );
}


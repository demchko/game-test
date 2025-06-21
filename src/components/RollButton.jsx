import { motion } from 'framer-motion';
export const RollButton = ({ rollDice, isRolling, rollsLeft }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-8 max-w-xl mx-auto"
        >
            <motion.button
                onClick={rollDice}
                disabled={isRolling || rollsLeft === 0}
                whileHover={{ scale: rollsLeft > 0 ? 1.05 : 1 }}
                whileTap={{ scale: rollsLeft > 0 ? 0.95 : 1 }}
                className={`bg-[#6DBF1D] w-full px-8 py-2 md:py-4 rounded-xl font-bold text-white text-xl transition-all duration-300 ${rollsLeft === 0
                    ? 'bg-gray-600 cursor-not-allowed opacity-50'
                    : isRolling
                        ? 'cursor-wait'
                        : 'shadow-lg hover:shadow-xl'
                    }`}
            >
                {isRolling ? 'Rolling' : rollsLeft === 0 ? 'No rolls' : 'Roll'}
            </motion.button>
        </motion.div>

    )
}
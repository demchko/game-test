import { motion } from 'framer-motion';

export const MainCenterDice = ({ col, row, isRolling, imgSrc }) => {
    return (
        <div
            // key={index}
            className="aspect-square flex items-center justify-center col-span-2 row-span-2"
            style={{ gridColumnStart: col + 1, gridRowStart: row + 1 }}
        >
            <motion.div
                animate={{
                    rotateX: isRolling ? [0, 360, 720] : 0,
                    rotateY: isRolling ? [0, 360, 720] : 0,
                    scale: isRolling ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full rounded-xl flex items-center justify-center"
            >
                <img
                    src={imgSrc}
                    className="w-20 h-20"
                />
            </motion.div>
        </div>
    )
}
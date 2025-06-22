import { motion } from 'framer-motion';

export const RewardPopup = ({ currentReward }) => {
    console.log(currentReward);

    const getRewardTypeColor = (type) => {
        const colors = {
            'coin': 'from-yellow-400 via-orange-500 to-red-500',
            'box': 'from-green-400 via-emerald-500 to-teal-600',
            'resource': 'from-purple-400 via-violet-500 to-indigo-600',
            'gem': 'from-blue-400 via-cyan-500 to-sky-600',
            'default': 'from-blue-500 to-purple-600'
        };
        return colors[type?.toLowerCase()] || colors.default;
    };

    const getRewardIcon = (type) => {
        const icons = {
            'coin': '💎',
            'box': '🎁',
            'resource': '⭐',
            'gem': '⚡',
            'default': '🎉'
        };
        return icons[type?.toLowerCase()] || icons.default;
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, y: -100, scale: 0.5, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: 100, scale: 0.5, rotateX: 90 }}
                transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                    duration: 0.6
                }}
                className="relative max-w-md w-full"
            >
                <div className={`absolute inset-0 bg-gradient-to-r ${getRewardTypeColor(currentReward?.type)} rounded-3xl blur-xl opacity-60 scale-110`} />

                <div className={`relative bg-gradient-to-br ${getRewardTypeColor(currentReward?.type)} text-white rounded-3xl shadow-2xl border-4 border-white/30 overflow-hidden`}>
                    <div className="relative pt-8 pb-4 px-8">
                        <motion.div
                            variants={floatingVariants}
                            animate="animate"
                            className="text-center"
                        >
                            <div className="text-6xl mb-2 drop-shadow-lg">
                                {getRewardIcon(currentReward?.type)}
                            </div>
                            <motion.h2
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                className="text-3xl font-extrabold mb-2 drop-shadow-lg"
                            >
                                AMAZING REWARD!
                            </motion.h2>
                        </motion.div>
                    </div>

                    {currentReward?.icon && (
                        <div className="flex justify-center mb-4">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                                className="w-20 h-20 rounded-2xl border-4 border-white/50 shadow-xl overflow-hidden bg-white/10 backdrop-blur-sm"
                            >
                                <img
                                    src={currentReward.icon}
                                    alt={currentReward.type}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    )}

                    <div className="px-8 pb-6">
                        {currentReward?.type && (
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-center mb-4"
                            >
                                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                                    <span className="text-sm font-semibold uppercase tracking-wider">
                                        {currentReward.type}
                                    </span>
                                </div>
                            </motion.div>
                        )}

                        {currentReward?.reward && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-center mb-4"
                            >
                                <p className="text-2xl font-bold leading-tight drop-shadow-md">
                                    {currentReward.reward}
                                </p>
                            </motion.div>
                        )}
                    </div>

                    <motion.div
                        animate={{
                            background: [
                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                                "linear-gradient(90deg, transparent, transparent, transparent)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                    />
                </div>

            </motion.div>
        </motion.div>
    )
}
import { motion } from 'framer-motion';

export const CellTooltip = ({ styles, currentCell, isPlayerHere }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className={styles}
        >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-2xl border border-gray-600/50 backdrop-blur-sm min-w-48 max-w-64">
                <div className="px-4 py-3 border-b border-gray-700/50">
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-2' >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">
                                    {currentCell.id}
                                </span>
                            </div>
                            <h3 className="font-semibold text-sm text-gray-100 truncate">
                                {currentCell.type}
                            </h3>
                        </div>
                        <img src={currentCell.icon} />
                    </div>
                </div>

                <div className="space-y-2 px-4 py-3">
                    {currentCell.reward && (
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-green-300">Reward: {currentCell.reward}</span>
                        </div>
                    )}
                </div>

                <div className="px-4 py-2 bg-gray-800/50 rounded-b-xl border-t border-gray-700/30">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">
                            Position #{currentCell.id}
                        </span>
                        {isPlayerHere && (
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-[#C4F198] rounded-full animate-pulse"></div>
                                <span className="text-[#C4F198] font-medium">You are here</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </motion.div>
    )
}
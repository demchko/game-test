import { motion } from 'framer-motion';
import { useState } from 'react';
import { MainCenterDice } from './MainCenterDice';
import { cellConfig } from '../shared/gameCellsData';
import Dice1 from '../assets/dice/Dice1.svg';
import Dice2 from '../assets/dice/Dice2.svg';
import Dice3 from '../assets/dice/Dice3.svg';
import Dice4 from '../assets/dice/Dice4.svg';
import Dice5 from '../assets/dice/Dice5.svg';
import Dice6 from '../assets/dice/Dice6.svg';
import { CellTooltip } from './CellTooltip';

export const MainGameComp = ({ isRolling, playerPosition, lastRollPosition, diceValue }) => {
    const [hoveredCell, setHoveredCell] = useState(null);
    const DiceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
    const boardSize = 6;
    const totalCells = boardSize * boardSize;

    const getGridPosition = (cellId) => {
        if (cellId < boardSize) {
            return { row: 0, col: cellId };
        }
        if (cellId < boardSize + (boardSize - 1)) {
            return { row: cellId - (boardSize - 1), col: boardSize - 1 };
        }
        if (cellId < boardSize + (boardSize - 1) + (boardSize - 1)) {
            return { row: boardSize - 1, col: (boardSize - 1) - (cellId - (boardSize * 2 - 2)) };
        }
        return { row: (boardSize - 1) - (cellId - (boardSize * 3 - 3)), col: 0 };
    };

    const isPerimeterCell = (row, col) => {
        return row === 0 || row === boardSize - 1 || col === 0 || col === boardSize - 1;
    };

    const isDiceCenterCell = (row, col) => {
        return (row === 2 || row === 3) && (col === 2 || col === 3);
    };

    const getTooltipPosition = (row, col) => {
        if (row === 0) return 'bottom';
        if (row === boardSize - 1) return 'top';
        if (col === 0) return 'right';
        if (col === boardSize - 1) return 'left';
        return 'top';
    };

    const getTooltipClasses = (position) => {
        const baseClasses = "absolute z-50 pointer-events-none";
        switch (position) {
            case 'top':
                return `${baseClasses} -top-16 left-1/2 transform -translate-x-1/2`;
            case 'bottom':
                return `${baseClasses} -bottom-16 left-1/2 transform -translate-x-1/2`;
            case 'left':
                return `${baseClasses} top-1/2 -left-48 transform -translate-y-1/2`;
            case 'right':
                return `${baseClasses} top-1/2 -right-48 transform -translate-y-1/2`;
            default:
                return `${baseClasses} -top-16 left-1/2 transform -translate-x-1/2`;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-2xl mb-6"
        >
            <div className="grid grid-cols-6 gap-1 aspect-square max-w-xl mx-auto">
                {[...Array(totalCells)].map((_, index) => {
                    const row = Math.floor(index / boardSize);
                    const col = index % boardSize;

                    if (isDiceCenterCell(row, col)) {
                        if (row === 2 && col === 2) {
                            return (
                                <MainCenterDice key={index} col={col} row={row} isRolling={isRolling} imgSrc={DiceIcons[diceValue - 1]} />
                            );
                        }
                        return null;
                    }

                    if (!isPerimeterCell(row, col)) {
                        return <div key={index} className="aspect-square" />;
                    }

                    let currentCell = null;
                    for (let i = 0; i < cellConfig.length; i++) {
                        const pos = getGridPosition(cellConfig[i].id);
                        if (pos.row === row && pos.col === col) {
                            currentCell = cellConfig[i];
                            break;
                        }
                    }

                    if (!currentCell) {
                        return <div key={index} className="aspect-square bg-gray-700/20 rounded-xl border-2 border-white/10" />;
                    }

                    const isPlayerHere = playerPosition === currentCell.id;
                    const isLastRoll = lastRollPosition === currentCell.id;
                    const tooltipPosition = getTooltipPosition(row, col);

                    return (
                        <div className="relative">
                            <motion.div
                                key={index}
                                className={`min-w-11 min-h-11 bg-black/30 rounded-xl border-2 border-white/20
                                            relative overflow-visible cursor-pointer transition-all duration-300
                                            hover:scale-105 hover:border-white/50`}
                                animate={{
                                    boxShadow: isLastRoll ? [
                                        '0 0 0 rgba(255,255,255,0.8)',
                                        '0 0 20px rgba(255,255,255,0.8)',
                                        '0 0 0 rgba(255,255,255,0.8)'
                                    ] : '0 0 0 rgba(255,255,255,0)',
                                    scale: isLastRoll ? [1, 1.1, 1] : 1
                                }}
                                transition={{ duration: 0.6, repeat: isLastRoll ? 3 : 0 }}
                                onMouseEnter={() => setHoveredCell(currentCell.id)}
                                onMouseLeave={() => setHoveredCell(null)}
                            >
                                <img
                                    src={currentCell.icon}
                                    className={`w-full h-full ${isPlayerHere && "border-4 border-[#C4F198]"} object-cover rounded-xl`}
                                    alt={currentCell.type}
                                />
                            </motion.div>

                            {/* Tooltip */}
                            {hoveredCell === currentCell.id && (
                                <CellTooltip styles={getTooltipClasses(tooltipPosition)} currentCell={currentCell} isPlayerHere={isPlayerHere} />
                            )}
                        </div>
                    );
                })}
            </div>
        </motion.div>
    )
}
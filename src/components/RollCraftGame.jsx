import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { cellConfig } from '../shared/gameCellsData';
import { GameName } from './GameName';
import { GameHeader } from './GameHeader';
import { RewardPopup } from './RewardPopup';
import { Footer } from './Footer';
import { MainGameComp } from './MainGameComp';
import { RollButton } from './RollButton';


const RollCraftGame = () => {
    const [playerPosition, setPlayerPosition] = useState(0);
    const [diceValue, setDiceValue] = useState(1);
    const [isRolling, setIsRolling] = useState(false);
    const [rollsLeft, setRollsLeft] = useState(10);
    const [lastRollPosition, setLastRollPosition] = useState(null);
    const [showRewardPopup, setShowRewardPopup] = useState(false);
    const [currentReward, setCurrentReward] = useState({});

    const rollDice = async () => {
        if (isRolling || rollsLeft === 0) return;

        setIsRolling(true);
        setRollsLeft(prev => prev - 1);

        const rollAnimation = new Promise(resolve => {
            let rolls = 0;
            const rollInterval = setInterval(() => {
                setDiceValue(Math.floor(Math.random() * 6) + 1);
                rolls++;
                if (rolls >= 10) {
                    clearInterval(rollInterval);
                    const finalValue = Math.floor(Math.random() * 6) + 1;
                    setDiceValue(finalValue);
                    resolve(finalValue);
                }
            }, 100);
        });

        const finalDiceValue = await rollAnimation;

        setTimeout(() => {
            const newPosition = (playerPosition + finalDiceValue) % cellConfig.length;
            setPlayerPosition(newPosition);
            setLastRollPosition(newPosition);
            setIsRolling(false);

            const reward = cellConfig[newPosition];
            setCurrentReward(reward);
            setShowRewardPopup(true);

            setTimeout(() => {
                setShowRewardPopup(false);
                setLastRollPosition(null);
            }, 4000);
        }, 1000);
    };

    return (
        <>
            <GameName />
            <div className="max-w-4xl mx-auto px-5">
                {/* Popup */}
                <AnimatePresence>
                    {showRewardPopup && <RewardPopup currentReward={currentReward} />}
                </AnimatePresence>

                <GameHeader rollsLeft={rollsLeft} />
                <MainGameComp isRolling={isRolling} playerPosition={playerPosition} lastRollPosition={lastRollPosition} diceValue={diceValue} />
                <RollButton rollDice={rollDice} isRolling={isRolling} rollsLeft={rollsLeft} />
                <Footer />
            </div>
        </>
    );
};

export default RollCraftGame;
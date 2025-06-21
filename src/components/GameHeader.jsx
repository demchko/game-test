import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const GameHeader = ({ rollsLeft }) => {
    const [timeToNextRoll, setTimeToNextRoll] = useState(29 * 60 + 9);
    const timerRef = useRef(null);

    useEffect(() => {
        if (rollsLeft === 0) {
            timerRef.current = setInterval(() => {
                setTimeToNextRoll(prev => {
                    if (prev <= 1) {
                        setRollsLeft(10);
                        return 29 * 60 + 9;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [rollsLeft]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl mb-6 max-w-xl mx-auto"
        >
            <div className="flex items-center justify-between mb-1">
                <span className="text-white font-medium text-sm">Available rolls</span>
                <span className="text-white font-bold text-xl">{rollsLeft}/10</span>
            </div>

            <div className="flex gap-[3px] mb-2">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: i < rollsLeft ? 1 : 0.95
                        }}
                        className={`flex-1 h-4 rounded-sm ${i < rollsLeft
                            ? 'bg-yellow-500'
                            : 'bg-gray-400/50'
                            } ${i === 0 && "rounded-l-xl"} ${i === 9 && "rounded-r-xl"}`}
                    />
                ))}
            </div>

            <div className="text-center">
                <div className="font-mono text-white/60 rounded-2xl px-4 py-1 inline-block border border-white/60">
                    {rollsLeft === 0 ? formatTime(timeToNextRoll) : '00:29:09'}
                </div>
            </div>
        </div>
    )
}
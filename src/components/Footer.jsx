import { useState, useRef, useEffect } from "react";
import { HelpCircle, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Target, Trophy } from "lucide-react";

export const Footer = () => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const tooltipRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setIsTooltipOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleTooltip = () => {
        setIsTooltipOpen(!isTooltipOpen);
    };

    return (
        <div className="w-full flex justify-center mt-6 relative">
            <div className="relative" ref={tooltipRef}>
                <button
                    onClick={toggleTooltip}
                    className="bg-transparent border border-white/20 text-white/30 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    How to play?
                </button>

                {isTooltipOpen && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                            <div className="w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45"></div>
                        </div>

                        <div className="space-y-4">
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Roll Craft Game</h3>
                                <p className="text-sm text-gray-600">Master the art of dice rolling and crafting!</p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Dice1 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">Roll the Dice</h4>
                                        <p className="text-xs text-gray-600">Click to roll your dice and get random numbers</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Target className="w-4 h-4 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">Craft Combinations</h4>
                                        <p className="text-xs text-gray-600">Use your dice results to create powerful combinations</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Trophy className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">Score Points</h4>
                                        <p className="text-xs text-gray-600">Earn points based on your crafted combinations</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-xs text-gray-500 italic">
                                    Strategy tip: Save your best dice and re-roll the others!
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Footer;
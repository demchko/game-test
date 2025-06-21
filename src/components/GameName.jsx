import Line from '../assets/line.svg';

export const GameName = () => {
    return (
        <div
            className="w-full mb-6 flex justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto overflow-hidden"
        >
            <div className='flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0'>
                <img
                    src={Line}
                    alt="Decorative line"
                    className="flex-shrink-0 w-1/3  h-auto object-contain"
                />
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center whitespace-nowrap">
                    Roll Craft
                </h1>
                <img
                    src={Line}
                    alt="Decorative line"
                    className="flex-shrink-0 w-1/3 h-auto object-contain"
                />
            </div>
        </div>
    )
}
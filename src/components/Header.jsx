import { ChevronDown, ChevronLeft, Ellipsis, HelpCircle, LogOut, Settings, User } from "lucide-react"
import Logo from "../assets/white-green-logo.svg";
import { useEffect, useRef, useState } from "react";


export const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMenuItemClick = (action) => {
        console.log(`Clicked: ${action}`);
        setIsDropdownOpen(false);
        // Add your menu item logic here
    };
    return (
        <div className="w-full flex justify-between items-center mb-4 sm:mb-6 lg:mb-8 gap-2 sm:gap-4 lg:gap-10">
            <button className='w-16 sm:w-20 lg:w-[100px] text-white flex items-center justify-center sm:justify-start gap-1 sm:gap-2 p-2 rounded-xl sm:rounded-2xl bg-white bg-opacity-20 text-xs sm:text-sm lg:text-sm transition-all duration-200 hover:bg-opacity-30'>
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Close</span>
            </button>

            <div className="flex-1 flex justify-center">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-8 sm:h-10 lg:h-12 w-auto object-contain max-w-[120px] sm:max-w-[150px] lg:max-w-none"
                />
            </div>

            <div ref={dropdownRef} className="relative" >
                <button onClick={toggleDropdown} className='w-16 sm:w-20 lg:w-[100px] text-white flex items-center justify-center gap-1 sm:gap-2 p-2 rounded-xl sm:rounded-2xl bg-white bg-opacity-20 text-xs sm:text-sm lg:text-sm transition-all duration-200 hover:bg-opacity-30'>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    <Ellipsis className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-900">Artem Demchko</p>
                            <p className="text-xs text-gray-500">demchkoartem05@gmail.com</p>
                        </div>

                        <button
                            onClick={() => handleMenuItemClick('profile')}
                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <User className="w-4 h-4" />
                            Profile
                        </button>

                        <button
                            onClick={() => handleMenuItemClick('settings')}
                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <Settings className="w-4 h-4" />
                            Settings
                        </button>

                        <button
                            onClick={() => handleMenuItemClick('help')}
                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <HelpCircle className="w-4 h-4" />
                            Help
                        </button>

                        <div className="border-t border-gray-100 mt-2 pt-2">
                            <button
                                onClick={() => handleMenuItemClick('logout')}
                                className="w-full flex items-center gap-3 px-4 py-2 text-sm bg-red-700 rounded-xl text-white hover:bg-red-800 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

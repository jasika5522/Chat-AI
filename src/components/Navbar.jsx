// src/components/Navbar.jsx

import React, { useState } from 'react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className={`flex items-center justify-between ${isDarkMode ? 'bg-black' : 'bg-white'} p-4`}>
          <div className={`${isDarkMode ? 'text-white' : 'text-black'} font-bold text-lg`}>CHAT AI</div>
          <button
            className={`text-${isDarkMode ? 'white' : 'black'} bg-transparent border border-solid border-${isDarkMode ? 'white' : 'black'} px-3 py-1 rounded`}
            onClick={toggleTheme}
          >
            {isDarkMode ? 'Light Theme' : 'Dark Theme'}
          </button>
        </nav>
    );
};

export default Navbar;


import { useState, useEffect } from 'react';
// import darkmode from '../assets/darkbutton.png';
// import lightmode from '../assets/lightbutton.png';
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa6";
function Darkmode() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const element = document.documentElement;
        if (theme === "dark") {
            element.classList.add("dark");
            element.classList.remove("light");
        } else {
            element.classList.add("light");
            element.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
    };

    return (
        <button onClick={toggleTheme} className="relative flex gap-2">
            {/* <img
                onClick={toggleTheme}
                src={lightmode}
                alt="lightmode"
                className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
            />
            <img
                onClick={toggleTheme}
                src={darkmode}
                alt="darkmode"
                className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-all duration-300`}
            /> */}
            <FiSun  className={`cursor-pointer  ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-all duration-300`}/>
            <FaRegMoon className={` cursor-pointer top-0 absolute  z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}/>
            <div>{theme}</div>
        </button>
    );
}

export default Darkmode;
import LightIco from "../assets/light.svg";
import DarkIco from "../assets/dark.svg";
import { useState } from "react";
import Search from "./Search";

export default function Navbar() {
    const [mode, setMode] = useState("dark");

    function handleMode() {
        setMode(mode === "light" ? "dark" : "light");
        document.body.classList.toggle("dark");
    }

    return (
        <nav className="flex justify-between px-8 items-center p-4 shadow-sm bg-gray-200 dark:bg-gray-800 dark:text-white">
            <a href="/" className="text-xl font-serif">
                Dictionary
            </a>
            <Search />
            <img
                src={mode === "light" ? LightIco : DarkIco}
                className="w-6 cursor-pointer hover:scale-105 duration-500"
                onClick={handleMode}
                alt="mode-switcher"
            />
        </nav>
    );
}

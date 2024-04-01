import { useContext, useState } from "react";
import SearchIco from "../assets/search.svg";
import { DictionaryContext } from "../contexts";

export default function Search() {
    const [search, setSearch] = useState("");
    const { setSearchData } = useContext(DictionaryContext);

    function handleSearch() {
        if (search.length < 1) return;

        async function fetchData() {
            const response = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
            );
            const data = await response.json();
            setSearchData(data[0]);
        }
        fetchData();
    }

    return (
        <div className="flex items-center border dark:border-black ">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 outline-none focus:shadow-innerd dark:bg-gray-500 dark:text-white"
            />
            <button
                className="p-2 bg-slate-300 hover:scale-95 duration-500"
                onClick={handleSearch}
            >
                <img src={SearchIco} alt="seach" className="w-6" />
            </button>
        </div>
    );
}

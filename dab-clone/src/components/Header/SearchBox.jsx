import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
    return (
        <form action="" className="flex">
            <input
                type="text"
                placeholder="Search Domain"
                className="py-3 px-8 rounded-full w-96 outline-none focus:shadow-2xl"
            />
            <button className="bg-gradient-to-l hover:bg-gradient-to-r to-pink-700 from-orange-400 h-10 m-1 px-5 -ml-32 rounded-full flex justify-center items-center gap-2">
                Search
                <IoSearch />
            </button>
        </form>
    );
}

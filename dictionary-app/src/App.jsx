import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import FooterBar from "./components/FooterBar";
import { DictionaryContext } from "./contexts";
import Empty from "./components/Empty";

export default function App() {
    const [searchData, setSearchData] = useState({});
    return (
        <div className="flex flex-col min-h-screen">
            <DictionaryContext.Provider value={{ searchData, setSearchData }}>
                <Navbar />
                {searchData?.word ? <Main /> : <Empty />}
            </DictionaryContext.Provider>
            <FooterBar />
        </div>
    );
}

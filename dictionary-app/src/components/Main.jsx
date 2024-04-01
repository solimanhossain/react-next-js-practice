import { useContext } from "react";
import { DictionaryContext } from "../contexts";
import Definations from "./Definations";
import Phonetics from "./Phonetics";

export default function Main() {
    const { searchData } = useContext(DictionaryContext);
    const { word, phonetics, meanings } = searchData;
    // console.log(searchData);

    return (
        <>
            <main className="flex-1 bg-gray-100 dark:bg-gray-700 dark:text-white flex justify-center">
                <section className="m-8 grid grid-cols-1 gap-4">
                    <div className="flex justify-center items-center gap-4  p-4 rounded-md">
                        <h2 className="text-4xl font-mono font-extrabold ">
                            {word}
                        </h2>
                        |
                        {phonetics?.map((phonetic, index) => (
                            <Phonetics key={index} phonetic={phonetic} />
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        {meanings?.map((meaning) => (
                            <Definations
                                key={meaning?.partOfSpeech}
                                meaning={meaning}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

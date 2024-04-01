export default function Definations({ meaning }) {
    const { partOfSpeech, definitions, synonyms, antonyms } = meaning;

    return (
        <div className="border dark:border-white p-4 rounded-md">
            <p className="font-bold text-xl underline">{partOfSpeech}</p>
            <ul className="list-disc list-inside ml-8">
                {definitions?.map((def) => (
                    <li key={def?.definition}>{def?.definition}</li>
                ))}
            </ul>

            {synonyms?.length > 0 && (
                <div className="m-2 text-lg">
                    <span className="font-bold italic">Synonyms : </span>
                    {synonyms?.map((synonym) => (
                        <span key={synonym}>{synonym}, </span>
                    ))}
                </div>
            )}
            {antonyms?.length > 0 && (
                <div className="m-2  text-lg">
                    <span className="font-bold italic">Antonyms : </span>
                    {antonyms?.map((antonym) => (
                        <span key={antonym}> {antonym}, </span>
                    ))}
                </div>
            )}
        </div>
    );
}

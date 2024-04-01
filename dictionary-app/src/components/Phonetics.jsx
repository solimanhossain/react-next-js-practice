import AudioIco from "../assets/audio.svg";

export default function Phonetics({ phonetic }) {
    return (
        <div className="flex">
            {phonetic?.text && (
                <span className="font-bold">{phonetic?.text + " "}</span>
            )}
            {phonetic?.audio && (
                <img
                    src={AudioIco}
                    className="w-6 cursor-pointer bg-gray-100 border p-1 rounded-full hover:scale-105 duration-500"
                    onClick={() => new Audio(phonetic?.audio).play()}
                    alt="audio"
                />
            )}
            &nbsp; :&nbsp;
        </div>
    );
}

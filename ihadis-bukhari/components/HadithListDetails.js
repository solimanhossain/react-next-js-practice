import Image from "next/image";
import ExtraOptions from "./ExtraOptions";

export default function HadithListDetails({ hadith, topId }) {
    return (
        <>
            <div className="p-4 bg-white my-4 rounded-xl">
                <div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/svg/star.svg"
                            alt="copy"
                            width="24"
                            height="24"
                        />
                        <span className="text-lg text-primary">
                            {topId?.split("/")[1]}
                        </span>
                    </div>

                    <p className="text-3xl p-6 font-extralight">{hadith?.ar}</p>
                    <h4 className="text-primary text-lg p-2">
                        {hadith?.narrator} থেকে বর্ণিত:
                    </h4>
                    <p className="text-lg p-2">{hadith?.bn}</p>
                </div>
                <div className="flex justify-between p-4">
                    <div className="flex items-center gap-2 text-base">
                        হাদিসের মান :
                        <button className="bg-primary text-white px-2 py-1 rounded-md text-sm">
                            {hadith?.grade}
                        </button>
                    </div>
                    <ExtraOptions />
                </div>
            </div>
        </>
    );
}

import Image from "next/image";
import HadithListDetails from "./HadithListDetails";

function SectionDetails({ section }) {
    return (
        <div className="p-4 bg-white my-4 rounded-xl">
            <div className="border-b border-gray-50">
                <div className="flex items-center gap-4">
                    <Image
                        src="/svg/openbook.svg"
                        alt="copy"
                        width="24"
                        height="24"
                    />
                    <span className="text-lg">{section?.number}</span>
                </div>
                <h3 className="text-lg py-4">{section?.title}</h3>
            </div>
            <p className="text-base text-gray-600 py-4">{section?.preface}</p>
        </div>
    );
}

export default async function HadithDetails() {
    const sections = await fetch(`${process.env.BASE_URL}/api/section`).then(
        (response) => response.json()
    );
    const hadiths = await fetch(`${process.env.BASE_URL}/api/hadith`).then(
        (response) => response.json()
    );

    return (
        <>
            {sections?.map((section, index) => (
                <div key={section?.id} className="bg-lightbg">
                    <SectionDetails section={section} />
                    <HadithListDetails
                        hadith={hadiths[index]}
                        topId={section?.number.split(".")[0]}
                    />
                </div>
            ))}
        </>
    );
}

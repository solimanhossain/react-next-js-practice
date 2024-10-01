import Image from "next/image";
import iHadisLogo from "../public/logo.png";
import searchLogo from "../public/svg/search.svg";
import helpingHand from "@/public/icon/helping-hand.svg";

export default function Navbar() {
    return (
        <>
            <nav className="bg-white p-4 dark:bg-dark flex justify-between items-center">
                <div className="container flex items-center gap-4">
                    <Image
                        className="h-11 w-11"
                        src={iHadisLogo}
                        alt="iHadis logo"
                    />
                    <div className="flex flex-col px-2">
                        <h2 className="text-xl font-bold">হাদিস সমূহ</h2>
                        <p className="text-sm">হাদিস পড়ুন শিখুন এবং জানুন</p>
                    </div>
                </div>
                <div className="flex gap-16">
                    <div className="flex relative items-center">
                        <input
                            type="text"
                            placeholder="অনুসন্ধান করুন..."
                            className="h-12 text-base border-2 border-gray-300 focus:outline-0 p-3 rounded-lg"
                        />
                        <Image
                            className="h-5 w-5 absolute z-10 right-4"
                            src={searchLogo}
                            alt="search logo"
                        />
                    </div>
                    <div className="flex gap-2 w-36 bg-primary rounded-lg items-center justify-center px-4">
                        <p className="text-white text-base">সাপোর্ট করুন</p>
                        <Image
                            className="h-6 w-6"
                            src={helpingHand}
                            alt="setting logo"
                        />
                    </div>
                </div>
            </nav>
        </>
    );
}

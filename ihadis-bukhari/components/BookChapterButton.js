"use client";

import Image from "next/image";
import searchLogo from "@/public/svg/search.svg";
import { useState } from "react";
import BookChapterList from "./BookChapterList";

export default function BookChapterButton({ books, chapters }) {
    const [isBook, setIsBook] = useState(true);

    return (
        <>
            <div className="border-b flex gap-2 justify-around bg-white rounded-t-2xl">
                <div
                    onClick={() => setIsBook(true)}
                    className={`${
                        isBook && "bg-primary text-white"
                    } rounded-tl-2xl w-full p-4 text-center  cursor-pointer`}
                >
                    <p className="text-lg">বই</p>
                </div>
                <div
                    onClick={() => setIsBook(false)}
                    className={`${
                        !isBook && "bg-primary text-white"
                    } rounded-tr-2xl w-full p-4 text-center cursor-pointer`}
                >
                    <p className="text-lg">অধ্যায়</p>
                </div>
            </div>

            <div className="p-4 bg-white">
                <div className="flex relative items-center px-4">
                    <input
                        type="text"
                        placeholder="Search For Filters"
                        className=" w-full h-12 text-base bg-slate-100 focus:outline-0 p-3 rounded-lg"
                    />
                    <Image
                        className="h-5 w-5 absolute z-20 right-6"
                        src={searchLogo}
                        alt="search logo"
                    />
                </div>
            </div>

            <BookChapterList data={isBook ? books : chapters}>
                {isBook
                    ? `সর্বমোট হাদিস - ${books[0]?.number_of_hadis}`
                    : `হাদিসের রেঞ্জ: ${chapters[0]?.hadis_range}`}
            </BookChapterList>
        </>
    );
}

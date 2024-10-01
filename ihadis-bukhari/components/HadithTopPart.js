import Image from "next/image";

export default function HadithTopPart({ book, chapter }) {
    return (
        <>
            <div className="bg-slate-50 border-b rounded-t-lg p-4 flex gap-2">
                <Image
                    className="h-auto w-auto"
                    src="/svg/book.svg"
                    width="16"
                    height="16"
                    alt="book"
                />
                <p className="text-base text-slate-500 capitalize">{`| ${book?.book_name} | ${book.id}`}</p>
            </div>
            <div className="bg-white p-4 rounded-b-lg flex justify-between">
                <div className="flex gap-4 items-center">
                    <Image
                        src="/svg/stackbooks.svg"
                        alt="book"
                        width="64"
                        height="64"
                    />
                    <div className="font-medium">
                        <h1 className="text-2xl">{book?.title}</h1>
                        <p className="text-sm">
                            সর্বমোট হাদিস - {book?.number_of_hadis}
                        </p>
                    </div>
                </div>
                <h2 className="text-3xl">{book?.title_ar}</h2>
            </div>
            <div className="bg-white my-4 p-2 rounded-xl text-xl">
                <div className="flex items-center p-2">
                    <p className="bg-primary text-white px-3 py-1 rounded-lg">
                        {chapter?.hadis_range.split(" ")[0]}
                    </p>
                    <p className="text-gray-600 font-normal px-4">
                        {chapter?.title}
                    </p>
                </div>
            </div>
        </>
    );
}

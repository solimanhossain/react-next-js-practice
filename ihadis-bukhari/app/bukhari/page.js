import BookChapterButton from "@/components/BookChapterButton";
import HadithTopPart from "@/components/HadithTopPart";
import HadithDetails from "@/components/HadithDetails";
import SettingBar from "@/components/SettingBar";
import Support from "@/components/Support";

export default async function BukhariPage() {
    const books = await fetch(`${process.env.BASE_URL}/api/books`).then((res) =>
        res.json()
    );
    const chapters = await fetch(`${process.env.BASE_URL}/api/chapter`).then(
        (res) => res.json()
    );

    return (
        <div className="flex p-4 gap-4">
            <div className="w-1/4 rounded-2xl">
                <BookChapterButton books={books} chapters={chapters} />
            </div>
            <div className="w-2/4 rounded-lg">
                <HadithTopPart book={books[0]} chapter={chapters[0]} />
                <HadithDetails />
            </div>
            <div className="w-1/4 rounded-2xl">
                <SettingBar />
                <Support />
            </div>
        </div>
    );
}

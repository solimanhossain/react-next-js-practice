import Category from "./Section/Category";
import Market from "./Section/Market";
import Choose from "./Section/Choose";

export default function Sections() {
    return (
        <main className="relative">
            <Market />
            <Category />
            <Choose />
        </main>
    );
}

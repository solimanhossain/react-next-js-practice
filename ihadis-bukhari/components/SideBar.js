import Image from "next/image";
import Link from "next/link";

function SideBarLogo({ icon }) {
    return (
        <li className="p-4 hover:bg-lightbg rounded-lg">
            <Link href="#">
                <Image
                    src={`/icon/${icon}.svg`}
                    alt="books"
                    width="32"
                    height="32"
                />
            </Link>
        </li>
    );
}

export default function SideBar() {
    return (
        <div className="bg-white h-full px-4 flex relative">
            <ul className="flex flex-col py-24 gap-5">
                <SideBarLogo icon="home" />
                <li className="p-4 bg-primary rounded-lg">
                    <Link href="#">
                        <Image
                            src={`/icon/book.svg`}
                            alt="books"
                            width="32"
                            height="32"
                        />
                    </Link>
                </li>
                <SideBarLogo icon="bookmark" />
                <SideBarLogo icon="others" />
                <SideBarLogo icon="subject" />
                <SideBarLogo icon="goto" />
            </ul>
        </div>
    );
}

import Image from "next/image";
import Link from "next/link";

export default function ExtraOptions() {
    return (
        <div className="flex items-center gap-8">
            <Link href="#">
                <Image src="/svg/copy.svg" alt="copy" width="24" height="24" />
            </Link>
            <Link href="#">
                <Image
                    src="/svg/mark.svg"
                    alt="bookmark"
                    width="24"
                    height="24"
                />
            </Link>
            <Link href="#">
                <Image
                    src="/svg/share.svg"
                    alt="share"
                    width="24"
                    height="24"
                />
            </Link>
            <Link href="#">
                <Image
                    src="/svg/report.svg"
                    alt="report"
                    width="24"
                    height="24"
                />
            </Link>
            <Link href="#">
                <Image
                    src="/svg/direct.svg"
                    alt="direct"
                    width="24"
                    height="24"
                />
            </Link>
        </div>
    );
}

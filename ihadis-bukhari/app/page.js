import { redirect } from "next/navigation";

export default function Home() {
    redirect(`/bukhari`);

    return (
        <div>
            <p>go to `/bukhari` page</p>
        </div>
    );
}

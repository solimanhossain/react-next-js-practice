import SideBar from "@/components/SideBar";

export default function BukhariLayout({ children }) {
    return (
        <main className="flex">
            <SideBar />
            <section className="w-full bg-lightbg dark:bg-darkbg rounded-tl-2xl p-2">
                {children}
            </section>
        </main>
    );
}

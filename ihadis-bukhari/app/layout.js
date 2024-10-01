import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import "./globals.css";

const kalpurushFont = localFont({ src: "../public/fonts/kalpurush.ttf" });

export const metadata = {
    title: "আল হাদিস - iHadis.com",
    description: "iHadis.com | আপনার পছন্দের হাদিস খুঁজুন",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${kalpurushFont.className} text-gray-900 dark:text-gray-300`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}

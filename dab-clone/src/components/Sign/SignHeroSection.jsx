import { Link } from "react-router-dom";

export default function SignHeroSection({
    children,
    title,
    description,
    isRegister,
}) {
    return (
        <>
            <div className="flex flex-col text-center p-4">
                <h3 className="text-xl font-medium p-2">{title}</h3>
                <p className="text-sm p-2">{description}</p>
            </div>
            <Link
                className="border-2 border-white px-4 py-2 rounded-full text-xs hover:bg-white hover:text-blue-500 "
                href={isRegister ? "signup" : "signin"}
            >
                {isRegister ? "SIGN UP" : "SIGN IN"}
            </Link>
            {children}
        </>
    );
}

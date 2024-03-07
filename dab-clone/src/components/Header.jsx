import { useLocation } from "react-router-dom";
import SearchBox from "./Header/SearchBox";
import NavBar from "./Header/NavBar";
import SittingImg from "../assets/image/sitting.png";
import "../style/style.css";

export default function Header() {
    const location = useLocation();
    return (
        <>
            <header className=" sticky top-0 z-50">
                <NavBar />
            </header>
            {location.pathname === "/" && (
                <div className="search-section flex justify-evenly text-white">
                    <div className="flex flex-col justify-center">
                        <p className="text-xl">I Would Like To</p>
                        <h1 className="text-5xl font-mediump-4">
                            Buy Or Sell Domains
                        </h1>
                        <p className="text-xl pb-4">
                            Now It is Even Easier To Buy And Sell Premium
                            Domains.
                        </p>
                        <SearchBox />
                    </div>
                    <div className="flex flex-col justify-center">
                        <img src={SittingImg} alt="sitting" className="h-1/2" />
                    </div>
                </div>
            )}
        </>
    );
}

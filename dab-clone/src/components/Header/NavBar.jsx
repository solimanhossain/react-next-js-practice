import DabLogo from "../../assets/image/dablogo.png";
import { FaShoppingBasket, FaCartPlus, FaGavel } from "react-icons/fa";
import NavBtn from "./NavBtn";
import { useState } from "react";

export default function NavBar() {
    const [money, setMoney] = useState("BDT");
    return (
        <nav className="flex justify-around pt-5 p-2 bg-gradient-to-r from-blue-700 to-blue-500 shadow-md drop-shadow-xl shadow-blue-500">
            <div className="w-36">
                <a href="/">
                    <img src={DabLogo} alt="#DAB" />
                </a>
            </div>
            <div className="flex justify-center items-center text-white">
                <ul className="flex gap-5">
                    <NavBtn url="buydomain" txt="Buy Domain">
                        <FaShoppingBasket />
                    </NavBtn>
                    <NavBtn url="selldomain" txt="Sell Domain">
                        <FaCartPlus />
                    </NavBtn>
                    <NavBtn url="liveauction" txt="Live Auction">
                        <FaGavel />
                    </NavBtn>

                    <NavBtn url={"signin"}>Sign In</NavBtn>
                    <NavBtn url={"signup"}>Get Started</NavBtn>
                    <li>
                        <button
                            className="flex bg-transparent items-center gap-2 px-6 outline outline-1 rounded-full hover:bg-white hover:text-blue-500 duration-700 w-[100px]"
                            onClick={() =>
                                setMoney(money === "BDT" ? "USD" : "BDT")
                            }
                        >
                            ⇄ {money}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

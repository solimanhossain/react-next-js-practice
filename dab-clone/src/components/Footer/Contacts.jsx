import FooterList from "./FooterList";
import DabLogo from "../../assets/image/dablogo.png";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Contacts() {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white mx-auto px-48 py-16 flex items-center justify-around z-10">
            <img src={DabLogo} alt="" width={150} />
            <FooterList title={"ABOUT"} />
            <FooterList title={"USEFUL LINK"} />
            <FooterList title={"FIND US"} />
            <div>
                <h1 className="text-xl pb-6">CONTACT WITH US</h1>
                <a href="#" className="text-sm">
                    admin@dab.com.bd
                </a>
                <div className="flex gap-4 p-4">
                    <a href="#">
                        <FaYoutube />
                    </a>
                    <a href="#">
                        <FaInstagram />
                    </a>
                    <a href="#">
                        <FaFacebook />
                    </a>
                    <a href="#">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
}

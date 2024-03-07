import { useLocation } from "react-router-dom";
import Contacts from "./Footer/Contacts";
import Copyright from "./Footer/Copyrignt";
import SendMail from "./Footer/SendMail";

export default function Footer() {
    const location = useLocation().pathname === "/";
    return (
        <footer
            className={`footer footer-center bottom-0 relative ${
                location && "mt-32"
            }`}
        >
            {location && <SendMail />}
            <Contacts />
            <Copyright />
        </footer>
    );
}

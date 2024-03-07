import { Link } from "react-router-dom";

export default function NavBtn({ children, url, txt = null }) {
    return (
        <li className="flex flex-row">
            <Link
                to={url}
                className={`flex items-center gap-1.5 text-sm hover:drop-shadow-lg hover:text-orange-200 ${
                    txt ??
                    "py-1 px-4 rounded-full bg-gradient-to-r from-pink-700 to-orange-400 hover:bg-gradient-to-l duration-700"
                }`}
            >
                {children} {txt}
            </Link>
        </li>
    );
}

// const mystyle = {
//     width: 0,
//     height: 0,
//     borderTop: "100px solid transparent",
//     borderRight: "100px solid blue",
// };

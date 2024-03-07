import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sections from "./components/Sections";
import NoPage from "./components/NoPage";
import Layout from "./Layout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import BuyDomain from "./components/BuyDomain";

export default function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Sections />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="buydomain" element={<BuyDomain />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

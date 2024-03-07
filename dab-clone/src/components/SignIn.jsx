import SignLogo from "../assets/ico/sign.svg";
import EmailLogo from "../assets/ico/email.svg";
import LockLogo from "../assets/ico/lock.svg";
import InputField from "./Sign/InputField";
import SignHeroSection from "./Sign/SignHeroSection";

export default function SignIn() {
    return (
        <section className="grid grid-cols-2 m-auto ">
            <div className="flex flex-col justify-center items-center bg-gradient-to-l from-blue-700 to-blue-500 text-white p-12">
                <SignHeroSection
                    title="Are You New Here, Sign Up"
                    description="What a great choice! In just a minute, you will be
                    joined to our family to enjoy the full funtionality of
                    our service for absolutely free."
                >
                    <img src={SignLogo} width={500} />
                </SignHeroSection>
            </div>

            <div className="flex flex-col justify-start items-center gap-4 p-24">
                <h1 className="text-3xl font-medium p-2">Sign In</h1>
                <form
                    className="flex flex-col gap-4  justify-center items-center"
                    action=""
                >
                    <InputField type="email" placeholder=" Email Adress">
                        <img src={EmailLogo} />
                    </InputField>
                    <InputField type="password" placeholder=" Password">
                        <img src={LockLogo} />
                    </InputField>
                    <label className="text-sm">
                        <input type="checkbox" /> Remember Me
                    </label>
                    <a className="text-sm text-blue-500" href="signup">
                        Forget Password?
                    </a>
                    <button
                        className="bg-blue-500 text-white px-12 py-4 rounded-full hover:bg-blue-600"
                        type="button"
                    >
                        LOGIN
                    </button>
                    <div className="relative flex items-center"></div>
                </form>
            </div>
        </section>
    );
}

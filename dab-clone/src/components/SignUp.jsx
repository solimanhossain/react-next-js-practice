import RegisterLogo from "../assets/ico/register.svg";
import EmailLogo from "../assets/ico/email.svg";
import LockLogo from "../assets/ico/lock.svg";
import UserLogo from "../assets/ico/user.svg";
import CallLogo from "../assets/ico/call.svg";
import InputField from "./Sign/InputField";
import SignHeroSection from "./Sign/SignHeroSection";

export default function SignUp() {
    return (
        <section className="grid grid-cols-2 m-auto ">
            <div className="flex flex-col justify-start items-center gap-4 p-8">
                <h1 className="text-3xl font-medium p-2">Sign Up</h1>
                <form className="flex flex-col gap-4 justify-center items-center">
                    <InputField type="text" placeholder=" Name*">
                        <img src={UserLogo} />
                    </InputField>
                    <InputField type="email" placeholder=" Email Adress*">
                        <img src={EmailLogo} />
                    </InputField>
                    <InputField type="phone" placeholder=" +088">
                        <img src={CallLogo} />
                    </InputField>
                    <InputField type="password" placeholder=" Password*">
                        <img src={LockLogo} />
                    </InputField>
                    <button
                        className="bg-blue-500 text-white px-12 py-4 rounded-full hover:bg-blue-600"
                        type="button"
                    >
                        SIGN UP
                    </button>
                </form>
                <p className="text-sm px-8 mx-12">
                    By clicking Register now, you are agree to our Terms and
                    Conditions and confirm that you have read our Privacy policy
                </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-gradient-to-l from-blue-700 to-blue-500 text-white p-12">
                <SignHeroSection
                    title="Are You Have Account Or registered!"
                    description="Now it’s even easier to buy and sell premium domains.Sign in
                    and add your domain."
                    isRegister
                >
                    <img src={RegisterLogo} width={500} />
                </SignHeroSection>
            </div>
        </section>
    );
}

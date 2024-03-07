import Icon1 from "../../assets/icon/icon_1.png";
import Icon2 from "../../assets/icon/icon_2.png";
import Icon3 from "../../assets/icon/icon_3.png";
import ChooseBox from "./ChooseBox";

export default function Choose() {
    return (
        <section className="flex flex-col justify-items-center text-center mx-48 my-8">
            <div className="m-6">
                <h1 className="text-5xl font-medium text-gray-800 p-4">
                    Why Choose DAB
                </h1>
                <h2 className="text-xl text-gray-700 pb-4">
                    DAB provides you with trusted and professional tools to grow
                    your business online
                </h2>
            </div>
            <div className="flex justify-items-center align-items-center m-16 gap-5">
                <ChooseBox>
                    <img
                        src={Icon1}
                        alt=""
                        width={125}
                        className="hover:scale-125 hover:animate-spin"
                    />
                </ChooseBox>
                <ChooseBox>
                    <img
                        src={Icon2}
                        alt=""
                        width={125}
                        className="hover:scale-125 hover:animate-spin"
                    />
                </ChooseBox>
                <ChooseBox>
                    <img
                        src={Icon3}
                        alt=""
                        width={125}
                        className="hover:scale-125 hover:animate-spin"
                    />
                </ChooseBox>
            </div>
        </section>
    );
}

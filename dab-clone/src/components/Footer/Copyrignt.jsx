import SslcmzFooter from "../../assets/image/sslcmz.png";

export default function Copyright() {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-600 p-4">
            <img
                src={SslcmzFooter}
                alt="sslcmz"
                className="md:max-2xl:w-1/2 sm: w-3/4 m-auto"
            />
            <p className="text-center text-white text-xs mt-2">
                &copy; 2024 Soliman | All Rights Reserved DAB
            </p>
        </div>
    );
}

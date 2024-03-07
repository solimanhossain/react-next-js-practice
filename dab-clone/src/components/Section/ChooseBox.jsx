export default function ChooseBox({ children }) {
    return (
        <div className="flex flex-col justify-center items-center w-80 border border-gray-200 rounded-lg p-8 shadow-2xl hover:-translate-y-2 duration-300">
            {children}
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-medium text-gray-800 pb-2 pt-8">
                    {"Trusted by thousands"}
                </h1>
                <h3 className="text-lg text-gray-700 pb-4">
                    {
                        "We make easy for you to resgister, manage and secure your domain"
                    }
                </h3>
            </div>
            <a href="#" className="text-blue-900">
                READ MORE →
            </a>
        </div>
    );
}

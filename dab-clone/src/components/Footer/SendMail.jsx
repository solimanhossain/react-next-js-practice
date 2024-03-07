export default function SendMail() {
    return (
        <div className="flex mx-32 bg-white border border-gray-100 p-12 shadow-2xl -m-32 z-100 justify-around absolute gap-16 rounded">
            <div className="flex flex-col justify-center">
                <h1 className="text-xl font-bold text-gray-800 pb-2">
                    Get Started for Free
                </h1>
                <h3 className="text-base text-gray-700">
                    You do not need a credit card to get started with a free
                    subscription.
                </h3>
            </div>
            <div>
                <input
                    type="email"
                    className="border border-blue-300 px-16 py-4"
                    placeholder="Email Address..."
                />
                <button className="bg-blue-500 text-white px-6 py-4">
                    SUBCRIBE
                </button>
            </div>
        </div>
    );
}

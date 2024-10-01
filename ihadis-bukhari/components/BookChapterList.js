export default function BookChapterList({ children, data }) {
    return (
        <div className="flex flex-col bg-white rounded-b-2xl pb-8">
            {data?.map((data) => (
                <div
                    className="flex items-center mx-8 mb-2 p-4 gap-4 rounded-lg bg-primary/10 hover:bg-white cursor-pointer group"
                    key={data.id}
                >
                    <div className="flex justify-center items-center relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={64}
                            height={64}
                            viewBox="0 0 16 16"
                            className="fill-primary group-hover:fill-gray-100"
                        >
                            <path d="M5.4 2a1.5 1.5 0 0 0-1.3.75l-2.599 4.5a1.5 1.5 0 0 0 0 1.5l2.6 4.5a1.5 1.5 0 0 0 1.298.75h5.2a1.5 1.5 0 0 0 1.3-.75l2.599-4.5a1.5 1.5 0 0 0 0-1.5l-2.6-4.5A1.5 1.5 0 0 0 10.6 2z"></path>
                        </svg>
                        <p className="text-white group-hover:text-primary text-2xl absolute z-10 ">
                            {data?.number || data?.abvr_code}
                        </p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <h3 className="text-lg">{data?.title}</h3>
                        <p className="text-base text-gray-500">{children}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

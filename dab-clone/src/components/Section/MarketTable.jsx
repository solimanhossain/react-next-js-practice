function RowLink({ url, price }) {
    return (
        <li className="flex shadow-lg shadow-slate-200 m-2 justify-between px-4 py-2 text-base hover:scale-125 hover:drop-shadow-xl hover:border duration-500 pb-2">
            <a href={`${url}.com`}>
                {url}.<span className="text-violet-400">com</span>
            </a>
            <span className="pl-16">{price} BDT</span>
        </li>
    );
}

export default function MarketTable({ children, title, description }) {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                {children}
                <h2 className="text-2xl font-medium text-gray-800 pb-2 pt-8">
                    {title}
                </h2>
                <h3 className="text-xl text-gray-700 pb-4">{description}</h3>
            </div>
            <div className="m-4 text-gray-600">
                <ul>
                    <RowLink url={"Link1"} price={"4000"} />
                    <RowLink url={"TestLink2"} price={"5000"} />
                    <RowLink url={"TestLink3"} price={"6000"} />
                    <RowLink url={"Link4"} price={"7000"} />
                    <RowLink url={"TestLink5"} price={"8000"} />
                    <RowLink url={"TestLink6"} price={"9000"} />
                    <RowLink url={"TestLink7"} price={"10000"} />
                </ul>
            </div>
        </div>
    );
}

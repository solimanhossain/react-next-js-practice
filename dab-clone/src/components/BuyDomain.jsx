import { domainData } from "../database/domain.js";

export function DataList({ data, suggest }) {
    let colorChange;
    if (suggest) colorChange = data.id % 2 === 0 ? "bg-zinc-100" : "";

    return (
        <ul
            className={
                "grid grid-cols-6 items-center py-6 gap-16 text-sm text-zinc-800 p-4 hover:shadow-xl rounded-t-2xl duration-300  border-b border-zinc-300 " +
                colorChange
            }
        >
            <li>{data.domain}</li>
            <li>Min ({data.minprice} BDT)</li>
            <li>◕ Views ({data.views})</li>
            <li>⇱ Bids ({data.bids})</li>
            <li>{data.maxprice} BDT</li>
            <button className="bg-gradient-to-r hover:to-pink-700 hover:from-orange-400 to-blue-500 from-blue-800 p-3 text-white rounded-full">
                Make Offer
            </button>
        </ul>
    );
}

export default function BuyDomain() {
    let fakeData = domainData;

    return (
        <section className="flex flex-col justify-center items-center m-2">
            <div className="flex flex-col justify-center items-center text-zinc-800 m-4 p-8">
                <p className="text-3xl">Would you like to</p>
                <h1 className="text-7xl font-medium">Buy Domain</h1>
            </div>
            <form action="" className="flex">
                <input
                    type="text"
                    placeholder="Search through 18 milions domains names"
                    className="py-2.5 px-8 rounded-full w-[42rem] outline-none shadow-2xl   hover:shadow-zinc-500  duration-300"
                />
                <button className="bg-gradient-to-l hover:bg-gradient-to-r to-pink-700 from-orange-400 font-bold h-10 m-1 px-5 text-white -ml-28 rounded-full">
                    {"Search >"}
                </button>
            </form>

            <div className="m-8 text-center">
                <p className="font-medium text-zinc-700 m-2">Top Domain</p>

                <div className="border rounded-xl shadow-lg pb-4">
                    <ul className="grid grid-cols-6  gap-16 font-medium bg-blue-50 p-4 hover:shadow-xl rounded-t-xl duration-300 border-b border-zinc-300">
                        <li>Name</li>
                        <li>Min Price</li>
                        <li>Views</li>
                        <li>Bids</li>
                        <li>Price</li>
                        <li>Action</li>
                    </ul>
                    {fakeData.top.map((data) => (
                        <DataList key={data.id} data={data} />
                    ))}
                </div>
            </div>

            <div className="m-12 p-4 text-center">
                <p className="font-medium text-zinc-700 m-2">
                    Suggested Domain
                </p>
                <div className="flex justify-between pb-4 px-6">
                    <p>
                        Show{"  "}
                        <select>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="10">10</option>
                        </select>
                        {"  "}
                        Entries
                    </p>
                    <input
                        type="text"
                        name="search"
                        className="border rounded-full outline-none px-4"
                        placeholder="search domain"
                    />
                </div>
                <div className="border rounded-xl shadow-lg pb-4">
                    <ul className="grid grid-cols-6  gap-16 font-medium bg-blue-50 p-4 hover:shadow-xl rounded-t-xl duration-300 border border-zinc-300">
                        <li>Name ⇅</li>
                        <li>Min Price ⇅</li>
                        <li>Views ⇅</li>
                        <li>Bids ⇅</li>
                        <li>Price ⇅</li>
                        <li>Action ⇅</li>
                    </ul>
                    {fakeData.suggest.map((data) => (
                        <DataList key={data.id} data={data} suggest />
                    ))}
                </div>
            </div>
        </section>
    );
}

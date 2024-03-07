import MarketTable from "./MarketTable";
import Price1 from "../../assets/image/price-1.png";
import Price2 from "../../assets/image/price-2.png";
import Price3 from "../../assets/image/price-3.png";

export default function Market() {
    return (
        <section className="text-center mx-48 mb-8  bg-transparent">
            <div className="mb-12">
                <h1 className="text-5xl font-medium text-gray-800 p-4">
                    Domain Marketplace Of Bangladesh
                </h1>
                <h2 className="text-xl text-gray-700 pb-4">
                    Buy, Sell & Auction your domain easily. Find great deals on
                    domain names.
                </h2>
            </div>

            <div className="flex justify-around gap-10">
                <MarketTable
                    title={"Recently Added"}
                    description={"Search from listed Domain"}
                >
                    <img src={Price3} alt="Price3" />
                </MarketTable>
                <MarketTable
                    title={"Top Domain"}
                    description={"Buy or sell premium domain"}
                >
                    <img src={Price2} alt="Price2" />
                </MarketTable>
                <MarketTable
                    title={"Most Favourite"}
                    description={"Most bids domain are available"}
                >
                    <img src={Price1} alt="Price1" />
                </MarketTable>
            </div>
        </section>
    );
}

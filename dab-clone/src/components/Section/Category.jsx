// import Blog from "../assets/icon/blog.png";
import Media from "../../assets/icon/media.png";
import Business from "../../assets/icon/business.png";
import EComerce from "../../assets/icon/ecommerce.png";
import Technlogy from "../../assets/icon/technology.png";
import CategoryCard from "./CategoryCard";

export default function Category() {
    return (
        <section className="flex flex-col justify-center items-center my-12">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-medium">Choose Category</h1>
            </div>
            <hr className="w-1/3 h-px my-8 bg-gray-200 border-0 " />
            <div className="flex m-8 text-gray-600 p-4 gap-5">
                <CategoryCard title={"E-Comerce"}>
                    <img src={EComerce} alt="" className="m-auto" width={165} />
                </CategoryCard>
                <CategoryCard title={"Media"}>
                    <img src={Media} alt="" className="m-auto" width={165} />
                </CategoryCard>
                <CategoryCard title={"Technlogy"}>
                    <img src={Technlogy} className="m-auto" width={165} />
                </CategoryCard>
                <CategoryCard title={"Business"}>
                    <img src={Business} alt="" className="m-auto" width={165} />
                </CategoryCard>
                {/* <CategoryCard title={"Blog"}>
                    <img src={Blog} alt="" className="m-auto" width={165} />
                </CategoryCard> */}
            </div>
            <a
                href="#"
                className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-600 hover:text-white cursor-pointer hover:shadow-lg hover:-translate-y-2 duration-300"
            >
                View All Category
            </a>
        </section>
    );
}

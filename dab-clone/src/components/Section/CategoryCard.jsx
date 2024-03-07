export default function CategoryCard({ children, title, total = 5 }) {
    return (
        <div className="flex flex-col justify-center border rounded-lg p-4 cursor-pointer hover:shadow-lg hover:-translate-y-2 duration-200">
            <p className="p-2">{title}</p>
            <hr className="pb-4" />
            {children}
            <p className="p-2">{"Domain for sale"}</p>
            <hr />
            <div className="flex justify-between pt-2 px-2">
                <span className="pr-8">Total : {total} domains</span>
                <span>View All</span>
            </div>
        </div>
    );
}

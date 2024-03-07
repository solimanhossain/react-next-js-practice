export default function InputField({ children, type, placeholder }) {
    return (
        <div className="relative flex items-center">
            <input
                className="bg-gray-200 rounded-full py-3 px-8 w-80 outline-none focus:shadow-lg"
                type={type}
                placeholder={placeholder}
            />
            <div className="absolute left-4">{children}</div>
        </div>
    );
}
